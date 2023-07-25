import { Inter } from "next/font/google";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import ListadoClientes from "./components/ListadoClientes";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const [clientes, setClientes] = useState(null);
  const [cliente, setCliente] = useState({});

  const eliminarCliente = async (clienteD) => {

    const clienteid = clienteD.id

    const clientesActualizados = clientes.filter(
      (cliente) => cliente.id != clienteid
    );
    setClientes(clientesActualizados);

    const res = await fetch(`/api/client/${clienteid}`, {
      method: "DELETE"
    });

    const data = await res.json();

    if (res.ok) {
      console.log(data);
    } else {
      console.log("error");
    }
  };

  const getData = async () => {
    try {
      const res = await fetch("/api/client");
      if (res.ok) {
        const dataGet = await res.json();
        setClientes(dataGet);
      } else {
        throw new Error('Error al cargar los datos:', error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (!clientes) {
    return <div>Cargando...</div>;
  }

  return (
<div className="mx-auto pt-10 px-10 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 min-h-screen w-full">
      <Header />
      <div className="grid grid-cols-2 w-full">
        {clientes && (
          <>
            <Formulario
              clientes={clientes}
              setClientes={setClientes}
              cliente={cliente}
              setCliente={setCliente}
            />

            <ListadoClientes
              clientes={clientes}
              setCliente={setCliente}
              eliminarCliente={eliminarCliente}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
