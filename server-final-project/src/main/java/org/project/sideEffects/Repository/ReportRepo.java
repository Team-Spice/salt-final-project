package org.project.sideEffects.Repository;

import org.project.sideEffects.Models.Product;
import org.project.sideEffects.Models.Report;
import org.project.sideEffects.Models.SideEffect;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReportRepo extends JpaRepository<Report, Long> {

    List<Report> findAllByProductAndSideEffect(Product product, SideEffect sideEffect);
    List<Report> findAllByAgeAndProduct(int age, Product product);

    List<Report> findAllByProduct(Product product);

    List<Report> findByProductId(long productId);
}
