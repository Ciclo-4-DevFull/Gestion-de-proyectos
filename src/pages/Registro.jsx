import { React, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import project from 'media/projectmanagement.jpg'

const Registro = () => {

    const form = useRef();

    const submitform = (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);
        const nuevoUsuario = {};
        fd.forEach((value, key) => {
            nuevoUsuario[key] = value
        });
        console.log(nuevoUsuario);
        toast.success('Te has registrado éxitosamente')
    }

    return (
        <div className='bg-cover' style={{ backgroundImage: `url(${project})` }}>
            <div className="flex flex-col sm:justify-center items-center">
                <div className="relative sm:max-w-sm w-full py-3">
                    <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                        <label for="" className="block mt-3 text-sm text-gray-700 text-center font-semibold">
                            <h4>Regístrate</h4>
                        </label>
                        <form method="#" action="#" class="mt-10" onSubmit={submitform} ref={form}>
                            <div>
                                <input name='nombre' type="text" placeholder="Nombres" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 px-3" />
                            </div>

                            <div className="mt-7">
                                <input name='apellido' type="text" placeholder="Apellidos" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 px-3" />
                            </div>

                            <div className="mt-7">
                                <input name='correo' type="email" placeholder="Correo electronico" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 px-3" />
                            </div>

                            <div className="mt-7">
                                <input name='identificacion' type="text" placeholder="Cédula de ciudadanía" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 px-3" />
                            </div>

                            <div className="mt-7">
                                <input name='contraseña' type="password" placeholder="Contraseña" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 px-3" />
                            </div>

                            <div className="mt-7">
                                <select name="rol" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 px-3">
                                    <option selected="true" disabled="disabled">Selecciona el rol</option>
                                    <option value='ESTUDIANTE'>Estudiante</option>
                                    <option value='LIDER'>Líder</option>
                                    <option value='ADMINISTRADOR'>Administrador</option>
                                </select>
                            </div>

                            <div className="mt-7">
                                <button type='submit' className="bg-blue-500 w-full py-2 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
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
