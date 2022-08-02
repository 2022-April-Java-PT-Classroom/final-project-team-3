package org.wecancodeit.serverside.repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.models.User;

import java.util.Collection;
import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Long> {

   Optional<User> findByEmail(String email);
   Optional<User> findByPassword(String password);
   Optional<User> findByStatus(String status);

   Optional<User> findByPhone(String phone);
   Collection<User> findAllByPhone(String phone);

}
