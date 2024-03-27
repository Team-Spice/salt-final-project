package org.project.sideEffects.Service;

import org.project.sideEffects.Models.Product;
import org.project.sideEffects.Models.SideEffect;
import org.project.sideEffects.Repository.ProductRepo;
import org.project.sideEffects.Repository.ReportRepo;
import org.project.sideEffects.Repository.SideEffectRepo;

import java.util.List;

@org.springframework.stereotype.Service
public class Service {

    private final ProductRepo productRepo;
    private final ReportRepo reportRepo;
    private final SideEffectRepo sideEffectRepo;

    public Service (ProductRepo productRepo, ReportRepo reportRepo, SideEffectRepo sideEffectRepo) {
        this.productRepo = productRepo;
        this.reportRepo = reportRepo;
        this.sideEffectRepo = sideEffectRepo;
    }

    public Product getProduct(long id) {
        return productRepo.findById(id).orElseThrow(() -> (new IllegalArgumentException("Product with id: " + id + " not found")));
    }

    public List<Product> findAll() {
        return productRepo.findAll();
    }

    public List<SideEffect> findAllSideEffects(long id) {
        Product product = productRepo.findById(id).orElseThrow(() -> (new IllegalArgumentException("Side effect with id: " + id + " not found")));
        return product.getSideEffectList();
    }
}
