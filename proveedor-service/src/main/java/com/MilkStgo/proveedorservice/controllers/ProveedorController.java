package com.MilkStgo.proveedorservice.controllers;

import com.MilkStgo.proveedorservice.entities.ProveedorEntity;
import com.MilkStgo.proveedorservice.services.ProveedorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.ArrayList;
@RestController
@RequestMapping("/proveedor")
public class ProveedorController {

    @Autowired
    ProveedorService proveedorService;

    @GetMapping("/getCategoria/{codigo}")
    public ResponseEntity<String> categoriaPago(@PathVariable("codigo") String codigo) {
        return ResponseEntity.ok(proveedorService.obtenerCategoria(codigo));
    }

    @GetMapping("/getNombre/{codigo}")
    public ResponseEntity<String> nombreProveedor(@PathVariable("codigo") String codigo) {
        return ResponseEntity.ok(proveedorService.obtenerNombre(codigo));
    }

    @GetMapping("/getRetencion/{codigo}")
    public ResponseEntity<String> retencionProveedor(@PathVariable("codigo") String codigo) {
        return ResponseEntity.ok(proveedorService.obtenerRetencion(codigo));
    }

    //añadir controladores

}
