package org.jose.api03.webapi02.services;

import org.jose.api03.webapi02.models.EmployedModel;
import org.jose.api03.webapi02.repositories.EmployedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class EmployedService {
    @Autowired
    EmployedRepository employedRepository;

    public ArrayList<EmployedModel> obtenerEmpleados(){
        return (ArrayList<EmployedModel>) employedRepository.findAll();
    }
    public Optional<EmployedModel> obtenerEmpleado(Long id){
        return employedRepository.findById(id);
    }
    public EmployedModel guardarEmpleado(EmployedModel employedModel){
        return employedRepository.save(employedModel);
    }
    public boolean eliminarEmpleado(Long id){
        try {
            employedRepository.deleteById(id);
            return true;
        }catch (Exception error){
            return false;
        }
    }
}
