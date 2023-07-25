import React from 'react'
import Paciente from './Cliente'

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
	return (
		<div className='w-full h-[640px] overflow-y-scroll px-10 '>
			<h2 className=' font-black text-2xl text-center'>Listado de Clientes</h2>
			<p className='font-bold text-center text-indigo-600'>Editar y Eliminar Clientes</p>
			{
				pacientes.map((paciente)=>(
					<Paciente key={paciente.id} 
					paciente={paciente} 
					setPaciente={setPaciente} 
					eliminarPaciente={eliminarPaciente}/>
				))
			}
			
			


		</div>
	)
}

export default ListadoPacientes