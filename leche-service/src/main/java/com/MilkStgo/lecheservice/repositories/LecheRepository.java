package com.MilkStgo.lecheservice.repositories;

import com.MilkStgo.lecheservice.entities.LecheEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LecheRepository extends JpaRepository<LecheEntity, Integer> {
    LecheEntity findByProveedor(String proveedor);
}
