package org.wecancodeit.serverside.controllers;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.models.Food;
import org.wecancodeit.serverside.models.FoodType;
import org.wecancodeit.serverside.repositories.FoodRepository;
import org.wecancodeit.serverside.repositories.FoodTypeRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class FoodController {
   
    @Resource
    public FoodRepository foodRepo;

    @Resource
    public FoodTypeRepository foodTypeRepo;

    @GetMapping("/api/food/{id}")
    public Food getOneFood(@PathVariable Long id)  throws JSONException {
        Optional<Food> findOneFood = foodRepo.findById(id);
        return  findOneFood.isPresent() ?findOneFood.get() : null;
    }

    @GetMapping("/api/food")
    public Collection<Food> getAllFood(){
        return (Collection<Food>) foodRepo.findAll();
    }

//chiefId, foodTypes, foodName, foodDescription, cookingTime, estimatedCost, postedDate, expirationTime)
    @PostMapping("/api/food/add-food")
    public Collection<Food> addFood(@RequestBody String body) throws JSONException {
        JSONObject newFood = new JSONObject(body);
        Long  foodTypeId = newFood.getLong("foodTypeId");
        Optional<FoodType> foodType = foodTypeRepo.findById(foodTypeId);

        String foodName = newFood.getString("foodName");
        String foodDescription = newFood.getString("foodDescription");
        int cookingTime = newFood.getInt("cookingTime");
        double estimatedCost = newFood.getDouble("estimatedCost");
        String postedDate = newFood.getString("postedDate");
        int expirationTime = newFood.getInt("expirationTime");
        Long chiefId = newFood.getLong("chiefId");
        String picture = newFood.getString("picture");

        Food foodToAdd = new Food(chiefId, foodType.get(), foodName, foodDescription, cookingTime, estimatedCost, postedDate, expirationTime, picture);
        foodRepo.save(foodToAdd);

        return (Collection<Food>) foodRepo.findAll();
    }

    @PostMapping ("/api/food/post-food-chief")
    public String PostFoodByChief(@RequestBody String body) throws JSONException {
        JSONObject newFood = new JSONObject(body);
        Long  foodTypeId = newFood.getLong("foodTypeId");
        Optional<FoodType> foodType = foodTypeRepo.findById(foodTypeId);

        String foodName = newFood.getString("foodName");
        String foodDescription = newFood.getString("foodDescription");
        int cookingTime = newFood.getInt("cookingTime");
        double estimatedCost = newFood.getDouble("estimatedCost");
        String postedDate = newFood.getString("postedDate");
        int expirationTime = newFood.getInt("expirationTime");
        Long chiefId = newFood.getLong("chiefId");
        String picture = newFood.getString("picture");

        //Optional<Food> foodSelectedOpt = foodRepo.findById(id);

        Food foodToAdd= new Food(chiefId, foodType.get(), foodName, foodDescription, cookingTime, estimatedCost, postedDate, expirationTime, picture);
        foodRepo.save(foodToAdd);

        return foodToAdd!=null ? "Successfully" : "Error";
    }

    @PutMapping ("/api/food/{id}/update-food")
    public String UpdateFood(@PathVariable Long id, @RequestBody String body) throws JSONException {
        JSONObject newFood = new JSONObject(body);
        Long  foodTypeId = newFood.getLong("foodTypeId");
        Optional<FoodType> foodType = foodTypeRepo.findById(foodTypeId);

        String foodName = newFood.getString("foodName");
        String foodDescription = newFood.getString("foodDescription");
        int cookingTime = newFood.getInt("cookingTime");
        double estimatedCost = newFood.getDouble("estimatedCost");
        String postedDate = newFood.getString("postedDate");
        int expirationTime = newFood.getInt("expirationTime");
        Long chiefId = newFood.getLong("chiefId");
        String picture = newFood.getString("picture");

        Optional<Food> foodSelectedOpt = foodRepo.findById(id);

        if (foodSelectedOpt.isPresent()) {
            foodSelectedOpt.get().setFoodChief(chiefId, foodType.get(), foodName, foodDescription, cookingTime, estimatedCost, postedDate, expirationTime, picture);
            foodRepo.save(foodSelectedOpt.get());
        }

        return foodSelectedOpt!=null ? "Successfully" : "Error";
    }

    //guestId, orderedDate
    @PutMapping ("/api/food/{id}/order-food-guest")
    public String orderFoodByGuest(@PathVariable Long id, @RequestBody String body) throws JSONException {
        JSONObject newFood = new JSONObject(body);
        Long guestId = newFood.getLong("guestId");
        String orderedDate = newFood.getString("orderedDate");

        Optional<Food> foodSelectedOpt = foodRepo.findById(id);

        if (foodSelectedOpt.isPresent()) {
            foodSelectedOpt.get().setFoodGuest(guestId, orderedDate);
            foodRepo.save(foodSelectedOpt.get());
        }
        return foodSelectedOpt.isPresent() ? "Successfully 5 " : "Error"; //foodSelectedOpt.get();
    }


    //deliverymanId, deliveryDate, deliveryTime, estimatedDeliveryCost, deliveredDate
    @PutMapping ("/api/food/{id}/delivery-food-deliveryman")
    public String deliveryFoodByDeliveryman(@PathVariable Long id, @RequestBody String body) throws JSONException {
        JSONObject newFood = new JSONObject(body);
        Long deliverymanId = newFood.getLong("deliverymanId");
        String deliveryDate = newFood.getString("deliveryDate");
        int deliveryTime = newFood.getInt("deliveryTime");
        Double estimatedDeliveryCost = newFood.getDouble("estimatedDeliveryCost");
        String deliveredDate = newFood.getString("deliveredDate");

        Optional<Food> foodSelectedOpt = foodRepo.findById(id);

        if (foodSelectedOpt.isPresent()) {
            foodSelectedOpt.get().setFoodDeliveryman(deliverymanId, deliveryDate, deliveryTime, estimatedDeliveryCost, deliveredDate);
            foodRepo.save(foodSelectedOpt.get());
        }
        return foodSelectedOpt.isPresent() ? "Successfully" : "Error"; //foodSelectedOpt.get();
    }

    @PutMapping ("/api/food/{id}/food-delivered")
    public String deliveredFoodByDeliveryman(@PathVariable Long id, @RequestBody String body) throws JSONException {
        JSONObject newFood = new JSONObject(body);
        String deliveredDate = newFood.getString("deliveredDate");

        Optional<Food> foodSelectedOpt = foodRepo.findById(id);

        if (foodSelectedOpt.isPresent()) {
            foodSelectedOpt.get().setDeliveredDate(deliveredDate);
            foodRepo.save(foodSelectedOpt.get());
        }
        return foodSelectedOpt.isPresent() ? "Successfully" : "Error"; //foodSelectedOpt.get();
    }

    @GetMapping("/api/food/chief/{chiefId}")
    public Collection<Food> getAllFoodByOneChief(@PathVariable Long chiefId)  throws JSONException{
        Collection<Food> findFoodsByChief = foodRepo.findAllByChiefId(chiefId);
        return   findFoodsByChief;
    }

    @GetMapping("/api/food/guest/{guestId}")
    public Collection<Food> getAllFoodByGuest(@PathVariable Long guestId)  throws JSONException{
        Collection<Food> findFoodsByGuest = foodRepo.findAllByGuestId(guestId);
        return   findFoodsByGuest;
    }

    @GetMapping("/api/food/deliveryman/{deliverymanId}")
    public Collection<Food> getAllFoodByDeliveryman(@PathVariable Long deliverymanId)  throws JSONException{
        Collection<Food> findFoodsByDeliveryman = foodRepo.findAllByDeliverymanId(deliverymanId);
        return   findFoodsByDeliveryman;
    }

    @DeleteMapping("/api/food/{id}/delete-food")
    public Collection<Food> deleteFood(@PathVariable Long id) throws JSONException {
        Optional<Food> foodToRemoveOpt = foodRepo.findById(id);
        if(foodToRemoveOpt.isPresent()){
            foodRepo.delete(foodToRemoveOpt.get());
        }
        System.out.println(id);
        return (Collection<Food>) foodRepo.findAll();
    }

}
