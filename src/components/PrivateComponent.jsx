import { useUser } from 'context/UserContext'
import React from 'react'

const PrivateComponent = ({ stateList, children }) => {

    const { userData } = useUser()

    if (stateList.includes(userData.estado)) {
        return children
    }

    return <></>
}

export { PrivateComponent };