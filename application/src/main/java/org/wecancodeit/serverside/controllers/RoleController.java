package org.wecancodeit.serverside.controllers;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.models.Role;
import org.wecancodeit.serverside.repositories.RoleRepository;

import javax.annotation.Resource;
import java.util.Collection;

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
        Role roleToAdd = new Role(roleName, description);
        roleRepo.save(roleToAdd);
        return (Collection<Role>) roleRepo.findAll();
    }
}
