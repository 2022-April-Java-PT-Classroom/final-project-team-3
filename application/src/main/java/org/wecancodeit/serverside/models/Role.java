package org.wecancodeit.serverside.models;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    private String roleName;
    @Lob
    private String description;

    @ManyToMany
    private Collection<User> users;

    public Role(){}

    public Role(String roleName, String description) {
        this.roleName = roleName;
        this.description = description;
    }

    public void setId() {
        this.id = 100L;
    }

    public Long getId() {
        return id;
    }

    public String getRoleName() {
        return roleName;
    }

    public String getDescription() {
        return description;
    }

//    public Collection<User> getUsers() {
//        return users;
//    }

    public void setRoleAll(String roleName, String description) {
        this.roleName = roleName;
        this.description = description;
    }
}
