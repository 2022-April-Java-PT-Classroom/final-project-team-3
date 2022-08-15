package org.wecancodeit.serverside.controllers;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.models.Article;
import org.wecancodeit.serverside.models.Status;
import org.wecancodeit.serverside.repositories.StatusRepository;

import javax.annotation.Resource;
import java.time.LocalDate;
import java.util.Collection;
import java.util.Date;

@CrossOrigin
@RestController
public class StatusController {

    @Resource
    private StatusRepository statusRepository;


    @GetMapping("/posts")
    public Collection<Status> getStatus(){
        return (Collection<Status>) statusRepository.findAll();

    }
    @PostMapping("/api/posts/new-post")
    public Collection<Status> addStatus(@RequestBody String body) throws JSONException {
        JSONObject newStatus = new JSONObject(body);
        String userPoster = newStatus.getString("userPoster");

        String status = newStatus.getString("status");
        String foodImages = newStatus.getString("foodImages");
        Status postsToAdd = new Status(foodImages,userPoster,status);
        statusRepository.save(postsToAdd);

        return (Collection<Status>) statusRepository.findAll();
    }



}
