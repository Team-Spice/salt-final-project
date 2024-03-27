package org.project.sideEffects.Controller;

import org.project.sideEffects.Models.Product;
import org.project.sideEffects.Models.SideEffect;
import org.project.sideEffects.Service.Service;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin
@RestController
@RequestMapping("/api")
public class Controller {

    private final Service service;

    public Controller(Service service) {
        this.service = service;
    }

    @GetMapping("/product/{id}")
    public ResponseEntity<Product> getProduct(@PathVariable long id) {
        try {
            Product product = service.getProduct(id);
            return ResponseEntity.ok(product);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/side-effect/{id}")
    public ResponseEntity<List<SideEffect>> getAllSideEffects(@PathVariable long id) {
        try {
            List<SideEffect> sideEffectList = service.findAllSideEffects(id);
            return ResponseEntity.ok(sideEffectList);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/product")
    public ResponseEntity<List<Product>> getListOfProduct() {
        return ResponseEntity.ok(this.service.findAll());
    }
}
