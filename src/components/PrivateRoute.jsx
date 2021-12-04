import { useUser } from 'context/userContext'
import React from 'react'

const PrivateRoute = ({ roleList, children }) => {

    const { userData } = useUser()

    if (roleList.includes(userData.rol)) {
        return children
    }

    return (
        <div >
            Lo sentimos, usted no está autorizado para acceder a este sitio
        </div>
    )
}

export default PrivateRoute