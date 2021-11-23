package com.ejemplo.demo.interfaceService;

import java.util.List;
import java.util.Optional;

import com.ejemplo.demo.model.Persona;

public interface IpersonaService {
	public List<Persona>listar();
	public Optional<Persona>listarId(int id);
	public int save(Persona p);
	public void delete(int id);
	
	
}
