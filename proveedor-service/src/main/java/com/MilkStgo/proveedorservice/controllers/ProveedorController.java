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

    @GetMapping("/categoria/{codigo}")
    public ResponseEntity<String> categoriaPago(@PathVariable("codigo") String codigo) {
        return ResponseEntity.ok(proveedorService.obtenerCategoria(codigo));
    }

    @GetMapping("/nombre/{codigo}")
    public ResponseEntity<String> nombreProveedor(@PathVariable("codigo") String codigo) {
        return ResponseEntity.ok(proveedorService.obtenerNombre(codigo));
    }

    @GetMapping("/retencion/{codigo}")
    public ResponseEntity<String> retencionProveedor(@PathVariable("codigo") String codigo) {
        return ResponseEntity.ok(proveedorService.obtenerRetencion(codigo));
    }

    @PostMapping
    public ResponseEntity<?> guardarProveedor(@RequestBody ProveedorEntity proveedor){
        proveedorService.guardarProveedor(proveedor.getCodigo(), proveedor.getNombre(), proveedor.getCategoria(),  proveedor.getRetencion());
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<ArrayList<ProveedorEntity>> getProveedores(){
        ArrayList<ProveedorEntity> proveedores = proveedorService.obtenerProveedores();
        return  ResponseEntity.ok(proveedores);
    }

}