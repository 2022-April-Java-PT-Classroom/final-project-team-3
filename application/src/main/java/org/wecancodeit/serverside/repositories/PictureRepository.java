package org.wecancodeit.serverside.repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.models.Picture;

public interface PictureRepository extends CrudRepository<Picture, Long> {
    //Optional<Picture> findByPictureName(String pictureName)
}
