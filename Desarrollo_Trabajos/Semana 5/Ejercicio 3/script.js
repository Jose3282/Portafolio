const tablaProductos = document.getElementById('tablaProductos');

fetch('productos.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la petición');
    }
    return response.json();
  })
  .then(data => {
    data.forEach(producto => {
      const { foto, nombre, precio, descripcion } = producto;
      const fila = document.createElement('tr');

      const columnaFoto = document.createElement('td');
      const imagen = document.createElement('img');
      imagen.src = foto;
      columnaFoto.appendChild(imagen);
      fila.appendChild(columnaFoto);

      const columnaNombre = document.createElement('td');
      columnaNombre.textContent = nombre;
      fila.appendChild(columnaNombre);

      const columnaPrecio = document.createElement('td');
      columnaPrecio.textContent = precio.toFixed(2);
      fila.appendChild(columnaPrecio);

      const columnaDescripcion = document.createElement('td');
      columnaDescripcion.textContent = descripcion;
      fila.appendChild(columnaDescripcion);

      tablaProductos.querySelector('tbody').appendChild(fila);
    });
  })
  .catch(error => {
    console.error(error);
  });