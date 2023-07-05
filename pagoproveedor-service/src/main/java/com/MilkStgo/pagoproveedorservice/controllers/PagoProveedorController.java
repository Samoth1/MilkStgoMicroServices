package com.MilkStgo.pagoproveedorservice.controllers;

import com.MilkStgo.pagoproveedorservice.entities.PagoProveedorEntity;
import com.MilkStgo.pagoproveedorservice.services.PagoProveedorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/pagoproveedor")
public class PagoProveedorController {

    @Autowired
    PagoProveedorService pagoProveedorService;

    @PostMapping
    public ResponseEntity<String> generarPagos(){
        return ResponseEntity.ok(pagoProveedorService.plantillaPagos());
    }

    @GetMapping("/{proveedor}/{quincena}")
    public ResponseEntity<PagoProveedorEntity> obtenerPago(@PathVariable("proveedor") String proveedor, @PathVariable("quincena") String quincena){
        return ResponseEntity.ok(pagoProveedorService.plantillaPagoFiltrado(proveedor, quincena.replace('-','/')));
    }

}
