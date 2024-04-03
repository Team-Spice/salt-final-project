package org.project.sideEffects.Service;

import org.project.sideEffects.Models.Product;
import org.project.sideEffects.Models.Report;
import org.project.sideEffects.Models.SideEffect;
import org.project.sideEffects.Repository.ProductRepo;
import org.project.sideEffects.Repository.ReportRepo;
import org.project.sideEffects.Repository.SideEffectRepo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

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

        if (product.isPresent() && sideEffect.isPresent()) {
            Product product1 = product.get();
            SideEffect sideEffect1 = sideEffect.get();

            Report report = new Report(product1, sideEffect1);
            return reportRepo.save(report);
        }
        return null;
    }

    public void updateReport(long id, int age, String gender) {
        Optional<Report> report = reportRepo.findById(id);
        if (report.isPresent()) {
            Report report1 = report.get();
            report1.setAge(age);
            report1.setGender(gender);
            reportRepo.save(report1);
        }
    }

    public List<Report> getDemographicReports(long id, int age, String gender) {
        Product product = productRepo.findById(id).orElseThrow(() -> new IllegalArgumentException("No product with id: " + id));

        if (age < 0 && gender.isEmpty()) {
            return reportRepo.findAllByProduct(product);
        }
        if (age >= 0 && !gender.isEmpty()) {
            return reportRepo.findAllByAgeAndProductAndGender(age, product, gender);
        }
        if (age < 0) {
            return reportRepo.findAllByGenderAndProduct(gender, product);
        }
        return reportRepo.findAllByAgeAndProduct(age, product);
    }

    public List<Report> getProductReports(long id) {
        Product product = productRepo.findById(id).orElseThrow(() -> new IllegalArgumentException("No product with ID: " + id));
        return reportRepo.findAllByProduct(product);
    }

    public Map<String, Long> getSideEffectsByProductAndAge(long productId, int age) {
        Optional<Product> product = productRepo.findById(productId);

        if (product == null) {
            throw new IllegalArgumentException("Product not found with ID: " + productId);
        }

        List<Report> productReports = reportRepo.findByProductId(productId);

        Map<String, Long> sideEffectsByProductAndAge = productReports.stream()
                .filter(report -> report.getAge() == age)
                .collect(Collectors.groupingBy(report -> report.getSideEffect().getName(),
                        Collectors.counting()));

        return sideEffectsByProductAndAge;
    }


    public long getTotalReportsForProduct(long productId) {
        List<Report> reports = reportRepo.findByProductId(productId);
        return reports.size();
    }
}