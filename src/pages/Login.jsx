import React from 'react'
import {Link} from 'react-router-dom'
import project from 'media/projectmanagement.jpg'

const login = () => {
    return (
        <div className='bg-cover pt-12' style={{height:"66vh", backgroundImage:`url(${project})`}}>
            <div className='bg-opacity-90 bg-gray-400 w-80 m-auto p-3 rounded-2xl border-gray-500 border-2'>
                <h3 className='text-white text-center'>Iniciar sesión</h3>
                <div className='p-1' style={{ borderTop: "2px solid #fff "}}></div>
                <form className='w-70'>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label text-white">Correo electrónico:</label>
                        <input type="email" className="form-control h-8" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label text-white">Contraseña:</label>
                        <input type="password" className="form-control h-8"/>
                    </div>
                    <div>
                        <Link to="/bienvenida">
                            <button type="submit" className="btn btn-primary p-1 w-20 bg-blue-400 mb-2">
                                Ingresar
                            </button>
                        </Link>
                    </div>
                </form>
                <label className='text-white mr-2'>¿No tienes cuenta?</label>
                <Link to="/registro">
                    <label className='text-white underline cursor-pointer'>
                        Regístrate
                    </label>
                </Link>
            </div>
        </div>
    )
}

export default login
