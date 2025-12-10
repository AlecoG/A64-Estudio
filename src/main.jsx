import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // Importa tu componente de la barbería
import './index.css' // Importa los estilos de Tailwind

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)