package org.wecancodeit.serverside.repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.models.Role;

import java.util.Optional;

public interface RoleRepository  extends CrudRepository<Role, Long> {
    Optional<Role> findByRoleName(String roleName);
}
