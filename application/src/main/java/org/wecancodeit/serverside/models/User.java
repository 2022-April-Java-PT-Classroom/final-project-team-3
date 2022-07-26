package org.wecancodeit.serverside.models;

import javax.persistence.*;
import java.io.Console;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashMap;
import java.util.logging.ConsoleHandler;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String avatar;
    private String password;
    @Lob
    private String description;

    @ManyToMany
    private Collection<Role> roles;

    public User(){}

    public User(String firstName, String lastName, String email, String phone, String avatar, String description, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.avatar = avatar;
        this.description = description;
        this.password = password;
        this.roles = new ArrayList<>(Arrays.asList());
    }

    public void setId() {
        this.id = 100L;
    }

    public Long getId() {
        return id;
    }

    public String getPhone() {
        return phone;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getAvatar() {
        return avatar;
    }

    public String getDescription() {
        return description;
    }

    public String getPassword() {
        return password;
    }

    public Collection<Role> getRoles() {
        return roles;
    }

    public void addRole(Role role){
        roles.add(role);
    }

//    HashMap<Long, Role> role = new HashMap<>();
//    public Role getCountry(Long Id){
//        return role.get(Id);
//    }

    public void setUserAll(String firstName, String lastName, String email, String phone, String avatar, String description, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.avatar = avatar;
        this.description = description;
        this.password = password;
        this.roles = new ArrayList<>(Arrays.asList());
    }



}
