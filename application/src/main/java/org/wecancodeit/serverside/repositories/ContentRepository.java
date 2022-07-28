package org.wecancodeit.serverside.repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.models.Content;

import java.util.Optional;

public interface ContentRepository extends CrudRepository<Content, Long> {
    Optional<Content> findByContentName(String contentName);
}
