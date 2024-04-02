package org.project.sideEffects.Service;

import org.project.sideEffects.Models.Product;
import org.project.sideEffects.Models.Report;
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

    public Product getProduct(String barcode) {
        return productRepo.findByBarcode(barcode);
    }

    public Product getProduct(long id) {
        return productRepo.findById(id).orElseThrow(() -> new IllegalArgumentException("Product not found with ID: " + id));
    }

    public List<Product> findAll() {
        return productRepo.findAll();
    }

    public int findAllSideEffects(long pId, long seId) {
        Product product = productRepo.findById(pId).orElseThrow(() -> (new IllegalArgumentException("Side effect with id: " + pId + " not found")));
        SideEffect sideEffect = product.getSideEffectList().stream()
                .filter(effect -> effect.getId() == seId)
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Derp"));
        List<Report> report = reportRepo.findAllByProductAndSideEffect(product, sideEffect);

        return report.size();
    }
}
