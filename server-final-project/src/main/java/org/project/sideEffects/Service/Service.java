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

    public List<Product> findAll() {
        return productRepo.findAll();
    }

    public List<SideEffect> findAllSideEffects() {
        return sideEffectRepo.findAll();
    }
}
