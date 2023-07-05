package com.MilkStgo.pagoproveedorservice.models;

import lombok.*;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class TurnoModel {
    private Date fecha;
    private String turno;
    private String proveedor;
    private String kls_leche;
}
