package org.wecancodeit.serverside.controllers;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.models.Role;
import org.wecancodeit.serverside.models.User;
import org.wecancodeit.serverside.repositories.RoleRepository;
import org.wecancodeit.serverside.repositories.UserRepository;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class UserController {

    @Resource
    private UserRepository userRepo;

    @Resource
    private RoleRepository roleRepo;


    @GetMapping("/api/user")
    public Collection<User> getUser(){
         return (Collection<User>) userRepo.findAll();
    }

    @PostMapping("/api/user/add-user")
    public Collection<User> addUser(@RequestBody String body) throws JSONException{
        JSONObject newUser = new JSONObject(body);
        String firstName = newUser.getString("firstName");
        String lastName = newUser.getString("lastName");
        String email = newUser.getString("email");
        String phone = newUser.getString("phone");
        String avatar = newUser.getString("avatar");
        String description = newUser.getString("description");
        String password = newUser.getString("password");

        Optional<User> userToAddOpt = userRepo.findByEmail(email);
        //add user if not already in the database
        if (userToAddOpt.isEmpty()) {

            User userToAdd = new User(firstName, lastName, email, phone, avatar, description, password);
            String rolesId = newUser.getString("roleId");

            //ArrayList<Role> RoleList = new ArrayList<>();
            String[] roleS = rolesId.split(",");
            for (String roleIdString : roleS) {
                Long roleId = Long.parseLong(roleIdString);
                userToAdd.addRole(roleRepo.findById(roleId).get());
            }
            userRepo.save(userToAdd);
        }
        return(Collection<User>) userRepo.findAll();
    }

    @PutMapping ("/api/user/{id}/update-user")
    public Collection<User> selectUser(@PathVariable Long id, @RequestBody String body) throws JSONException {
        JSONObject newUser = new JSONObject(body);
        String firstName = newUser.getString("firstName");
        String lastName = newUser.getString("lastName");
        String email = newUser.getString("email");
        String phone = newUser.getString("phone");
        String avatar = newUser.getString("avatar");
        String description = newUser.getString("description");
        String password= newUser.getString("password");

        Optional<User> userSelectedOpt = userRepo.findById(id);

        if (userSelectedOpt.isPresent()) {
            userSelectedOpt.get().setUserAll(firstName, lastName, email, phone, avatar, description, password);

            String rolesId = newUser.getString("roleId");
            String[] roleS = rolesId.split(",");
            for (String roleIdString : roleS) {
                Long roleId = Long.parseLong(roleIdString);
                userSelectedOpt.get().addRole(roleRepo.findById(roleId).get());
            }

            userRepo.save(userSelectedOpt.get());
        }
        return (Collection<User>) userRepo.findAll();
    }

    @DeleteMapping("/api/user/{id}/delete-user")
    public Collection<User> deleteUser(@PathVariable Long id) throws JSONException {
        Optional<User> userToRemoveOpt = userRepo.findById(id);
        if(userToRemoveOpt.isPresent()){
            userRepo.delete(userToRemoveOpt.get());
        }
        System.out.println(id);
        return (Collection<User>) userRepo.findAll();
    }


}
