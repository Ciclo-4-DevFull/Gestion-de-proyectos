import React from 'react'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import { useAuth } from 'context/AuthContext'
import { useMutation } from '@apollo/client'
import { useEffect } from 'react'
import { VALIDATE_TOKEN } from 'graphql/auth/mutations'

const PrivateLayout = ({ children }) => {

    const { authToken, setToken, loadingAuth } = useAuth();
    const [validateToken, { data, loading, error }] = useMutation(VALIDATE_TOKEN);

    useEffect(() => {
        validateToken();
    }, [])

    return (
        <div>
            <Header />
            <div className='flex' style={{ minHeight: '66vh', width: '99%' }}>
                <Sidebar />
                <main className='flex w-full justify-center'>{children}</main>
            </div>
            <Footer />
        </div>
    )
}

export default PrivateLayout
