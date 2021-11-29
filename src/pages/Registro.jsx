import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import project from 'media/projectmanagement.jpg'

const Registro = () => {
    return (
        <div className='bg-cover' style={{backgroundImage:`url(${project})`}}>
            <div class="flex flex-col sm:justify-center items-center">
                <div class="relative sm:max-w-sm w-full py-3">
                    <div class="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                        <label for="" class="block mt-3 text-sm text-gray-700 text-center font-semibold">
                            <h4>Regístrate</h4>
                        </label>
                        <form method="#" action="#" class="mt-10">
                            <div>
                                <input type="text" placeholder="Nombres" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>
                            </div>
                
                            <div class="mt-7">                
                                <input type="email" placeholder="Correo electronico" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>                           
                            </div>

                            <div class="mt-7">                
                                <input type="text" placeholder="Cédula de ciudadanía" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>                           
                            </div>

                            <div class="mt-7">                
                                <input type="password" placeholder="Contraseña" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>                           
                            </div>

                            <div class="mt-7">                
                                <input type="password" placeholder="Confirmar contraseña" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>                           
                            </div>

                            <div class="mt-7">                
                                <select name="rol" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
                                    <option selected="true" disabled="disabled">Selecciona el rol</option>
                                    <option>Estudiante</option>
                                    <option>Líder</option>
                                    <option>Administrador</option>
                                </select>                           
                            </div>

                            <div class="mt-7">
                                <button onClick={() => { toast.success('Te has registrado éxitosamente') }} class="bg-blue-500 w-full py-2 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                    Registrar
                                </button>
                            </div>
                        </form>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registro
