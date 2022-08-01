package org.wecancodeit.serverside.controllers;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.models.Content;
import org.wecancodeit.serverside.repositories.ContentRepository;
import org.wecancodeit.serverside.repositories.PictureRepository;


import javax.annotation.Resource;
import javax.persistence.Lob;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class ContentController {
    
    @Resource
    private ContentRepository contentRepo;

    @Resource
    private PictureRepository pictureRepo;


    @GetMapping("/api/content")
    public Collection<Content> getContent(){
        return (Collection<Content>) contentRepo.findAll();
    }

    @GetMapping("/api/content/{id}")
    public Content getOneContent(@PathVariable Long id)  throws JSONException{
        Optional<Content> contentOne = contentRepo.findById(id);
        return  contentOne.get();
    }

    @PostMapping("/api/content/add-content")
    public Collection<Content> addContent(@RequestBody String body) throws JSONException {
        JSONObject newContent = new JSONObject(body);
       // contentName, title, subtitle, description, commentary, content 
        String contentName = newContent.getString("contentName");
        String title = newContent.getString("title");
        String subtitle = newContent.getString("subtitle");
        String description = newContent.getString("description");
        String commentary = newContent.getString("commentary");
        String content = newContent.getString("content");

        Optional<Content> contentToAddOpt = contentRepo.findByContentName(contentName);
        //add content if it's not already in the database
        if (contentToAddOpt.isEmpty()) {
            Content contentToAdd = new Content( contentName, title, subtitle, description, commentary, content);
            String picturesId = newContent.getString("pictureId");

            //ArrayList<Picture> PictureList = new ArrayList<>();
            String[] pictureS = picturesId.split(",");
            for (String pictureIdString : pictureS) {
                Long pictureId = Long.parseLong(pictureIdString);
                contentToAdd.addPicture(pictureRepo.findById(pictureId).get());
            }
            contentRepo.save(contentToAdd);
        }
        return(Collection<Content>) contentRepo.findAll();
    }

    @PutMapping ("/api/content/{id}/update-content")
    public Collection<Content> UpdateOneContent(@PathVariable Long id, @RequestBody String body) throws JSONException {
        JSONObject newContent = new JSONObject(body);
        String contentName = newContent.getString("contentName");
        String title = newContent.getString("title");
        String subtitle = newContent.getString("subtitle");
        String description = newContent.getString("description");
        String commentary = newContent.getString("commentary");
        String content = newContent.getString("content");

        Optional<Content> contentSelectedOpt = contentRepo.findById(id);

        if (contentSelectedOpt.isPresent()) {
            contentSelectedOpt.get().setContentAll(contentName, title, subtitle, description, commentary, content);

            String picturesId = newContent.getString("pictureId");
            String[] pictureS = picturesId.split(",");
            for (String pictureIdString : pictureS) {
                Long pictureId = Long.parseLong(pictureIdString);
                contentSelectedOpt.get().addPicture(pictureRepo.findById(pictureId).get());
            }

            contentRepo.save(contentSelectedOpt.get());
        }
        return (Collection<Content>) contentRepo.findAll();
    }

    @DeleteMapping("/api/content/{id}/delete-content")
    public Collection<Content> deleteContent(@PathVariable Long id) throws JSONException {
        Optional<Content> contentToRemoveOpt = contentRepo.findById(id);
        if(contentToRemoveOpt.isPresent()){
            contentRepo.delete(contentToRemoveOpt.get());
        }
        return (Collection<Content>) contentRepo.findAll();
    }

}
