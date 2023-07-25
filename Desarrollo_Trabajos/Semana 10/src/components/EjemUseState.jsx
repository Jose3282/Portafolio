import { useState } from "react"
const EjemUseState = () => {
    const [nombre, setNombre] = useState("Jose");
    const [apellido, setApellido] = useState("Cuicapuza");
    return (
    <div>
        <h2>Nombre: {nombre}</h2>
        <h2>Apellido: {apellido}</h2>
        <button onClick={()=>{
            setNombre("Luis")
            setApellido("Ramos")
        }}>Cambiar</button>
    </div>
    )
}

export default EjemUseState