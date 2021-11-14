import React from 'react'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'

const PrivateLayout = ({ children }) => {
    return (
        <div>
            <Header/>
                <div style={{display: 'flex'}}>
                    <Sidebar/>   
                    {children}
                </div>
            <Footer/>
        </div>
    )
}

export default PrivateLayout
