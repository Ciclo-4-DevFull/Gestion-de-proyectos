import { useUser } from 'context/UserContext'
import React from 'react'

const FunctionComponent = ({ roleList, children }) => {

    const { userData } = useUser()

    if (roleList.includes(userData.rol)) {
        return children
    }

    return <></>
}

export { FunctionComponent };