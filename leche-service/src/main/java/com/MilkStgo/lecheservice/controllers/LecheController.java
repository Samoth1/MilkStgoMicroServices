package com.MilkStgo.lecheservice.controllers;

import com.MilkStgo.lecheservice.entities.LecheEntity;
import com.MilkStgo.lecheservice.services.LecheService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/leche")
public class LecheController {
    @Autowired
    LecheService lecheService;

    @GetMapping("/dataproveedor/{codigo}")
    public ResponseEntity<LecheEntity> dataProveedor(@PathVariable("codigo") String codigo) {
        return ResponseEntity.ok(lecheService.obtenerDataProveedor(codigo));
    }

    @GetMapping("/grasa/{codigo}")
    public ResponseEntity<String> getGrasa(@PathVariable("codigo") String codigo){
        return ResponseEntity.ok(lecheService.obtenerGrasa(codigo));
    }

    @GetMapping("/st/{codigo}")
    public ResponseEntity<String> getST(@PathVariable("codigo") String codigo){
        return ResponseEntity.ok(lecheService.obtenerSolidoTotal(codigo));
    }

    @PostMapping("/file")
    public ResponseEntity<?> upload(@RequestParam("file") MultipartFile archivo){
        lecheService.guardar(archivo);
        return ResponseEntity.ok(lecheService.leerCsv("AcopioLeche.csv"));
    }

}