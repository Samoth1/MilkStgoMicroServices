package com.MilkStgo.lecheservice.controllers;

import com.MilkStgo.lecheservice.entities.LecheEntity;
import com.MilkStgo.lecheservice.services.LecheService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/leche")
public class LecheController {
    @Autowired
    LecheService lecheService;

    @GetMapping("/dataPoveedor/{codigo}")
    public ResponseEntity<LecheEntity> dataProveedor(@PathVariable("codigo") String codigo) {
        return ResponseEntity.ok(lecheService.obtenerDataProveedor(codigo));
    }

    @GetMapping("/getGrasa/{codigo}")
    public ResponseEntity<String> getGrasa(@PathVariable("codigo") String codigo){
        return ResponseEntity.ok(lecheService.obtenerGrasa(codigo));
    }

    @GetMapping("/getST/{codigo}")
    public ResponseEntity<String> getST(@PathVariable("codigo") String codigo){
        return ResponseEntity.ok(lecheService.obtenerSolidoTotal(codigo));
    }

}
