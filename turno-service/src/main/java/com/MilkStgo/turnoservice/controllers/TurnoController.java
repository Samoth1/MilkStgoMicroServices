package com.MilkStgo.turnoservice.controllers;

import com.MilkStgo.turnoservice.entities.TurnoEntity;
import com.MilkStgo.turnoservice.services.TurnoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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

    @PostMapping("/file")
    public ResponseEntity<?> upload(@RequestParam("file") MultipartFile archivo){
        turnoService.guardar(archivo);
        return ResponseEntity.ok(turnoService.leerCsv("AcopioTurno.csv"));
    }

}
