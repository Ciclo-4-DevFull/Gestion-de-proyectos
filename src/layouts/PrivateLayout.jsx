import React from 'react'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'

const PrivateLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className='flex' style={{ minHeight: '80vh', width: '99%' }}>
                <Sidebar />
                <main className='flex w-full justify-center'>{children}</main>
            </div>
            <Footer />
        </div>
    )
}

export default PrivateLayout
