function Paciente({paciente, setPaciente, eliminarPaciente}) {
	//console.log(cliente);
	const handleEliminar = ()=>{
		const respuesta = confirm("¿Desea Eliminar el Cliente?")

		if(respuesta){
			eliminarPaciente(paciente.id)
		}
	}
	return (
		<div className="bg-gradient-to-br from-orange-200 via-orange-100 to-orange-200 px-5 py-5 rounded-xl shadow-xl mt-2 border-4 ml-5">
		<p className="font-bold text-gray-700 block text-lg">
		Nombre: <span className="font-normal text-xl">{paciente.nombre}</span>
		</p>
		<p className="font-bold text-gray-700 block text-lg">
		Dirección: <span className="font-normal text-xl">{paciente.direccion}</span>
		</p>
		<p className="font-bold text-gray-700 block text-lg">
		Teléfono Móvil: <span className="font-normal text-xl">{paciente.telefono}</span>
		</p>
		<p className="font-bold text-gray-700 block text-lg">
		Email: <span className="font-normal text-xl">{paciente.email}</span>
		</p>
		<p className="font-bold text-gray-700 block text-lg">
		Fecha: <span className="font-normal text-xl">{paciente.fecha}</span>
		</p>
		<p className="font-bold text-gray-700 block text-lg">
		Asunto: <span className="font-normal text-xl">{paciente.sintomas}</span>
		</p>
		<div>
			<button
				type="button"
				className="px-10 py-2 bg-green-500 hover:bg-green-700 text-white rounded-xl mt-2 mx-3"
				onClick={()=>setPaciente(paciente)}
			>Editar</button>
			<button
				type="button"
				className="px-10 py-2 bg-red-600 hover:bg-red-800 text-white rounded-xl"
				onClick={handleEliminar}
			>Eliminar</button>
		</div>
	</div>
	)
}

export default Paciente