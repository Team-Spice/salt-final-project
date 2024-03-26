package org.project.sideEffects.Controller;

import org.project.sideEffects.Models.Product;
import org.project.sideEffects.Service.Service;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@CrossOrigin
@RestController
@RequestMapping("/api")
public class Controller {

    private final Service service;

    public Controller(Service service) {
        this.service = service;
    }

    @GetMapping("/product")
    public ResponseEntity<Product> getProduct() {
        return ResponseEntity.ok(this.service.findAll().get(1));
    }

//    @GetMapping("/listProducts")
//    public ResponseEntity<List<Product>> getListOfProduct() {
//        return ResponseEntity.ok(this.service.findAll());
//    }
}
