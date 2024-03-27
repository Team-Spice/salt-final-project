package org.project.sideEffects.Controller;

import org.project.sideEffects.Models.Product;
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

    @GetMapping("/side-effect/{productId}/{sideEffectId}")
    public ResponseEntity<Integer> getAllSideEffects(
            @PathVariable long productId,
            @PathVariable long sideEffectId) {
        try {
            int sideEffectCount = service.findAllSideEffects(productId, sideEffectId);
            return ResponseEntity.ok(sideEffectCount);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

//    @PostMapping("/side-effect/{productId}/{sideEffectId}")
    @PostMapping("/side-effect/{productId}/{sideEffectId}")
    public ResponseEntity<Void> saveSideEffect(@PathVariable long productId,
                                               @PathVariable long sideEffectId) {
        try {
            service.saveReport(productId, sideEffectId);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

//    @PostMapping("/side-effect/{productId}/{sideEffectId}")
//    public ResponseEntity<Void> saveToReport(@PathVariable long productId,
//                                             @PathVariable long sideEffectId){
//        service.saveReport(productId, sideEffectId);
//        return ResponseEntity.ok().build();
//
//    }


    @GetMapping("/product")
    public ResponseEntity<List<Product>> getListOfProduct() {
        return ResponseEntity.ok(this.service.findAll());
    }
}
