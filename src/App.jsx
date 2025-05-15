import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Registro from './components/Registro'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default App