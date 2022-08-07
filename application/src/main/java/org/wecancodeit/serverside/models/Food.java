package org.wecancodeit.serverside.models;

import org.apache.catalina.User;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;
import org.wecancodeit.serverside.models.FoodType;

@Entity
public class Food {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;
   @ManyToOne
   private FoodType foodType; //breakfast, lunch, dinner
   private String foodName;
   private String foodDescription;
   private int cookingTime;
   private double estimatedCost;
   private String postedDate;
   private int expirationTime; //in minute
   private Long chiefId;
//   @ManyToMany
//   private Collection<User> chief;

//   @OneToOne(mappedBy = "id")
//   private User guest;
   private Long guestId;
   private String orderedDate;


//   @OneToOne(mappedBy = "id")
//   private Collection<User>  deliveryman;
   private Long deliverymanId;
   private String deliveryDate;
   private int deliveryTime; //in minute
   private double estimatedDeliveryCost;
   private String deliveredDate;

   private String picture;

   private int foodState;// 0=fooPostedByChief, 1=foodOrderedByGuest, 2=foodTookByDeliveryman, 3=foodReceivedGuest
   private String commentary;

   public Food(){}

   public Food(Long chiefId, FoodType foodType, String foodName, String foodDescription, int cookingTime, double estimatedCost, String postedDate, int expirationTime, String picture) {
      this.foodType = foodType;
      this.foodName = foodName;
      this.foodDescription = foodDescription;
      this.cookingTime = cookingTime;
      this.estimatedCost = estimatedCost;
      this.postedDate = postedDate;
      this.expirationTime = expirationTime;
      this.chiefId = chiefId;
      this.picture = picture;
   }

   public void setId() {
      this.id = 100L;
   }

   public Long getId() {
      return id;
   }

   public FoodType getFoodTypes() {
      return foodType;
   }

   public String getFoodName() {
      return foodName;
   }

   public String getFoodDescription() {
      return foodDescription;
   }

   public int getCookingTime() {
      return cookingTime;
   }

   public double getEstimatedCost() {
      return estimatedCost;
   }

   public String getPostedDate() {
      return postedDate;
   }

   public int getExpirationTime() {
      return expirationTime;
   }

   public Long getChiefId() {
      return chiefId;
   }

   public Long getGuestId() {
      return guestId;
   }

   public String getOrderedDate() {
      return orderedDate;
   }

   public Long getDeliverymanId() {
      return deliverymanId;
   }

   public String getDeliveryDate() {
      return deliveryDate;
   }

   public int getDeliveryTime() {
      return deliveryTime;
   }

   public double getEstimatedDeliveryCost() {
      return estimatedDeliveryCost;
   }

   public String getDeliveredDate() {
      return deliveredDate;
   }

   public int getFoodState() {
      return foodState;
   }

   public String getCommentary() {
      return commentary;
   }

   public FoodType getFoodType() {
      return foodType;
   }

   public String getPicture() {
      return picture;
   }

   public void setFoodChief(Long chiefId, FoodType foodType, String foodName, String foodDescription, int cookingTime, double estimatedCost, String postedDate, int expirationTime, String picture) {
      this.foodType = foodType;
      this.foodName = foodName;
      this.foodDescription = foodDescription;
      this.cookingTime = cookingTime;
      this.estimatedCost = estimatedCost;
      this.postedDate = postedDate;
      this.expirationTime = expirationTime;
      this.chiefId = chiefId;
      this.picture = picture;
   }

   public void setFoodGuest(Long guestId, String orderedDate) {
      this.guestId = guestId;
      this.orderedDate = orderedDate;
   }

   public void setFoodDeliveryman(Long deliverymanId, String deliveryDate, int deliveryTime, double estimatedDeliveryCost, String deliveredDate) {
      this.deliverymanId = deliverymanId;
      this.deliveryDate = deliveryDate;
      this.deliveryTime = deliveryTime;
      this.estimatedDeliveryCost = estimatedDeliveryCost;
      this.deliveredDate = deliveredDate;
   }

   public void setFoodState(int foodState) {
      this.foodState = foodState;
   }

   public void setCommentary(String commentary) {
      this.commentary = commentary;
   }


}
