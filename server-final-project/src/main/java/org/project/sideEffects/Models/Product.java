package org.project.sideEffects.Models;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private long id;
    @Column
    private String name;
    @Column
    private String barcode;
    @Column
    private String brand;
    @Column
    private String image;
    @Column
    private String description;
    @ManyToMany(cascade = CascadeType.ALL)
    private List<SideEffect> sideEffectList;

    public Product(String name, String brand, String description, List<SideEffect> sideEffectList) {
        this.name = name;
        this.brand = brand;
        this.description = description;
        this.sideEffectList = sideEffectList;
    }

    public Product() {
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getBarcode() {
        return barcode;
    }

    public String getImage() {
        return image;
    }

    public String getBrand() {
        return brand;
    }

    public String getDescription() {
        return description;
    }

    public List<SideEffect> getSideEffectList() {
        return sideEffectList;
    }
}
