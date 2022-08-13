package org.wecancodeit.serverside;




import org.wecancodeit.serverside.models.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.serverside.models.Article;
import org.wecancodeit.serverside.repositories.*;

import java.time.Instant;
import java.time.LocalDate;
import java.util.Date;
import org.wecancodeit.serverside.repositories.*;


import javax.annotation.Resource;
import java.time.Instant;

@Component
public class populator implements CommandLineRunner {

    @Resource
    public RoleRepository roleStorage;

    @Resource
    public UserRepository userStorage;

    @Resource
    public PictureRepository pictureStorage;

    @Resource
    public ContentRepository contentStorage;
    @Resource
    private ArticleRepository articleRepository;

    @Resource
    private FoodTypeRepository foodTypeStorage;

    @Resource
    private FoodRepository foodStorage;

    @Resource
    private StatusRepository statusRepository;


    @Override
    public void run(String... args) throws Exception {
        Role role1 = new Role("User","rien");
        roleStorage.save(role1);
        Role role2 = new Role("Donor","");
        roleStorage.save(role2);
        Role role3 = new Role("Chef","");
        roleStorage.save(role3);
        Role role4 = new Role("Guest","");
        roleStorage.save(role4);
        Role role5 = new Role("Administrator","");
        roleStorage.save(role5);
        Role role6 = new Role("Volunteer","");
        roleStorage.save(role6);


        User user1 = new User("Louis","Tchamda","louis2tch@gmail.com","0000000000","https://www.radcom.co/Content/media/image/2019/09/13047_orig.jpg","1234","desc1");
        user1.setStatus(1);
        user1.setAddress1("12590 Frost Rd, Mantua, OH 44255-9388");
        user1.setCity("Mantua");
        user1.addRole(role1);
        user1.addRole(role3);
        user1.addRole(role5);
        userStorage.save(user1);


        User user11 = new User("hakan","C","h@h.com","0000000000","https://www.radcom.co/Content/media/image/2019/09/13047_orig.jpg","1234","Desc11");
        user11.setStatus(1);
        user11.setAddress1("1939 Green Rd # 510 Cleveland");
        user11.setCity("Cleveland");
        user11.addRole(role1);
        user11.addRole(role3);
        user11.addRole(role5);
        userStorage.save(user11);

        User user2 = new User("Victor","N","email@mail.com", "000 0000000","https://www.radcom.co/Content/media/image/2019/09/13047_orig.jpg","5678","Desc2");
        user2.addRole(role1);
        user2.addRole(role2);
        user2.addRole(role5);
          userStorage.save(user2);

        User user3 = new User("Paul","Franklin","paul@mail.com", "0000000000", "https://www.radcom.co/Content/media/image/2019/09/13047_orig.jpg","1111","Desc3");
        user3.addRole(role1);
        user3.addRole(role4);
        userStorage.save(user3);

        User user0 = new User("fName 0","lName0","0@0.com","0000000000","https://www.radcom.co/Content/media/image/2019/09/13047_orig.jpg","0000","desc 0");
        user0.setStatus(1);
        user0.setAddress1("alternative Address");
        user0.setCity("alternative city");
        user0.addRole(role1);
        userStorage.save(user0);


        Picture pic1 = new Picture("pic1","https://i.pinimg.com/originals/4b/ef/9b/4bef9b82f301c0c53a6f2cee05452d8e.jpg",
                "photo1","","","");
        pictureStorage.save(pic1);

        Picture pic2 = new Picture("pic2","https://g.denik.cz/122/36/koza_150095264-jpg_denik-630.jpg",
                "photo2","","","");
        pictureStorage.save(pic2);

        Picture pic3 = new Picture("pic3","https://th.bing.com/th/id/R.c0d7a88313d98441e635dd76cb26101c?rik=gWgqfD2orYholg&pid=ImgRaw&r=0",
                "photo3","","","");
        pictureStorage.save(pic3);

        Picture louis = new Picture("louis","http://localhost:3000/static/media/louis.084b7ff8e9d53f50a112.jpg",
                "photo3","https://www.linkedin.com/in/louis-tchamda-9589bb74/","","");
        pictureStorage.save(louis);

        Content cont1 = new Content("Content Name1","title1","subtitle1","description","commentary","content");
        cont1.addPicture(pic1);
        cont1.addPicture(pic3);
        cont1.addPicture(pic2);
        contentStorage.save(cont1);

        Content cont2 = new Content("Content Name2","title2","subtitle2","description2","commentary2","content2");
        cont2.addPicture(pic3);
        contentStorage.save(cont2);

        Content cont3 = new Content("Content Name3","title3","subtitle3","description3","commentary3","content3");
        cont3.addPicture(pic2);
        contentStorage.save(cont3);


        Article test = new Article("Harley Millington","Food Shortages and how we can help","Ever since covid we have been trying and succeeding at helping people who are struggling to find food in there local area."
                , LocalDate.now(),"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F691198.jpg");
        articleRepository.save(test);
        Article test1 = new Article("Edgar Wilson","Who faces hunger in the United States?","Hunger can affect people from all walks of life. Millions of people in America are just one job loss, missed paycheck, or medical emergency away from hunger."
                ,LocalDate.now(),"https://www.unitedway.org/i/blog/10.15.19_5_Surprising_Facts_about_Hunger_in_America_Blog-reupload.jpg");
        articleRepository.save(test1);
        Article test2 = new Article("Harley Millington","Food Shortages and how we can help","Ever since covid we have been trying and succeeding at helping people who are struggling to find food in there local area."
                , LocalDate.now(),"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F691198.jpg");
        articleRepository.save(test2);
        Article test3 = new Article("Edgar Wilson","Who faces hunger in the United States?","Hunger can affect people from all walks of life. Millions of people in America are just one job loss, missed paycheck, or medical emergency away from hunger Hunger can affect people from all walks of life. Millions of people in America are just one job loss, missed paycheck, or medical emergency away from hunger Hunger can affect people from all walks of life. Millions of people in America are just one job loss, missed paycheck, or medical emergency away from hungerHunger can affect people from all walks of life. Millions of people in America are just one job loss, missed paycheck, or medical emergency away from hunger."
                ,LocalDate.now(),"https://www.unitedway.org/i/blog/10.15.19_5_Surprising_Facts_about_Hunger_in_America_Blog-reupload.jpg");
        articleRepository.save(test3);


        Status t1 = new Status("http://nextrestaurants.com/wp-content/uploads/2019/10/Restaurant-Instagram-Photography.png","Jose","Current Meal!!");
        statusRepository.save(t1);

        FoodType foodType1 = new FoodType("Breakfast", "");
        foodTypeStorage.save(foodType1);
        FoodType foodType2 = new FoodType("Lunch", "");
        foodTypeStorage.save(foodType2);
        FoodType foodType3 = new FoodType("Dinner", "");
        foodTypeStorage.save(foodType3);
        FoodType foodType4 = new FoodType("Snacks", "");
        foodTypeStorage.save(foodType4);

        //Long chiefId, FoodType foodType, String foodName, String foodDescription, int cookingTime, double estimatedCost, String postedDate, int expirationTime, String picture
        Food food1 = new Food(1L,foodType1,"Omelet","GENTLY PUSH cooked portions from edges toward the center with inverted turner so that uncooked eggs can reach the hot pan surface. CONTINUE cooking, tilting pan and gently moving cooked portions as needed.",
                1,5,"2022-08-09",5,"https://www.cuisineactuelle.fr/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2018.2F09.2F25.2F20f3a609-4d35-4dfa-ace5-32e1c62a8636.2Ejpeg/650x324/quality/80/crop-from/center/omelette-au-four.jpeg");
        foodStorage.save(food1);

        Food food2 = new Food(2L,foodType2,"Refreshing Lentil Salad","GTransfer the lentils to a mixing bowl and stir in the garlic, seeded tomatoes, red onion, green bell pepper, and chile pepper. Add the juice of 1 lemon plus 1 teaspoon of the zest. Mix in the shredded carrot, olives, and cilantro.",
                1,7,"2022-08-10",4,"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F691198.jpg");
        foodStorage.save(food2);
        Food food3 = new Food(1L,foodType2,"Cold Szechuan Noodles","This cold noodle salad is the perfect lunch on a hot summer's day. If you make it the day before, the flavors get even better in the fridge overnight.",
                2,14,"2022-08-14",3,"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2015%2F02%2F2392135-Cold-Szechuan-Noodles-and-Shredded-Vegetables-Photo-by-LilSnoo-resized.jpg");
        foodStorage.save(food3);
        Food food4 = new Food(2L,foodType2," Greek Orzo Salad","Shake things up a little with different pasta shapes like Orzo and Shells. Add some salami, dressing and veggies and you've a hearty meal.",
                1,8,"2022-08-10",4,"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2015%2F03%2F676733-Greek-Orzo-Salad-Photo-by-Dianne-resized.jpg");
        foodStorage.save(food4);
        Food food5 = new Food(1L,foodType3,"Egg Roll Bowls","If you're a fan of crispy savory egg rolls, then you might consider this unwrapped version your dream healthy dinnerr. Without the need to wrap or fry, this veggie-packed meal comes together in well under an hour.",
                2,17,"2022-08-13",7,"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190319-egg-roll-bowls-258-1554235672.jpg");
        foodStorage.save(food5);

    }
}

