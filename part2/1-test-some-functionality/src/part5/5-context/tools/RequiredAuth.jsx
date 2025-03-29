import { Navigate, useLocation } from "react-router-dom"
import useUser from "../hooks/useUser"

export default function RequiredAuth({ childern, component }) {

    const { isLoggedIn } = useUser()
    const location = useLocation()
    
    if (!isLoggedIn) {
        return <Navigate to="/login" state={{ from: location.pathname }} />
    }

    return (
        childern || component
    )
}
