import { useNavigate } from 'react-router-dom'
import './Contacto.css'

function Contacto() {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/login')
  }

  return (
    <div className="contacto-container">
      <div className="sidebar">
        <h1>Contacto</h1>
        <nav className="nav-menu">
          <button className="nav-button" onClick={() => navigate('/home')}>Home</button>
          <button className="nav-button" onClick={() => navigate('/servicios')}>Servicios</button>
          <button className="nav-button" onClick={() => navigate('/acerca-de')}>Acerca de</button>
          <button className="nav-button logout" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </nav>
      </div>
      <div className="main-content">
        <h1>Contacto</h1>
      </div>
    </div>
  )
}

export default Contacto