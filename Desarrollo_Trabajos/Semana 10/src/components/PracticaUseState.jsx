import { useState } from 'react';

const PracticaUseState = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [modelo, setModelo] = useState('');
  const [precio, setPrecio] = useState('');
  const [imagen, setImagen] = useState('');
  const [datosCompletos, setDatosCompletos] = useState(false);

  const handleImagenChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagen(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLimpiar = () => {
    setNombre('');
    setDescripcion('');
    setModelo('');
    setPrecio('');
    setImagen('');
    setDatosCompletos(false);
  };

  return (
    <div className="flex justify-start p-8">
      <div className="flex gap-8">
        <div className="max-w-md border-4 border-black p-4">
          <div className="flex flex-col gap-6">
            <label htmlFor="nombre" className="text-lg text-blue-500">
              Nombre del producto
            </label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="border border-gray-300 p-2"
            />

            <label htmlFor="descripcion" className="text-lg text-purple-500">
              Descripción
            </label>
            <input
              type="text"
              id="descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              className="border border-gray-300 p-2"
            />

            <label htmlFor="modelo" className="text-lg text-red-500">
              Modelo
            </label>
            <input
              type="text"
              id="modelo"
              value={modelo}
              onChange={(e) => setModelo(e.target.value)}
              className="border border-gray-300 p-2"
            />

            <label htmlFor="precio" className="text-lg text-green-500">
              Precio
            </label>
            <input
              type="number"
              id="precio"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              className="border border-gray-300 p-2"
            />

            <label htmlFor="imagen" className="text-lg text-yellow-500">
              Imagen (JPG o PNG)
            </label>
            <input
              type="file"
              id="imagen"
              accept=".jpg, .jpeg, .png"
              onChange={handleImagenChange}
              className="border border-gray-300 p-2"
            />

            <div className="flex justify-end mt-4">
              <button
                onClick={() => setDatosCompletos(!datosCompletos)}
                className="mr-2 p-2 bg-green-500 text-white rounded"
              >
                Mostrar
              </button>
              <button
                onClick={handleLimpiar}
                className="p-2 bg-red-500 text-white rounded"
              >
                Limpiar
              </button>
            </div>
          </div>
        </div>

        {datosCompletos && (
          <div className="max-w-md border-4 border-black p-4">
            <h2 className="text-lg">Nombre: {nombre}</h2>
            <h2 className="text-lg">Descripción: {descripcion}</h2>
            <h2 className="text-lg">Modelo: {modelo}</h2>
            <h2 className="text-lg">Precio: {precio}</h2>
            {imagen && (
              <div>
                <h2 className="text-lg">Imagen:</h2>
                <img
                  src={imagen}
                  alt="Imagen seleccionada"
                  className="max-w-sm"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PracticaUseState;