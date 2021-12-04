import React, { useRef } from 'react'
import Input from 'components/Input'
import { toast, ToastContainer } from 'react-toastify'

const ActualizarInfo = () => {

    const form = useRef();

    const submitform = (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);
        const nuevoUsuario = {};
        fd.forEach((value, key) => {
            nuevoUsuario[key] = value
        });

        if (nuevoUsuario.password === nuevoUsuario.password2) {
            delete nuevoUsuario.password2
            console.log(nuevoUsuario)
            toast.success('Información actualizada exitosamente')
        } else {
            toast.error('Las contraseñas no coinciden')
        }
        form.current.reset();
    }

    return (
        <div className='flex flex-col items-center'>
            <h4 className='my-10'>Actualizar información</h4>
            <form onSubmit={submitform} ref={form}>
                <div className='flex flex-row flex-wrap ml-20'>
                    <Input name='nombre' label='Nombres' type='text' />
                    <Input name='apellido' label='Apellidos' type='text' />
                    <Input name='identificacion' label='Identificación' type='number' />
                    <Input name='correo' label='Correo electrónico' type='email' />
                    <Input name='password' label='Contraseña' type='password' />
                    <Input name='password2' label='Confirmar contraseña' type='password' />
                </div>
                <div className='flex flex-col items-end mr-36'>
                    <button type='submit' className='btn btn-primary p-2 w-36 bg-blue-400 mt-4'>Guardar cambios</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}

export default ActualizarInfo