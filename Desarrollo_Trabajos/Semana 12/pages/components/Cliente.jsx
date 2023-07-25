import { useState } from "react";

function Cliente({ cliente, setCliente, eliminarCliente }) {
  const [eliminar, setEliminar] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-br from-green-400 to-blue-500 px-5 py-5 rounded-xl shadow-xl mb-5 border-2 border-white grid grid-cols-2">
        <div className="h-fit pl-5 my-auto grid grid-cols-1">
          <p className="font-bold text-gray-700 block text-lg">
            Responsable:{" "}
            <span className="font-normal text-xl">{cliente.responsable}</span>
          </p>
          <p className="font-bold text-gray-700 block text-lg">
            Proveedor:{" "}
            <span className="font-normal text-xl">{cliente.proveedor}</span>
          </p>
          <p className="font-bold text-gray-700 block text-lg">
            Producto:{" "}
            <span className="font-normal text-xl">{cliente.producto}</span>
          </p>
          <p className="font-bold text-gray-700 block text-lg">
            Precio: <span className="font-normal text-xl">{cliente.precio}</span>
          </p>
          <p className="font-bold text-gray-700 block text-lg">
            Cantidad:{" "}
            <span className="font-normal text-xl">{cliente.cantidad}</span>
          </p>
          <p className="font-bold text-gray-700 block text-lg">
            Fecha de Registro:{" "}
            <span className="font-normal text-xl">{cliente.fecha}</span>
          </p>
          <div className="font-bold text-orange-950 block w-1/2">
            <img
              className="font-normal text-orange-600 w-[160px] m-auto shadow-xl rounded-md"
              src={cliente.imagen}
              alt="imagen"
            />
          </div>
        </div>
        <div className=" col-span-2 w-fit mt-3">
          <button
            type="button"
            className="px-10 py-2 bg-green-600 p-3 mx-3 rounded-xl text-white hover:bg-green-800 border-green-600 duration-300 text-center"
            onClick={() => setCliente(cliente)}
          >
            Editar
          </button>
          <button
            type="button"
            className="px-10 py-2 bg-red-600 p-3 mx-3 rounded-xl text-white hover:bg-red-800  border-red-600 duration-300 text-center"
            onClick={() => setEliminar(true)}
          >
            Eliminar
          </button>
        </div>
      </div>

      {eliminar && (
        <div className="bg-gradient-to-br from-green-400 to-blue-500 bg-opacity-75 fixed h-screen w-screen top-0 right-0 flex">
          <div className="bg-white w-fit h-fit mx-auto px-10 py-20 text-black ">
            <p className="text-center mb-16 font-semibold text-2xl text-gray-900">
              ¿Desea eliminar el producto "{cliente.producto}"?
            </p>
            <button
              type="button"
              className="px-10 py-2 bg-red-700 p-3 mx-3 rounded-xl text-white border-red-700 duration-300 text-center"
              onClick={() => {
                eliminarCliente(cliente);
                setEliminar(false);
              }}
            >
              Eliminar
            </button>
            <button
              type="button"
              className="px-10 py-2 bg-blue-700 p-3 mx-3 rounded-xl text-white hover:bg-black border border-blue-700 duration-300 text-center"
              onClick={() => setEliminar(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Cliente;