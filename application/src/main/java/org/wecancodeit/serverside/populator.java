package org.wecancodeit.serverside;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.serverside.models.Content;
import org.wecancodeit.serverside.models.Picture;
import org.wecancodeit.serverside.models.Role;
import org.wecancodeit.serverside.models.User;
import org.wecancodeit.serverside.models.Article;
import org.wecancodeit.serverside.repositories.*;

import java.time.Instant;
import java.util.Date;


import javax.annotation.Resource;

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

    @Override
    public void run(String... args) throws Exception {
        Role role1 = new Role("User","rien");
        roleStorage.save(role1);
        Role role2 = new Role("Donor","");
        roleStorage.save(role2);
        Role role3 = new Role("Chief","");
        roleStorage.save(role3);
        Role role4 = new Role("Guest","");
        roleStorage.save(role4);
        Role role5 = new Role("Administrator","");
        roleStorage.save(role5);
        Role role6 = new Role("Volunteer","");
        roleStorage.save(role6);

        User user1 = new User("Louis","Tchamda","louis2tch@gmail.com","0000000000","https://www.radcom.co/Content/media/image/2019/09/13047_orig.jpg","Desc1","1234");
        user1.setStatus(1);
        user1.addRole(role1);
        user1.addRole(role3);
        user1.addRole(role5);
        userStorage.save(user1);

        User user2 = new User("Victor","N","email@mail.com", "000 0000000","https://www.radcom.co/Content/media/image/2019/09/13047_orig.jpg","Desc2","5678");
        user2.addRole(role1);
        user2.addRole(role2);
        user2.addRole(role5);
          userStorage.save(user2);

        User user3 = new User("Paul","Franklin","paul@mail.com", "0000000000", "https://www.radcom.co/Content/media/image/2019/09/13047_orig.jpg","Desc3","1111");
        user3.addRole(role1);
        user3.addRole(role4);
        userStorage.save(user3);

        Picture pic1 = new Picture("pic1","https://i.pinimg.com/originals/4b/ef/9b/4bef9b82f301c0c53a6f2cee05452d8e.jpg",
                "photo1","","","");
        pictureStorage.save(pic1);

        Picture pic2 = new Picture("pic2","https://g.denik.cz/122/36/koza_150095264-jpg_denik-630.jpg",
                "photo2","","","");
        pictureStorage.save(pic2);

        Picture pic3 = new Picture("pic3","https://th.bing.com/th/id/R.c0d7a88313d98441e635dd76cb26101c?rik=gWgqfD2orYholg&pid=ImgRaw&r=0",
                "photo3","","","");
        pictureStorage.save(pic3);

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

        /////////////////////


        Article test = new Article("Harley Millington","Food Shortages and how we can help","Ever since covid we have been trying and succeeding at helping people who are struggling to find food in there local area."
                , Instant.now());
        articleRepository.save(test);
        Article test1 = new Article("Edgar Wilson","Who faces hunger in the United States?","Hunger can affect people from all walks of life. Millions of people in America are just one job loss, missed paycheck, or medical emergency away from hunger.",Instant.now());
        articleRepository.save(test1);

    }
}

