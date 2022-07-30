package org.wecancodeit.serverside.repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.models.Picture;

import java.util.Optional;

public interface PictureRepository extends CrudRepository<Picture, Long> {
    Optional<Picture> findByPictureName(String pictureName);
}
