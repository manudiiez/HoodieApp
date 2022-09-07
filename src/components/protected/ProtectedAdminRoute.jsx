import { useAuth } from '../../context/AuthContext'
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'



const ProtectedAdminRoute = ({children}) => {
    const {user, loading, rol} = useAuth()
    const navigate = useNavigate()

    const notAccess = (text) => {
        Swal.fire({
            title: 'Permiso denegado',
            text: text,
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
        notAccess('Para acceder a todas las funciones debe iniciar sesion')
    )


    if (!rol) return (
        notAccess('Se requieren permisos')
    )

    return (
        <>{children}</>
    )
}

export default ProtectedAdminRoute