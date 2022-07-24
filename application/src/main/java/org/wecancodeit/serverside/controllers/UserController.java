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
        String password = newUser.getString("password");
        User userToAdd = new User(firstName, lastName, email, password);

        String rolesId = newUser.getString("roleId");

        ArrayList<Role> RoleList = new ArrayList<>();
        String[] roleS = rolesId.split(",");
//        for(String roleIdString : roleS){
//            Long roleId = Long.parseLong(roleIdString);
//            userToAdd.addRole(roleRepo.findById(roleId).get());
//        }
        userRepo.save(userToAdd);

        return(Collection<User>) userRepo.findAll();
    }
}
