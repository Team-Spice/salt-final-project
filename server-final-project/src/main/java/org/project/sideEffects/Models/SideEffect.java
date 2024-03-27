package org.project.sideEffects.Models;

import jakarta.persistence.*;

@Entity
@Table(name = "side_effects")
public class SideEffect {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String name;

    public SideEffect(String name) {
        this.name = name;
    }

    public SideEffect() {
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
