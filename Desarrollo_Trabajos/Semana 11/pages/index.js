import { useEffect, useState } from 'react';
import axios from 'axios';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoClientes';
import Header from './components/Header';

function Home() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesActualizados);
    delete datos[id];
  };

  useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = async () => {
    try {
      const response = await axios.get('/datos.json');
      const datos = response.data;
      setPacientes(Object.values(datos));
    } catch (error) {
      console.error('Error al cargar los datos:', error);
    }
  };
  return (
    <div className="mx-auto pt-10 px-10 bg-gradient-to-r from-blue-200 to-purple-200 via-blue-100 min-h-screen w-full">
      <Header />
      <div className="grid grid-cols-2 w-full">
        <Formulario 
          pacientes={pacientes} 
          setPacientes={setPacientes} 
          paciente={paciente} 
          setPaciente={setPaciente} 
          />
        <ListadoPacientes 
          pacientes={pacientes} 
          setPaciente={setPaciente} 
          eliminarPaciente={eliminarPaciente} 
          />
      </div>
    </div>
  );
}

export default Home;
