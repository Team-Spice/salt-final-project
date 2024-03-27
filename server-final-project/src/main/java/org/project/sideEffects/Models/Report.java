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

    public Report() {}

    public Report(Product product, SideEffect sideEffect) {
        this.product = product;
        this.sideEffect = sideEffect;
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
}
