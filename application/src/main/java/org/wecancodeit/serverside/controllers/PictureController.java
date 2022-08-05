package org.wecancodeit.serverside.controllers;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.models.Picture;
import org.wecancodeit.serverside.models.Role;
import org.wecancodeit.serverside.repositories.PictureRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class PictureController {

    @Resource
    private PictureRepository pictureRepo;

    @GetMapping("/api/picture/{id}")
    public Picture getOnePicture(@PathVariable Long id)  throws JSONException{
        Optional<Picture> findOnePicture = pictureRepo.findById(id);
        return  findOnePicture.get();
    }
    
    @GetMapping("/api/picture")
    public Collection<Picture> getAllPictures(){
        return (Collection<Picture>) pictureRepo.findAll();
    }

    @PostMapping("/api/picture/add-picture")
    public Collection<Picture> addPicture(@RequestBody String body) throws JSONException {
        JSONObject newPicture = new JSONObject(body);
        //pictureName, pictureUrl, title, subtitle, description, commentary;

        String pictureName = newPicture.getString("pictureName");
        String pictureUrl = newPicture.getString("pictureUrl");
        String title  = newPicture.getString("title");
        String subtitle = newPicture.getString("subtitle");
        String description = newPicture.getString("description");
        String commentary = newPicture.getString("commentary");

        Optional<Picture> pictureToAddOpt = pictureRepo.findByPictureName(pictureName);
        //add if not already in the database
        if (pictureToAddOpt.isEmpty()) {
            Picture pictureToAdd = new Picture(pictureName, pictureUrl, title, subtitle, description, commentary);
            pictureRepo.save(pictureToAdd);
        }
        return (Collection<Picture>) pictureRepo.findAll();
    }

    @PutMapping ("/api/picture/{id}/update-picture")
    public Collection<Picture> UpdateOnePicture(@PathVariable Long id, @RequestBody String body) throws JSONException {
        JSONObject newPicture = new JSONObject(body);
        String pictureName = newPicture.getString("pictureName");
        String pictureUrl = newPicture.getString("pictureUrl");
        String title  = newPicture.getString("title");
        String subtitle = newPicture.getString("subtitle");
        String description = newPicture.getString("description");
        String commentary = newPicture.getString("commentary");
        Optional<Picture> pictureSelectedOpt = pictureRepo.findById(id);

        if (pictureSelectedOpt.isPresent()) {
            pictureSelectedOpt.get().setPictureAll(pictureName, pictureUrl, title, subtitle, description, commentary);
            pictureRepo.save(pictureSelectedOpt.get());
        }
        return (Collection<Picture>) pictureRepo.findAll();
    }

    @DeleteMapping("/api/picture/{id}/delete-picture")
    public Collection<Picture> deleteOnePicture(@PathVariable Long id) throws JSONException {
        Optional<Picture> pictureToRemoveOpt = pictureRepo.findById(id);
        if(pictureToRemoveOpt.isPresent()){
            pictureRepo.delete(pictureToRemoveOpt.get());
        }

        return (Collection<Picture>) pictureRepo.findAll();
    }

}
