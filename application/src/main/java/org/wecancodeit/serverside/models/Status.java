package org.wecancodeit.serverside.models;

import javax.persistence.*;
import java.text.SimpleDateFormat;
import java.util.Date;

@Entity
public class Status {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String status;
    private String foodImages;
    private String userPoster;

    public Status(){
    }

    public Status(String foodImages,String userPoster,String status) {
        this.foodImages = foodImages;
        this.userPoster=userPoster;
        this.status=status;
    }

    public String getStatus() {
        return status;
    }

    public Long getId() {
        return id;
    }

    public void setId() {
        this.id = 100L;
    }

    public String getFoodImages() {
        return foodImages;
    }

    public void setFoodImages(String foodImages) {
        this.foodImages = foodImages;
    }

    public void setStatus(String status) {
        this.status = status;
    }




    public String getUserPoster() {
        return userPoster;
    }

    public void setUserPoster(String userPoster) {
        this.userPoster = userPoster;
    }

}
