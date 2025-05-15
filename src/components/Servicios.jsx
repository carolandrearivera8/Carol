import { useNavigate } from 'react-router-dom'
import './Servicios.css'

function Servicios() {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/login')
  }

  return (
    <div className="servicios-container">
      <div className="sidebar">
        <h1>Servicios</h1>
        <nav className="nav-menu">
          <button className="nav-button" onClick={() => navigate('/home')}>Home</button>
          <button className="nav-button" onClick={() => navigate('/contacto')}>Contacto</button>
          <button className="nav-button" onClick={() => navigate('/acerca-de')}>Acerca de</button>
          <button className="nav-button logout" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </nav>
      </div>
      <div className="main-content">
        <h1>Servicios</h1>
      </div>
    </div>
  )
}

export default Servicios