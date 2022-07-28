package org.wecancodeit.serverside.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;

@Entity
public class Content {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String contentName;
    private String title;
    private String subtitle;
    private String description;
    private String commentary;
    @Lob
    private String content;
    @ManyToMany
    private Collection<Picture> pictures;

    public Content(){}

    public Content(String contentName, String title, String subtitle, String description, String commentary, String content) {
        this.contentName = contentName;
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
        this.commentary = commentary;
        this.content = content;
        this.pictures = new ArrayList<>(); //Arrays.asList()
    }

    public void setId() {
        this.id = 100L;
    }

    public Long getId() {
        return id;
    }

    public String getContentName() {
        return contentName;
    }

    public String getTitle() {
        return title;
    }

    public String getSubtitle() {
        return subtitle;
    }

    public String getDescription() {
        return description;
    }

    public String getCommentary() {
        return commentary;
    }

    public String getContent() {
        return content;
    }

    public Collection<Picture> getPictures() {
        return pictures;
    }

    public void addPicture(Picture picture){
        pictures.add(picture);
    }

    public void setContentAll(String contentName, String title, String subtitle, String description, String commentary, String content) {
        this.contentName = contentName;
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
        this.commentary = commentary;
        this.content = content;
        this.pictures = new ArrayList<>(); //Arrays.asList()
    }

}
