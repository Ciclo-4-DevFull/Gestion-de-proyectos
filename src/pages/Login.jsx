import { React, useRef, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import project from 'media/projectmanagement.jpg'
import { useMutation } from '@apollo/client'
import { LOGIN } from 'graphql/auth/mutations'
import { useAuth } from 'context/AuthContext'
import { ToastContainer, toast } from 'react-toastify'

const Login = () => {

    const [login, { data }] = useMutation(LOGIN);
    const { setToken } = useAuth()
    const history = useHistory();
    const form = useRef();

    const submitform = (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);
        const user = {};
        fd.forEach((value, key) => {
            user[key] = value
        });
        login({
            variables: user
        })
    }

    useEffect(() => {
        if (data) {
            if (data.login.token) {
                setToken(data.login.token);
                history.push('/bienvenida')
            } else if (data.login.error) {
                form.current.reset();
                toast.error("Usuario o contraseña incorrectos")
            }
        }
        console.log(data)
    }, [data, history, setToken])

    return (
        <div className='bg-cover pt-12' style={{ height: "66vh", backgroundImage: `url(${project})` }}>
            <div className='bg-opacity-90 bg-gray-400 w-80 m-auto p-3 rounded-2xl border-gray-500 border-2'>
                <h3 className='text-white text-center'>Iniciar sesión</h3>
                <div className='p-1' style={{ borderTop: "2px solid #fff " }}></div>
                <form className='w-70' onSubmit={submitform} ref={form}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label text-white">Correo electrónico:</label>
                        <input name='correo' type="email" className="form-control h-8" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label text-white">Contraseña:</label>
                        <input name='password' type="password" className="form-control h-8" />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary p-1 w-20 bg-blue-400 mb-2">
                            Ingresar
                        </button>
                    </div>
                </form>
                <label className='text-white mr-2'>¿No tienes cuenta?</label>
                <Link to="/registro">
                    <label className='text-white underline cursor-pointer'>
                        Regístrate
                    </label>
                </Link>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Login;
