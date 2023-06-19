package com.MilkStgo.turnoservice.controllers;

import com.MilkStgo.turnoservice.entities.TurnoEntity;
import com.MilkStgo.turnoservice.services.TurnoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/turno")
public class TurnoController {
    @Autowired
    TurnoService turnoService;

    @GetMapping("/dataTurnos")
    public ResponseEntity<ArrayList<TurnoEntity>> dataTurnos() {
        return ResponseEntity.ok(turnoService.obtenerDataTurnos());
    }

    @GetMapping("/dataProveedores")
    public ResponseEntity<ArrayList<String>> dataProveedor() {
        return ResponseEntity.ok(turnoService.obtenerProveedores());
    }

}
