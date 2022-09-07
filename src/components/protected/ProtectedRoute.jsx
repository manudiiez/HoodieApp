import React from 'react'
import { useAuth } from '../../context/AuthContext'
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'

const ProtectedRoute = ({ children }) => {
  
    const {user, loading} = useAuth()
    const navigate = useNavigate()

    const notSignIn = () => {
        Swal.fire({
            title: 'Permiso denegado',
            text: 'Para acceder a todas las funciones debe iniciar sesion',
            icon: 'warning'
        }).then(() => {
            navigate('/login')
        })
    }

    if (loading) return (

        <div className="d-flex justify-content-center my-5 py-5">
            <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )

    if (!user) return (
        notSignIn()
    )

    return (
        <>{children}</>
    )
}

export default ProtectedRoute