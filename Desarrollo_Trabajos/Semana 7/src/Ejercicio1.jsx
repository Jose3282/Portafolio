import  { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AlertComponent = () => {
const [alertColor, setAlertColor] = useState('primary');

useEffect(() => {
    const interval = setInterval(() => {
      // Colores en orden segun la practica
    const colors = ['primary', 'warning', 'danger', 'success', 'secondary'];

      // Obtencion del indice actual
    const currentIndex = colors.indexOf(alertColor);

      // Calculo del proximo color
    const nextIndex = (currentIndex + 1) % colors.length;

      // Establecer el tiempo de cambio
    setAlertColor(colors[nextIndex]);
    }, 3000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(interval);
}, [alertColor]);

return (
    <div className={`alert alert-${alertColor}`} role="alert">
    Este es un mensaje de alerta con el color: {alertColor}
    </div>
);
};

const Ejercicio1 = () => {
return (
    <div className="container">
    <h1>Este es el Ejercicio 1</h1>
    <br></br>
    <AlertComponent />
    </div>
);
};

export default Ejercicio1;
