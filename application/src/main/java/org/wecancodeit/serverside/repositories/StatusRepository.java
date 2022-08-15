package org.wecancodeit.serverside.repositories;
import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.models.Status;


public interface StatusRepository extends CrudRepository<Status,Long> {
}
