import Footer from 'components/Footer'
import Header from 'components/Header'
import React from 'react'

const PublicLayout = ({ children }) => {
    return (
        <div>
            <Header/>
            <main className='flex w-full justify-center' style={{minHeight: 'calc(100vh - 220px)'}}>{children}</main>
            <Footer/>
        </div>
    )
}

export default PublicLayout
