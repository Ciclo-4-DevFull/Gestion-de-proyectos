import React from 'react'
import devfull from 'media/devfull.png'

const Header = () => {
    return (
        <header className='flex flex-row py-3 px-5 bg-gray-50'>
            <img src={devfull} alt='logo' className='h-12' />
            <div className='flex items-center px-80 mx-30'>
                <h5 className='font-bold'>GESTIÓN DE PROYECTOS ACADÉMICOS</h5>
            </div>
        </header>
    )
}

export default Header
