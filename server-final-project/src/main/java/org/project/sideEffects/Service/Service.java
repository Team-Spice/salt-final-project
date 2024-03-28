package org.project.sideEffects.Service;

import org.project.sideEffects.Models.Product;
import org.project.sideEffects.Models.Report;
import org.project.sideEffects.Models.SideEffect;
import org.project.sideEffects.Repository.ProductRepo;
import org.project.sideEffects.Repository.ReportRepo;
import org.project.sideEffects.Repository.SideEffectRepo;

import java.util.List;
import java.util.Optional;

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

    public int findAllSideEffects(long pId, long seId) {
        Product product = productRepo.findById(pId).orElseThrow(() -> (new IllegalArgumentException("Side effect with id: " + pId + " not found")));
        SideEffect sideEffect = product.getSideEffectList().stream()
                .filter(effect -> effect.getId() == seId)
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Derp"));
        List<Report> report = reportRepo.findAllByProductAndSideEffect(product, sideEffect);

        return report.size();
    }

//    public void save(long pId, long seId) {
//        Optional<Product> product = productRepo.findById(pId);
//        Optional<SideEffect> sideEffect = sideEffectRepo.findById(seId);
//
//        if(product.isPresent() && sideEffect.isPresent()) {
//            Product product1 = product.get();
//            SideEffect sideEffect1 = sideEffect.get();
//
//            product1.addSideEffect(sideEffect1);
//            productRepo.save(product1);
//        }
//    }

    public Report saveReport(long pId, long seId) {
        Optional<Product> product = productRepo.findById(pId);
        Optional<SideEffect> sideEffect = sideEffectRepo.findById(seId);

        if(product.isPresent() && sideEffect.isPresent()) {
            Product product1 = product.get();
            SideEffect sideEffect1 = sideEffect.get();

            product1.addSideEffect(sideEffect1);
            Report report = new Report(product1,sideEffect1);
            return reportRepo.save(report);
        }
        return null;
    }

    public void updateReport(long id, int age) {
        Optional<Report> report = reportRepo.findById(id);
        if (report.isPresent()) {
            Report report1 = report.get();
            report1.setAge(age);
            reportRepo.save(report1);
        }
    }
}
