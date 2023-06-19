package com.MilkStgo.pagoproveedorservice.controllers;

import com.MilkStgo.pagoproveedorservice.services.PagoProveedorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pago_proveedor")
public class PagoProveedorController {
    @Autowired
    PagoProveedorService pagoProveedorService;


}
