package com.MilkStgo.pagoproveedorservice.repositories;

import com.MilkStgo.pagoproveedorservice.entities.PagoProveedorEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PagoProveedorRepository extends JpaRepository<PagoProveedorEntity, Integer> {
    PagoProveedorEntity findByCodigoProveedorAndQuincena(String codigoProveedor, String quincena);
}