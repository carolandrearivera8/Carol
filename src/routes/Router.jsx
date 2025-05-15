import { Routes, Route, Navigate } from 'react-router-dom'
import Login from '../components/Login'
import Registro from '../components/Registro'
import Home from '../components/Home'
import Servicios from '../components/Servicios'
import Contacto from '../components/Contacto'
import AcercaDe from '../components/AcercaDe'

function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/home" element={<Home />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/acerca-de" element={<AcercaDe />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default Router