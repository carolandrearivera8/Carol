import { useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/login')
  }

  return (
    <div className="home-container">
      <div className="sidebar">
        <h1>Home</h1>
        <nav className="nav-menu">
          <button className="nav-button" onClick={() => navigate('/servicios')}>Servicios</button>
          <button className="nav-button" onClick={() => navigate('/contacto')}>Contacto</button>
          <button className="nav-button" onClick={() => navigate('/acerca-de')}>Acerca de</button>
          <button className="nav-button logout" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </nav>
      </div>
      <div className="main-content">
        <h1>Home</h1>
      </div>
    </div>
  )
}

export default Home