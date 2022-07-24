package org.wecancodeit.serverside.models;

import javax.persistence.*;
import java.io.Console;
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
    private String password;

    @ManyToMany
    private Collection<Role> roles;

    public User(){}

    public User(String firstName, String lastName, String email, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }


    public Long getId() {
        return id;
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

    public void setId(Long id) {
        this.id = id;
    }

    public void setUserAll(String firstName, String lastName, String email, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

}
