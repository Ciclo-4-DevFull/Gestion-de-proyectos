import React from 'react'
import logo from 'media/github.png'

const Footer = () => {
    return (
        <footer className='flex justify-center pt-3 pb-2 px-5 bg-gray-50'>
            <img src={logo} alt='logo' className='h-6 px-2'/>
            <span className='font-bold'>DevFull 2.0</span>
        </footer>
    )
}

export default Footer
