import Footer from 'components/Footer'
import Header from 'components/Header'
import React from 'react'

const PublicLayout = ({ children }) => {
    return (
        <div>
            <Header/>
            <main style={{minHeight: '60vh'}}>{children}</main>
            <Footer/>
        </div>
    )
}

export default PublicLayout
