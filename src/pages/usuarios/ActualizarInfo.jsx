import React from 'react'
import Input from 'components/Input'

const ActualizarInfo = () => {
    return (
        <div className='flex flex-col items-center'>
            <h4 className='my-10'>Actualizar información</h4>
            <form>
                <div className='flex flex-row flex-wrap ml-20'>
                    <Input name='nombre' label='Nombres' type='text' />
                    <Input name='apellido' label='Apellidos' type='text' />
                    <Input name='identificacion' label='Identificación' type='number' />
                    <Input name='correo' label='Correo electrónico' type='email' />
                    <Input name='password' label='Contraseña' type='password' />
                    <Input name='password2' label='Confirmar contraseña' type='password' />
                </div>
                <button className='btn btn-primary p-1 w-20 bg-blue-400 mt-4 ml-32'>Guardar</button>
            </form>
        </div>
    )
}

export default ActualizarInfo