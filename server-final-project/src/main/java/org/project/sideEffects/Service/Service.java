package org.project.sideEffects.Service;

import org.project.sideEffects.Models.Product;
import org.project.sideEffects.Repository.IRepository;

import java.util.List;

@org.springframework.stereotype.Service
public class Service {

    private final IRepository repo;

    public Service (IRepository repo) {
        this.repo = repo;
    }

    public List<Product> findAll() {
        return repo.findAll();
    }
}
