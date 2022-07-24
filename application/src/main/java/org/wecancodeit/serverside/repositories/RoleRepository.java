package org.wecancodeit.serverside.repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.models.Role;

public interface RoleRepository  extends CrudRepository<Role, Long> {
}
