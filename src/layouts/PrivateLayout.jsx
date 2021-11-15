import React from 'react'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'

const PrivateLayout = ({ children }) => {
    return (
        <div>
            <Header/>
                <div className='flex' style={{minHeight: '82vh', width: '95%'}}>
                    <Sidebar/>   
                    <main className='flex w-full ml-5'>{children}</main>
                </div>
            <Footer/>
        </div>
    )
}

export default PrivateLayout
