import React from 'react'
import { useState, useEffect } from 'react'
import Error from './Error'
import datos from '../../datos.json';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
	const [nombre, setNombre] = useState("")
	const [direccion, setDireccion] = useState("")
	const [telefono, setTelefono] = useState("");
	const [email, setEmail] = useState("")
	const [fecha, setFecha] = useState("")
	const [sintomas, setSintomas] = useState("")
	const [error, setError] = useState(false)

	useEffect(()=>{
		if(Object.keys(paciente).length>0){
			setNombre(paciente.nombre)
			setDireccion(paciente.direccion)
			setTelefono(paciente.telefono);
			setEmail(paciente.email)
			setFecha(paciente.fecha)
			setSintomas(paciente.sintomas)
		}
	}, [paciente])
	const handlerSubmit = (e)=>{
		e.preventDefault()
		if([nombre, direccion, telefono, email, fecha, sintomas].includes('')){
			setError(true)
			return
		}
		const objetoPaciente = {
			nombre,
			direccion,
			telefono,
			email,
			fecha,
			sintomas
		}
		if (paciente.id) {
			// MODO EDITAR
			objetoPaciente.id = paciente.id;
			datos[paciente.id] = objetoPaciente;
		} else {
			// MODO AGREGAR
			const id = generarId();
			objetoPaciente.id = id;
			datos[id] = objetoPaciente;
		}

		// Almacenar datos en datos.json
		const jsonDatos = JSON.stringify(datos);
		localStorage.setItem('datos', jsonDatos);

		// Actualizar el estado de pacientes
		setPacientes(Object.values(datos));
		setPaciente({});

		setNombre('');
		setDireccion('');
		setTelefono('');
		setEmail('');
		setFecha('');
		setSintomas('');
		setError(false);
	}
	const generarId = ()=>{
		const fecha = Date.now().toString(36)
		const aleatorio = Math.random().toString(36).substring(2)
		return fecha+aleatorio
	}
	
	return (
	<div className="w-full">
	<h2 className="font-black text-2xl text-center">Formulario de Clientes</h2>
	<p className="font-bold text-center text-indigo-600">Ingreso de Datos</p>

	<form
		className="bg-gradient-to-r from-gray-200 via-gray-200 to-teal-200 px-5 py-5 rounded-xl shadow-xl mt-2"
		onSubmit={handlerSubmit}
	>
		{error && <Error texto="Todos los campos son obligatorios" />}
		<div className="mb-3">
		<label htmlFor="nombre" className="font-bold text-gray-700 block">
			Nombre del Cliente:
		</label>
		<input
			id="nombre"
			type="text"
			className="w-full border-2 p-2 rounded-lg placeholder-indigo-600"
			placeholder="Nombre del cliente"
			value={nombre}
			onChange={(e) => setNombre(e.target.value)}
		/>
		</div>
		<div className="mb-3">
		<label htmlFor="direccion" className="font-bold text-gray-700 block">
			Dirección del Cliente:
		</label>
		<input
			id="direccion"
			type="text"
			className="w-full border-2 p-2 rounded-lg placeholder-indigo-600"
			placeholder="Dirección del cliente"
			value={direccion}
			onChange={(e) => setDireccion(e.target.value)}
		/>
		</div>
		<div className="mb-3">
		<label htmlFor="telefono" className="font-bold text-gray-700 block">
			Teléfono Móvil:
		</label>
		<input
			id="telefono"
			type="text"
			className="w-full border-2 p-2 rounded-lg placeholder-indigo-600"
			placeholder="Teléfono móvil del cliente"
			value={telefono}
			onChange={(e) => {
			const inputValue = e.target.value;
			const numericValue = inputValue.replace(/\D/g, "");
			setTelefono(numericValue);
			}}
		/>
		</div>
		<div className="mb-3">
		<label htmlFor="email" className="font-bold text-gray-700 block">
			Correo del Cliente:
		</label>
		<input
			id="email"
			type="text"
			className="w-full border-2 p-2 rounded-lg placeholder-indigo-600"
			placeholder="Correo del cliente"
			value={email}
			onChange={(e) => setEmail(e.target.value)}
		/>
		</div>
		<div className="mb-3">
		<label htmlFor="fecha" className="font-bold text-gray-700 block">
			Fecha:
		</label>
		<input
			id="fecha"
			type="date"
			className="w-full border-2 p-2 rounded-lg"
			value={fecha}
			onChange={(e) => setFecha(e.target.value)}
		/>
		</div>
		<div className="mb-3">
		<label htmlFor="sintomas" className="font-bold text-gray-700 block">
			Asunto:
		</label>
		<textarea
			id="sintomas"
			className="w-full border-2 p-2 rounded-lg"
			placeholder="Ingrese su asunto"
			value={sintomas}
			onChange={(e) => setSintomas(e.target.value)}
		/>
		</div>
		<input
	type="submit"
	value={paciente.id ? "Guardar Cliente" : "Agregar Cliente"}
	className="bg-gradient-to-r from-teal-100 to-teal-200 hover:from-teal-100 hover:to-teal-200 transition-colors px-6 py-3 w-full text-white rounded-xl"
	style={{
		background: "linear-gradient(to right, #00C9A7, #FFD700)",
		backgroundClip: "text",
		textShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
		fontWeight: "bold"
	}}
	/>
	</form>
	</div>
	)
}

export default Formulario