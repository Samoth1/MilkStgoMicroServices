package com.MilkStgo.turnoservice.repositories;
import com.MilkStgo.turnoservice.entities.TurnoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface TurnoRepository extends JpaRepository<TurnoEntity, Integer> {
    @Query(value = "select distinct proveedor from data_turno", nativeQuery = true)
    ArrayList<String> getProveedores();
}
