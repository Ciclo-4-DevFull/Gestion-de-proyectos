import { React, useRef, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import project from 'media/projectmanagement.jpg'
import { useMutation } from '@apollo/client'
import { REGISTRO } from 'graphql/auth/mutations'
import { useHistory } from 'react-router-dom'
import { useAuth } from 'context/AuthContext'

const Registro = () => {

    const [registro, { data }] = useMutation(REGISTRO);
    const { setToken } = useAuth();
    const history = useHistory();
    const form = useRef();

    const submitform = (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);
        const nuevoUsuario = {};
        fd.forEach((value, key) => {
            nuevoUsuario[key] = value
        });

        if (!nuevoUsuario.rol) {
            toast.error('Debe seleccionar un rol')
        } else {
            registro({
                variables: nuevoUsuario
            })
            toast.success('Te has registrado éxitosamente')
        }
    }

    useEffect(() => {
        if (data) {
            if (data.registro.token) {
                setToken(data.registro.token);
                history.push('/bienvenida')
            }
        }
    }, [data, history, setToken])

    return (
        <div className='bg-cover' style={{ backgroundImage: `url(${project})` }}>
            <div className="flex flex-col sm:justify-center items-center">
                <div className="relative sm:max-w-sm w-full py-3">
                    <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                        <label htmlFor="" className="block mt-3 text-sm text-gray-700 text-center font-semibold">
                            <h4>Regístrate</h4>
                        </label>
                        <form method="#" action="#" className="mt-10" onSubmit={submitform} ref={form}>
                            <div>
                                <input name='nombre' required type="text" placeholder="Nombres" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 px-3" />
                            </div>

                            <div className="mt-7">
                                <input name='apellido' required type="text" placeholder="Apellidos" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 px-3" />
                            </div>

                            <div className="mt-7">
                                <input name='correo' required type="email" placeholder="Correo electronico" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 px-3" />
                            </div>

                            <div className="mt-7">
                                <input name='identificacion' required type="text" placeholder="Cédula de ciudadanía" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 px-3" />
                            </div>

                            <div className="mt-7">
                                <input name='password' required type="password" placeholder="Contraseña" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 px-3" />
                            </div>

                            <div className="mt-7">
                                <select name="rol" required defaultValue={0} className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 px-3">
                                    <option disabled value={0}>Selecciona el rol</option>
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
