package org.wecancodeit.serverside.models;

import javax.persistence.*;
import java.text.SimpleDateFormat;
import java.util.Date;

@Entity
public class Status {
    @Id
    @GeneratedValue
    private Long id;

    private String status;
    private String foodImages;
    private String userPoster;




//    String pattern = "MM-dd-yyyy HH:mm";

//    SimpleDateFormat simpleDateFormat= new SimpleDateFormat(pattern);
//
//    String date = simpleDateFormat.format(new Date());


    public Status(String foodImages,String userPoster,String status) {
        this.foodImages = foodImages;
//        this.date = date;
        this.userPoster=userPoster;
        this.status=status;


    }

    public String getStatus() {
        return status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

//    public String getDate() {
//        return date;
//    }
//
//    public void setDate(String date) {
//        this.date = date;
//    }

    public void setStatus(String status) {
        this.status = status;
    }




    public String getUserPoster() {
        return userPoster;
    }

    public void setUserPoster(String userPoster) {
        this.userPoster = userPoster;
    }

//
//    public String getPattern() {
//        return pattern;
//    }
//
//    public void setPattern(String pattern) {
//        this.pattern = pattern;
//    }
//
//    public SimpleDateFormat getSimpleDateFormat() {
//        return simpleDateFormat;
//    }
//
//    public void setSimpleDateFormat(SimpleDateFormat simpleDateFormat) {
//        this.simpleDateFormat = simpleDateFormat;
//    }
//

    public Status(){

    }
}
