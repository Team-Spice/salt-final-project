package org.project.sideEffects.Controller;

import org.apache.catalina.Service;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;




@CrossOrigin
@RestController
@RequestMapping("/api")
public class Controller {

//    private final Service service;
//
//    public Controller(Service service) {
//        this.service = service;
//    }

    @GetMapping("/product")
    public ResponseEntity<String> getProduct () {
        return ResponseEntity.ok("Connected");
    }
}
