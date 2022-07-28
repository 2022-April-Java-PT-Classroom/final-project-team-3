package org.wecancodeit.serverside.controllers;



import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.models.Article;
import org.wecancodeit.serverside.repositories.ArticleRepository;


import javax.annotation.Resource;
import java.time.Instant;
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
    @PostMapping("/api/article/add-articles")
    public Collection<Article> addArticles(@RequestBody String body) throws JSONException{
        JSONObject newArticles = new JSONObject(body);
        String authorName = newArticles.getString("authorName");
        String articleTitle = newArticles.getString("articleTitle");
        String articleBody = newArticles.getString("articleBody");
        String date = newArticles.getString("date");

        Article articlesToAdd = new Article(authorName,articleTitle,articleBody,Instant.now());
        articleRepository.save(articlesToAdd);



        return (Collection<Article>) articleRepository.findAll();
    }


}