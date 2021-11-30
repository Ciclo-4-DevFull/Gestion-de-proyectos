import { useEffect, React } from 'react'
import { useAuth } from 'context/AuthContext'
import { useMutation } from '@apollo/client'
import { REFRESH_TOKEN } from 'graphql/auth/mutations'
import Sidebar from 'components/Sidebar'
import Footer from 'components/Footer'
import Header from 'components/Header'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import { PrivateComponent } from 'components/PrivateComponent'

const PrivateLayout = ({ children }) => {

    const { authToken, setToken } = useAuth();
    const [validateToken, { data, loading, error }] = useMutation(REFRESH_TOKEN);
    const [loadingAuth, setLoadingAuth] = useState(true)
    const history = useHistory();

    useEffect(() => {
        validateToken();
    }, [])

    useEffect(() => {
        if (data) {
            if (data.refreshToken.token) {
                setToken(data.refreshToken.token);
            } else {
                setToken(null);
            }
            setLoadingAuth(false)
        }
    }, [data])

    if (loading || loadingAuth) return <div>Cargando...</div>
    if (!authToken) {
        history.push('/login')
    }

    return (
        <div>
            <Header />
            <div className='flex' style={{ minHeight: '66vh', width: '99%' }}>
                <PrivateComponent stateList={['AUTORIZADO']}>
                    <Sidebar />
                    <main className='flex w-full justify-center'>{children}</main>
                </PrivateComponent>
            </div>
            <Footer />
        </div>
    )
}

export default PrivateLayout
