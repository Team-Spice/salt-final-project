package org.project.sideEffects.Repository;

import org.project.sideEffects.Models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRepository extends JpaRepository<Product, Long> {
}
