package org.jose.api03.webapi02.controllers;

import org.jose.api03.webapi02.models.EmployedModel;
import org.jose.api03.webapi02.services.EmployedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/empleados")
public class EmployedController {
    @Autowired
    EmployedService employedService;
    @GetMapping()
    public ArrayList<EmployedModel> obtenerEmpleados(){
        return employedService.obtenerEmpleados();
    }
    @GetMapping(path="/{id}")
    public Optional<EmployedModel> obtenerEmpleado(@PathVariable("id") Long id){
        return employedService.obtenerEmpleado(id);
    }
    @PostMapping()
    public EmployedModel guardarEmpleado(@RequestBody EmployedModel employedModel){
        return employedService.guardarEmpleado(employedModel);
    }
    @DeleteMapping(path="/{id}")
    public String eliminarEmpleado(@PathVariable("id") Long id){
        boolean eliminado = employedService.eliminarEmpleado(id);
        if (eliminado){
            return "eliminado correctamente!!";
        }else {
            return "No se pudo eliminar!!";
        }
    }
}
