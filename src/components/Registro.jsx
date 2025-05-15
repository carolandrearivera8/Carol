import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Registro.css'

function Registro() {
  const [formData, setFormData] = useState({
    usuario: '',
    contraseña: '',
    nombre: '',
    correo: ''
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí irá la lógica de registro
    console.log('Datos del formulario:', formData)
    // Después del registro exitoso, redirigir al login
    navigate('/login')
  }

  return (
    <div className="registro-container">
      <form className="registro-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="usuario"
          placeholder="Usuario"
          value={formData.usuario}
          onChange={handleChange}
          className="registro-input"
        />
        <input
          type="password"
          name="contraseña"
          placeholder="Contraseña"
          value={formData.contraseña}
          onChange={handleChange}
          className="registro-input"
        />
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="registro-input"
        />
        <input
          type="email"
          name="correo"
          placeholder="Correo"
          value={formData.correo}
          onChange={handleChange}
          className="registro-input"
        />
        <button type="submit" className="registro-button">
          Registrarse
        </button>
        <a 
          href="#" 
          className="registro-link"
          onClick={(e) => {
            e.preventDefault()
            navigate('/login')
          }}
        >
          ¿Ya tiene una cuenta?
        </a>
      </form>
    </div>
  )
}

export default Registro