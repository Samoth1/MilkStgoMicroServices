package com.MilkStgo.pagoproveedorservice.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TurnoModel {
    private Date fecha;
    private String turno;
    private String proveedor;
    private String kls_leche;
}
