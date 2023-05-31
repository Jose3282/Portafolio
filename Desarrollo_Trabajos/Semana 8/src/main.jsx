import React from 'react'
import ReactDOM from 'react-dom/client'
import Alarma_1 from './Alarma_1.jsx'
import Ejercicio_1 from './Ejercicio_1.jsx'
import Circulocolor_1 from './Circulocolor_1.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Ejercicio_1 />
    <Circulocolor_1 />
    <Alarma_1 />
  </React.StrictMode>,
)
