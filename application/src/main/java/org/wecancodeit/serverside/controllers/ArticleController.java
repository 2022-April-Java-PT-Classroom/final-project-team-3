package org.wecancodeit.serverside.controllers;



import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.models.Article;
import org.wecancodeit.serverside.repositories.ArticleRepository;


import javax.annotation.Resource;
import java.time.Instant;
import java.time.LocalDate;
import java.util.Collection;


@CrossOrigin
@RestController
public class ArticleController {

    @Resource
    private ArticleRepository articleRepository;


    @GetMapping("/article")
    public Collection<Article> getArticles(){
        return (Collection<Article>) articleRepository.findAll();

    }
    @PostMapping("/api/article/new-articles")
    public Collection<Article> addArticles(@RequestBody String body) throws JSONException{
        JSONObject newArticles = new JSONObject(body);
        String authorName = newArticles.getString("authorName");
        String articleTitle = newArticles.getString("articleTitle");
        String articleBody = newArticles.getString("articleBody");
        String articleImage = newArticles.getString("articleImage");
        Article articlesToAdd = new Article(authorName,articleTitle,articleBody, LocalDate.now(),articleImage);
        articleRepository.save(articlesToAdd);



        return (Collection<Article>) articleRepository.findAll();
    }


}