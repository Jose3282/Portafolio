import React from 'react'
import Cliente from './Cliente'

const ListadoClientes = ({clientes, setCliente, eliminarCliente}) => {
	return (
    <div className="w-full h-[640px] overflow-y-scroll px-10 ">
			<h2 className=' font-black text-2xl text-center'>Listado de Productos Registrados</h2>
			<p className='font-bold text-center text-indigo-600'>Editar y Eliminar Productos</p>
      {Array.isArray(clientes) && clientes.map((cliente) => (
        <Cliente
          key={cliente.id}
          cliente={cliente}
          setCliente={setCliente}
          eliminarCliente={eliminarCliente}
        />
      ))}
    </div>
  );
}

export default ListadoClientes