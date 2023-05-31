import React from 'react'
import ReactDOM from 'react-dom/client'
import Ejercicio1 from './Ejercicio1.jsx'
import Ejer2Padre from './Ejer2Padre';
import Ejercicio_3 from './Ejercicio_3.jsx';
import Ejercicio_4 from './Ejercicio_4.jsx';
import Ejercicio_5 from './Ejercicio_5.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Ejercicio1 />
    <Ejer2Padre />
    <Ejercicio_3 />
    <Ejercicio_4 />
    <Ejercicio_5 />
  </React.StrictMode>,
)
