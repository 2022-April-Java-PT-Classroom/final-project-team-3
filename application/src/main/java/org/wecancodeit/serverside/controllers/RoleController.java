package org.wecancodeit.serverside.controllers;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.models.Role;
import org.wecancodeit.serverside.repositories.RoleRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class RoleController {

    @Resource
    private RoleRepository roleRepo;

    @GetMapping("/api/role")
    public Collection<Role> getRole(){
        return (Collection<Role>) roleRepo.findAll();
    }

    @PostMapping("/api/role/add-role")
    public Collection<Role> addRole(@RequestBody String body) throws JSONException{
        JSONObject newRole = new JSONObject(body);
        String roleName = newRole.getString("roleName");
        String description= newRole.getString("description");
        Optional<Role> roleToAddOpt = roleRepo.findByRoleName(roleName);
        //add item if not already in the database
        if (roleToAddOpt.isEmpty()) {
            Role roleToAdd = new Role(roleName, description);
            roleRepo.save(roleToAdd);
        }
        return (Collection<Role>) roleRepo.findAll();
    }

    @PutMapping ("/api/role/{id}/update-role")
    public Collection<Role> selectRole(@PathVariable Long id, @RequestBody String body) throws JSONException {
        JSONObject newRole = new JSONObject(body);
        String roleName = newRole.getString("roleName");
        String description = newRole.getString("description");
        Optional<Role> roleSelectedOpt = roleRepo.findById(id);

        if (roleSelectedOpt.isPresent()) {
            roleSelectedOpt.get().setRoleAll(roleName, description);
            roleRepo.save(roleSelectedOpt.get());
        }
        return (Collection<Role>) roleRepo.findAll();
    }

    @DeleteMapping("/api/role/{id}/delete-role")
    public Collection<Role> deleteRole(@PathVariable Long id) throws JSONException {
        Optional<Role> roleToRemoveOpt = roleRepo.findById(id);
        if(roleToRemoveOpt.isPresent()){
            roleRepo.delete(roleToRemoveOpt.get());
        }
        System.out.println(id);
        return (Collection<Role>) roleRepo.findAll();
    }

}
