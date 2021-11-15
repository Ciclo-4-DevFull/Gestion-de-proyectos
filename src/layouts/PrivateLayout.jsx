import React from 'react'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'

const PrivateLayout = ({ children }) => {
    return (
        <div>
            <Header/>
                <div className='flex w-screen' style={{height: '90vh'}}>
                    <Sidebar/>   
                    <main className='flex w-full'>{children}</main>
                </div>
            <Footer/>
        </div>
    )
}

export default PrivateLayout
