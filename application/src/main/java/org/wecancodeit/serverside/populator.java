package org.wecancodeit.serverside;


import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.serverside.models.Role;
import org.wecancodeit.serverside.models.User;
import org.wecancodeit.serverside.repositories.RoleRepository;
import org.wecancodeit.serverside.repositories.UserRepository;

import javax.annotation.Resource;

@Component
public class populator implements CommandLineRunner {

    @Resource
    public RoleRepository roleStorage;

    @Resource
    public UserRepository userStorage;

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

        User user1 = new User("Louis","Tchamda","louis2tch@gmail.com","1234");
        user1.addRole(role1);
//        user1.addRole(role3);
//        user1.addRole(role5);
        userStorage.save(user1);

        User user2 = new User("Victor","N","email@mail.com","5678");
//        user2.addRole(role1);
//        user2.addRole(role2);
//        user2.addRole(role5);
          userStorage.save(user2);
//
        User user3 = new User("Paul","Franklin","paul@mail.com","1111");
//        user3.addRole(role1);
//        user3.addRole(role4);
        userStorage.save(user3);

    }
}
