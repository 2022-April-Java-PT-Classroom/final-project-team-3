package org.wecancodeit.serverside.models;

import javax.persistence.*;

@Entity
public class Contact {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long contactId;
    private String name;
    private String email;
    @Lob
    private String text;

    public Long getContactId() {
        return contactId;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getText() {
        return text;
    }


    public Contact(){}

    public Contact(String name, String email, String text) {
        this.name = name;
        this.email = email;
        this.text = text;

    }

}

