export default async function handler(req, res) {
  if (req.method === "POST" || req.method === "PATCH") {
    const data = req.body;

    // Leer el archivo productos.json
    let productos = [];
    try {
      const productosData = await readFile("productos.json", "utf-8");
      productos = JSON.parse(productosData);
    } catch (error) {
      console.error("Error al leer el archivo productos.json:", error);
    }

    if (req.method === "POST") {
      // Modo AGREGAR

      // Generar un ID único para el nuevo producto usando UUID
      const id = uuidv4();

      const nuevoProducto = {
        id,
        ...data,
      };

      // Agregar el nuevo producto a la lista de productos
      productos.push(nuevoProducto);
    } else if (req.method === "PATCH") {
      // Modo EDITAR
      const { id } = data;

      // Buscar el producto correspondiente en la lista de productos
      const index = productos.findIndex((producto) => producto.id === id);

      if (index !== -1) {
        const productoActualizado = {
          id,
          ...data,
        };

        // Actualizar el producto en la lista de productos
        productos[index] = productoActualizado;
      }
    }

    // Guardar los datos actualizados en el archivo productos.json
    try {
      await writeFile("productos.json", JSON.stringify(productos, null, 2));
    } catch (error) {
      console.error("Error al guardar los datos en productos.json:", error);
      res.status(500).json({ success: false, error: "Error al guardar los datos" });
      return;
    }

    res.status(200).json({ success: true });
  } else {
    res.status(404).json({ message: "Endpoint no encontrado" });
  }
}