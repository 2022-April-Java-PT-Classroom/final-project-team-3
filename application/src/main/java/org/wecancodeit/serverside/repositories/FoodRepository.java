package org.wecancodeit.serverside.repositories;


import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.models.Food;

import java.util.Collection;
import java.util.Optional;

public interface FoodRepository extends CrudRepository<Food, Long> {

    Optional<Food> findByChiefId(String chiefId);

    Optional<Food> findByGuestId(String guestId);

    Optional<Food> findByDeliverymanId(String deliverymanId);

    Collection<Food> findAllByChiefId(Long chiefId);
    Collection<Food> findAllByGuestId(Long GuestId);
    Collection<Food> findAllByDeliverymanId(Long DeliverymanId);
}
