import { useNavigate } from 'react-router-dom'
import './AcercaDe.css'

function AcercaDe() {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/login')
  }

  return (
    <div className="acerca-container">
      <div className="sidebar">
        <h1>Acerca de</h1>
        <nav className="nav-menu">
          <button className="nav-button" onClick={() => navigate('/home')}>Home</button>
          <button className="nav-button" onClick={() => navigate('/servicios')}>Servicios</button>
          <button className="nav-button" onClick={() => navigate('/contacto')}>Contacto</button>
          <button className="nav-button logout" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </nav>
      </div>
      <div className="main-content">
        <h1>Acerca de</h1>
      </div>
    </div>
  )
}

export default AcercaDe