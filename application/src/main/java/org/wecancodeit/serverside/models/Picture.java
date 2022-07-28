package org.wecancodeit.serverside.models;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class Picture {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String pictureName;
    private String pictureUrl;
    private String title;
    private String subtitle;
    private String description;
    private String commentary;

   // @OneToMany//(mappedBy = "contentName")
    //private Collection<Content> content;

    public Picture(){}

    public Picture(String pictureName, String pictureUrl, String title, String subtitle, String description, String commentary){
        this.pictureName = pictureName;
        this.pictureUrl = pictureUrl;
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
        this.commentary = commentary;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public String getPictureName() {
        return pictureName;
    }

    public String getPictureUrl() {
        return pictureUrl;
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

    //    public Collection<Content> getContent() {
//        return content;
//    }

    public void setPictureAll(String pictureName, String pictureUrl, String title, String subtitle, String description, String commentary){
        this.pictureName = pictureName;
        this.pictureUrl = pictureUrl;
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
        this.commentary = commentary;
    }
}
