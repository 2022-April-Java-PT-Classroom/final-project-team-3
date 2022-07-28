package org.wecancodeit.serverside;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.serverside.models.Article;
import org.wecancodeit.serverside.repositories.ArticleRepository;

import javax.annotation.Resource;
import java.time.Instant;
import java.util.Date;


@Component
public class Populator implements CommandLineRunner {
    @Resource
    private ArticleRepository articleRepository;

    @Override
    public void run(String... args) throws Exception{
        Article test = new Article("Harley Millington","Food Shortages and how we can help","Ever since covid we have been trying and succeeding at helping people who are struggling to find food in there local area."
                , Instant.now());
        articleRepository.save(test);
        Article test1 = new Article("Edgar Wilson","Who faces hunger in the United States?","Hunger can affect people from all walks of life. Millions of people in America are just one job loss, missed paycheck, or medical emergency away from hunger.",Instant.now());
        articleRepository.save(test1);
    }


}