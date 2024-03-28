package org.project.sideEffects.Service;

import org.project.sideEffects.Models.Product;
import org.project.sideEffects.Models.Report;
import org.project.sideEffects.Models.SideEffect;
import org.project.sideEffects.Repository.ProductRepo;
import org.project.sideEffects.Repository.ReportRepo;
import org.project.sideEffects.Repository.SideEffectRepo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReportService {

    private final ReportRepo reportRepo;
    private final ProductRepo productRepo;
    private final SideEffectRepo sideEffectRepo;


    public ReportService(ReportRepo reportRepo, ProductRepo productRepo, SideEffectRepo sideEffectRepo) {
        this.reportRepo = reportRepo;
        this.productRepo = productRepo;
        this.sideEffectRepo = sideEffectRepo;
    }

    public List<Report> getAllReports() {
        return reportRepo.findAll();
    }

    public Report saveReport(long pId, long seId) {
        Optional<Product> product = productRepo.findById(pId);
        Optional<SideEffect> sideEffect = sideEffectRepo.findById(seId);

        if(product.isPresent() && sideEffect.isPresent()) {
            Product product1 = product.get();
            SideEffect sideEffect1 = sideEffect.get();

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

    public List<Report> getDemographicReports(long id, int age) {
        Product product = productRepo.findById(id).orElseThrow(() -> new IllegalArgumentException("No product with id: " + id));
        return reportRepo.findAllByAgeAndProduct(age, product);
    }

    public List<Report> getProductReports(long id) {
        Product product = productRepo.findById(id).orElseThrow(() -> new IllegalArgumentException("No product with ID: " + id));
        return reportRepo.findAllByProduct(product);
    }
}
