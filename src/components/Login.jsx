import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {
  const [usuario, setUsuario] = useState('')
  const [contraseña, setContraseña] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí irá la lógica de autenticación
    console.log('Usuario:', usuario, 'Contraseña:', contraseña)
    // Redirigir al home después del login exitoso
    navigate('/home')
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
          className="login-input"
        />
        <button type="submit" className="login-button">
          Iniciar Sesión
        </button>
        <a 
          href="#" 
          className="login-link" 
          onClick={(e) => {
            e.preventDefault()
            navigate('/registro')
          }}
        >
          ¿No tiene una cuenta?
        </a>
      </form>
    </div>
  )
}

export default Login