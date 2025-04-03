import { Navigate, Outlet, useLocation } from "react-router-dom"
import useUser from "../hooks/useUser"

export default function PrivateRoute() {

    const { isLoggedIn } = useUser()
    const location = useLocation()

    if (!isLoggedIn) {
        return <Navigate to="/login" state={{ from: location.pathname }} />
    }

    // outlet refer to the upper component
    return (
        <Outlet />
    )
}
