import { useUser } from 'context/UserContext'
import React from 'react'

const PrivateRoute = ({ roleList, children }) => {

    const { userData } = useUser()

    if (roleList.includes(userData.rol)) {
        return children
    }

    return (
        <div className='flex font-semibold items-center'>
            Lo sentimos, usted no está autorizado para acceder a este sitio
        </div>
    )
}

export default PrivateRoute