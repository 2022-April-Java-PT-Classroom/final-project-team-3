package org.wecancodeit.serverside.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String middleName;
    private String lastName;
    private String email;
    private String phone;
    private String avatar;
    private String password;
    @Lob
    private String description;

    @ManyToMany
    private Collection<Role> roles;

//    @ManyToMany
//    private Collection<Food> food;

    private int status=0;

    private String country;
    private String state;
    private String county;
    private String city;
    private String address1;
    private String address2;
    private String zipCode;
    private String zipFor;

    private Long userId;

    public User() {
    }

    public User(String firstName, String lastName, String email, String phone, String avatar, String password, String description) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.avatar = avatar;
        this.password = password;
        this.description = description;
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

    public Long getUserId() {
        return userId;
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

    public String getMiddleName() {
        return middleName;
    }

    public int getStatus() {
        return status;
    }

    public String getCountry() {
        return country;
    }

    public String getState() {
        return state;
    }

    public String getCounty() {
        return county;
    }

    public String getCity() {
        return city;
    }

    public String getAddress1() {
        return address1;
    }

    public String getAddress2() {
        return address2;
    }

    public String getZipCode() {
        return zipCode;
    }

    public String getZipFor() {
        return zipFor;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    //    HashMap<Long, Role> role = new HashMap<>();
//    public Role getCountry(Long Id){
//        return role.get(Id);
//    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public void setRoles(Collection<Role> roles) {
        this.roles = roles;
    }

    public void setUserAll(String firstName, String lastName, String email, String phone, String avatar, String password, String description) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.avatar = avatar;
        this.description = description;
        this.password = password;
        this.roles = new ArrayList<>(Arrays.asList());
    }

    public void setUserAllPublic(String firstName, String middleName, String lastName, String email, String phone, String avatar, String description, Collection<Role> roles, int status, String country, String county, String city, String address1, String address2, String zipCode, String zipFor, Long userId) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.avatar = avatar;
        this.description = description;
        this.roles = roles;
        this.status = status;
        this.country = country;
        this.county = county;
        this.city = city;
        this.address1 = address1;
        this.address2 = address2;
        this.zipCode = zipCode;
        this.zipFor = zipFor;
        this.userId = userId;
    }
}
