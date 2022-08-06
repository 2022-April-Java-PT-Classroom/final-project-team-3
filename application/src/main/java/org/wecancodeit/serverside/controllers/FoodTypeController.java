package org.wecancodeit.serverside.controllers;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.models.FoodType;
import org.wecancodeit.serverside.repositories.FoodTypeRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class FoodTypeController {

    @Resource
    private FoodTypeRepository foodTypeRepo;

    @GetMapping("/api/foodType/{id}")
    public FoodType getOneFoodType(@PathVariable Long id)  throws JSONException{
        Optional<FoodType> findOneFoodType = foodTypeRepo.findById(id);
        return  findOneFoodType.get();
    }

    @GetMapping("/api/foodType")
    public Collection<FoodType> getAllFoodType(){
        return (Collection<FoodType>) foodTypeRepo.findAll();
    }

    @PostMapping("/api/foodType/add-foodType")
    public Collection<FoodType> addFoodType(@RequestBody String body) throws JSONException {
        JSONObject newFoodType = new JSONObject(body);
        String name = newFoodType.getString("name");
        String description= newFoodType.getString("description");
        Optional<FoodType> foodTypeToAddOpt = foodTypeRepo.findByName(name);
        //add item if not already in the database
        if (foodTypeToAddOpt.isEmpty()) {
            FoodType foodTypeToAdd = new FoodType(name, description);
            foodTypeRepo.save(foodTypeToAdd);
        }
        return (Collection<FoodType>) foodTypeRepo.findAll();
    }

    @PutMapping ("/api/foodType/{id}/update-foodType")
    public Collection<FoodType> UpdateOneFoodType(@PathVariable Long id, @RequestBody String body) throws JSONException {
        JSONObject newFoodType = new JSONObject(body);
        String name = newFoodType.getString("name");
        String description = newFoodType.getString("description");
        Optional<FoodType> foodTypeSelectedOpt = foodTypeRepo.findById(id);

        if (foodTypeSelectedOpt.isPresent()) {
            foodTypeSelectedOpt.get().setFoodTypeAll(name, description);
            foodTypeRepo.save(foodTypeSelectedOpt.get());
        }
        return (Collection<FoodType>) foodTypeRepo.findAll();
    }

    @DeleteMapping("/api/foodType/{id}/delete-foodType")
    public Collection<FoodType> deleteFoodType(@PathVariable Long id) throws JSONException {
        Optional<FoodType> foodTypeToRemoveOpt = foodTypeRepo.findById(id);
        if(foodTypeToRemoveOpt.isPresent()){
            foodTypeRepo.delete(foodTypeToRemoveOpt.get());
        }
        System.out.println(id);
        return (Collection<FoodType>) foodTypeRepo.findAll();
    }

}
