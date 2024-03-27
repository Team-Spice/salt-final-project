package org.project.sideEffects.Service;

import org.project.sideEffects.Models.Product;
import org.project.sideEffects.Repository.ProductRepo;

import java.util.List;

@org.springframework.stereotype.Service
public class Service {

    private final ProductRepo repo;

    public Service (ProductRepo repo) {
        this.repo = repo;
    }

    public List<Product> findAll() {
        return repo.findAll();
    }
}
