package org.wecancodeit.serverside.models;

import javax.persistence.*;

@Entity
public class FoodType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String name;
    private String description;
//    @OneToOne(mappedBy = "id")
//    private Food food;

    public FoodType() {
    }

    public FoodType(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public void setId() {
        this.id = 100L;
    }

    public void setFoodTypeAll(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }
}
