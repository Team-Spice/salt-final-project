package org.project.sideEffects.Models;

import jakarta.persistence.*;

@Entity
@Table(name = "reports")
public class Report {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    @OneToOne
    private Product product;

    @Column
    @OneToOne
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
