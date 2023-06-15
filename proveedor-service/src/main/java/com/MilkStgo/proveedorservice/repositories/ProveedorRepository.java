package com.MilkStgo.proveedorservice.repositories;

import com.MilkStgo.proveedorservice.entities.ProveedorEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProveedorRepository extends JpaRepository<ProveedorEntity, String> {
    ProveedorEntity findByCodigo(String codigo);
}
