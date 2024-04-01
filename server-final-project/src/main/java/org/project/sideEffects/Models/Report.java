package org.project.sideEffects.Models;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;

@Entity
@Table(name = "reports")
public class Report {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private long id;

    @ManyToOne(cascade = CascadeType.ALL)
    private Product product;

    @ManyToOne(cascade = CascadeType.ALL)
    private SideEffect sideEffect;

    @Column
    private int age;

    @Column
    private String gender;

    public Report() {}

    public Report(Product product, SideEffect sideEffect) {
        this.product = product;
        this.sideEffect = sideEffect;
        age = -1;
        gender= null;
    }

    public long getId() {
        return id;
    }

    public Product getProduct() {
        return product;
    }

    public SideEffect getSideEffect() {
        return sideEffect;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int newAge) {
        age = newAge;
    }
    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }
}
