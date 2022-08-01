package org.wecancodeit.serverside.controllers;

import org.json.JSONException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
//import org.wecancodeit.serverside.Model.Review;
//import org.wecancodeit.serverside.Repository.ReviewsRepository;

import javax.annotation.Resource;
import java.util.Collection;


@RestController
public class ReviewsController {

    @Resource
    private ReviewsRepository reviewsRepo;

    @GetMapping("/api/reviews")
    public Collection<Review> getReviews() { return (Collection<Review>) reviewsRepo.findAll();}


    @PostMapping("/api/reviews")
    public Collection<Review> addReview(@RequestBody Review review) throws JSONException {
//        JSONObject newReview = new JSONObject(review);
//        String name = newReview.getString("name");
//        String text = newReview.getString("text");
//        Review reviewsToAdd = new Review(name, text);
        reviewsRepo.save(review);

        return (Collection<Review>) reviewsRepo.findAll();
    }
}

