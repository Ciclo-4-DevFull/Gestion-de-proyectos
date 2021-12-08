import React, { useRef } from 'react'
import Input from 'components/Input'
import { toast, ToastContainer } from 'react-toastify'
import { useUser } from 'context/UserContext';
import { EDIT_USUARIO } from 'graphql/users/mutations';
import { useMutation } from '@apollo/client';

const ActualizarInfo = () => {

    const form = useRef();
    const { userData } = useUser();
    const [editarUsuario] = useMutation(EDIT_USUARIO)

    const submitform = (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);
        const usuarioEditado = {};
        fd.forEach((value, key) => {
            usuarioEditado[key] = value
        });

        usuarioEditado['estado'] = userData.estado
        usuarioEditado['rol'] = userData.rol
        usuarioEditado['_id'] = userData._id

        if (usuarioEditado.password === usuarioEditado.password2) {
            delete usuarioEditado.password2
            editarUsuario({
                variables: {
                    _id: usuarioEditado._id,
                    nombre: usuarioEditado.nombre,
                    apellido: usuarioEditado.apellido,
                    identificacion: usuarioEditado.identificacion,
                    correo: usuarioEditado.correo,
                    rol: usuarioEditado.rol,
                    estado: "AUTORIZADO"
                }
            })
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