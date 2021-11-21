import React from 'react'
import logo from 'media/github.png'
import google from 'media/google.png'
import facebook from 'media/facebook.png'
import twitter from 'media/twitter.png'

const Footer = () => {
    return (
        <footer className="footer-1 bg-gray-100 py-1 sm:py-2">
            <div className="container mx-auto px-2 py-1">           
                <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-3 pt-3 sm:mt-12 sm:pt-12 border-t mb-3">
                    <div className="sm:w-full px-0 md:w-1/6">
                        <strong>DEVFULL 2.0</strong>
                    </div>
                    <div className="px-4 sm:w-1/2 md:w-1/4 mt-0 md:mt-0 py-0">
                        <h6 className="font-bold mb-2">Dirección</h6>
                        <address className="not-italic mb-4 text-sm">
                            Medellín - Antioquia
                        </address>
                    </div>
                    <div className="px-4 sm:w-1/2 md:w-1/4 mt-0 md:mt-0">
                        <h6 className="font-bold mb-2">Licencia</h6>
                        <span className="mb-4 text-sm">© 2021 Copyright <strong>Devfull</strong></span>
                        <div></div>
                        <span className="mb-4 text-sm"><em>Gestión de proyectos</em></span>
                    </div>
                    <div className="md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
                        <h6 className="font-bold mb-2 px-7">Contacto</h6>
                        <div className="flex py-2">
                            <img src={logo} alt='logo' className='h-4 px-2'/>
                            <img src={google} alt='google' className='h-4 px-2'/>
                            <img src={facebook} alt='facebook' className='h-4 px-2'/>
                            <img src={twitter} alt='twitter' className='h-4 px-2'/>
                        </div>                        
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
