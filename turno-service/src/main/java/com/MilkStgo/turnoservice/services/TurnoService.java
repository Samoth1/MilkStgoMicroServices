package com.MilkStgo.turnoservice.services;

import com.MilkStgo.turnoservice.entities.TurnoEntity;
import com.MilkStgo.turnoservice.repositories.TurnoRepository;
import lombok.Generated;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Date;

@Service
public class TurnoService {
    @Autowired
    private TurnoRepository turnoRepository;

    private final Logger logg = LoggerFactory.getLogger(TurnoService.class);

    public ArrayList<TurnoEntity> obtenerDataTurnos(){
        return (ArrayList<TurnoEntity>) turnoRepository.findAll();
    }

    public ArrayList<String> obtenerProveedores(){
        return (ArrayList<String>) turnoRepository.getProveedores();
    }

    @Generated
    public String guardar(MultipartFile file){
        String filename = file.getOriginalFilename();
        if(filename != null){
            if(!file.isEmpty()){
                try{
                    byte [] bytes = file.getBytes();
                    Path path  = Paths.get("AcopioTurno.csv");
                    Files.write(path, bytes);
                    logg.info("Archivo guardado");
                }
                catch (IOException e){
                    logg.error("ERROR", e);
                }
            }
            return "Archivo guardado con exito!";
        }
        else{
            return "No se pudo guardar el archivo";
        }
    }

    @Generated
    public String leerCsv(String direccion){
        BufferedReader bf = null;
        turnoRepository.deleteAll();
        try{
            bf = new BufferedReader(new FileReader(direccion));
            String bfRead;
            int count = 1;
            while((bfRead = bf.readLine()) != null){
                if (count == 1){
                    count = 0;
                }
                else{
                    guardarDataDB(bfRead.split(";")[0], bfRead.split(";")[1], bfRead.split(";")[2], bfRead.split(";")[3]);
                }
            }
            return "Acopio cargado con exito";
        }catch(Exception e){
            return "No se encontro el archivo";
        }finally{
            if(bf != null){
                try{
                    bf.close();
                }catch(IOException e){
                    logg.error("ERROR", e);
                }
            }
        }
    }

    @Generated
    public void guardarData(TurnoEntity data){
        turnoRepository.save(data);
    }

    @Generated
    public void guardarDataDB(String fecha, String turno, String proveedor, String kls_leche){
        TurnoEntity newData = new TurnoEntity();
        newData.setFecha(new Date(fecha));
        newData.setTurno(turno);
        newData.setProveedor(proveedor);
        newData.setKls_leche(kls_leche);
        guardarData(newData);
    }
}