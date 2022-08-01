package org.wecancodeit.serverside.repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.models.FoodType;

import java.util.Optional;

public interface FoodTypeRepository extends CrudRepository<FoodType, Long> {
    Optional<FoodType> findByName(String name);
}
