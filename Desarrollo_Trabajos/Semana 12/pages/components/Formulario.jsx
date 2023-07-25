import React from "react";
import { useState, useEffect, useRef } from "react";
import Error from "./Error";

const Formulario = ({ clientes, setClientes, cliente, setCliente }) => {
  const [responsable, setResponsable] = useState("");
  const [proveedor, setProveedor] = useState("");
  const [producto, setProducto] = useState("")
  const [precio, setPrecio] = useState("");
  const [cantidad, setCantidad] = useState("")
  const [fecha, setFecha] = useState("");
  const [imagen, setImagen] = useState(null);
  const [error, setError] = useState(false);


  useEffect(() => {
    if (Object.keys(cliente).length > 0) {
      setResponsable(cliente.responsable);
      setProveedor(cliente.proveedor);
      setProducto(cliente.producto)
      setPrecio(cliente.precio);
      setCantidad(cliente.cantidad)
      setFecha(cliente.fecha);
      setImagen(cliente.imagen);
    }
  }, [cliente]);


  const handlerSubmit = async (e) => {
    e.preventDefault();

    if ([responsable, proveedor, producto, precio, cantidad, fecha, imagen].includes("")) {
      setError(true);
      return;
    }

    const objetoPaciente = {
      responsable,
      proveedor,
      producto,
      precio,
      cantidad,
      fecha,
      imagen,
    };

    if (cliente.id) {
      // MODO EDITAR
      objetoPaciente.id = cliente.id;
      const clientesActualizados = clientes.map((clienteState) =>
        clienteState.id === cliente.id ? objetoPaciente : clienteState
      );
      setClientes(clientesActualizados);
      setCliente({});
    
      const res = await fetch("../api/client", {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(objetoPaciente),
      });
    
      const data = await res.json();
    
      if (data) {
        console.log("enviado");
      } else {
        console.log("error");
      }
    } else {
      // MODO AGREGAR
      objetoPaciente.id = generarId();
      if (!Array.isArray(clientes)) {
        setClientes([]);
      }
      setClientes([...clientes, objetoPaciente]);
    
      const res = await fetch("../api/client", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(objetoPaciente),
      });
    
      const data = await res.json();
    
      if (data) {
        console.log("enviado");
      } else {
        console.log("error");
      }
    }
    setResponsable("");
    setProveedor("");
    setProducto("");
    setPrecio("");
    setCantidad("");
    setFecha("");
    setImagen(null);
    setError(false);

  };
  const generarId = () => {
    const fecha = Date.now().toString(36);
    const aleatorio = Math.random().toString(36).substring(2);
    return fecha + aleatorio;
  };

  return (
    <div className="w-full">
      <h2 className="font-black text-2xl text-center">Formulario de Registro de Productos</h2>
      <p className="font-bold text-center text-indigo-600">Ingreso de Caracteristicas</p>

      <form
        className="bg-gradient-to-r from-teal-300 via-teal-400 to-teal-300 px-5 py-5 rounded-xl shadow-xl mt-2"
        onSubmit={handlerSubmit}
      >
      {error && <Error texto="Todos los campos son obligatorios" />}
      <div className="mb-3">
      <label htmlFor="responsable" className="font-bold text-gray-700 block">
        Responsable del registro:
      </label>
      <input
        id="responsable"
        type="text"
        className="w-full border-2 p-2 rounded-lg placeholder-indigo-600"
        placeholder="Responsable"
        value={responsable}
        onChange={(e) => setResponsable(e.target.value)}
      />
      </div>
      <div className="mb-3">
      <label htmlFor="proveedor" className="font-bold text-gray-700 block">
        Proveedor del Producto:
      </label>
      <input
        id="proveedor"
        type="text"
        className="w-full border-2 p-2 rounded-lg placeholder-indigo-600"
        placeholder="Proveedor"
        value={proveedor}
        onChange={(e) => setProveedor(e.target.value)}
      />
      </div>
      <div className="mb-3">
      <label htmlFor="producto" className="font-bold text-gray-700 block">
        Nombre del Producto:
      </label>
      <input
        id="producto"
        type="text"
        className="w-full border-2 p-2 rounded-lg placeholder-indigo-600"
        placeholder="Nombre"
        value={producto}
        onChange={(e) => setProducto(e.target.value)}
      />
      </div>
      <div className="mb-3">
      <label htmlFor="precio" className="font-bold text-gray-700 block">
        Precio del Producto:
      </label>
      <input
        id="precio"
        type="text"
        className="w-full border-2 p-2 rounded-lg placeholder-indigo-600"
        placeholder="Precio"
        value={precio}
        onChange={(e) => {
        const inputValue = e.target.value;
        const numericValue = inputValue.replace(/\D/g, "");
        setPrecio(numericValue);
        }}
      />
      </div>
      <div className="mb-3">
      <label htmlFor="cantidad" className="font-bold text-gray-700 block">
        Cantidad de Producto:
      </label>
      <input
        id="cantidad"
        type="text"
        className="w-full border-2 p-2 rounded-lg placeholder-indigo-600"
        placeholder="Cantidad"
        value={cantidad}
        onChange={(e) => {
        const inputValue = e.target.value;
        const numericValue = inputValue.replace(/\D/g, "");
        setCantidad(numericValue);
        }}
      />
      </div>
      <div className="mb-3">
      <label htmlFor="fecha" className="font-bold text-gray-700 block">
        Fecha de Registro:
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
          <label htmlFor="date" className="  font-bold text-green-500 block">
            Imagen de Perfil:
          </label>
          <input
            id="image"
            type="text"
            className="w-full border-2 p-2 rounded-lg placeholder-blue-400 text-gray-700"
            placeholder="URL de la imagen"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          />
        </div>
      <input
        type="submit"
        value={cliente.id ? "Guardar Producto" : "Agregar Producto"}
        className="bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 transition-colors px-6 py-3 w-full text-white rounded-xl"
        style={{
          background: "linear-gradient(to right, #00C9A7, #FFD700)",
          backgroundClip: "text",
          textShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
          fontWeight: "bold"
      }}
      />
    </form>
    </div>
  );
};

export default Formulario;