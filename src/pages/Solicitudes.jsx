import React from 'react'
import usuarios from 'datos.json'
import Table from 'react-bootstrap/Table'
import check from 'media/check.png'
import denied from 'media/denied.png'
import Tooltip from '@mui/material/Tooltip';
import { ToastContainer, toast } from 'react-toastify'

const Solicitudes = () => {
    return (
        <div style={{ width: '85%' }}>
            <h4 className='mt-10'>Solicitudes pendientes</h4>
            <Table hover borderless className='my-10'>
                <thead className='bg-blue-100'>
                    <tr>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Identificación</th>
                        <th>Correo electrónico</th>
                        <th>Rol solicitado</th>
                        <th>Respuesta</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => {
                        return (
                            <tr>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.apellido}</td>
                                <td>{usuario.identificacion}</td>
                                <td>{usuario.email}</td>
                                <td>{
                                    usuario.rol === 'estudiante' ? 'Estudiante'
                                        : 'administrador' ? 'Administrador'
                                            : 'Lider'
                                }</td>
                                <td className='flex flex-row justify-around'>
                                    <Tooltip title="Aprobar">
                                        <button onClick={() => { console.log(usuario); toast.success('Operación realizada con éxito') }}>
                                            <img src={check} alt='' className='h-6' />
                                        </button>
                                    </Tooltip>
                                    <Tooltip title="Rechazar">
                                        <button onClick={() => { toast.success('Operación realizada con éxito') }}>
                                            <img src={denied} alt='' className='h-5 pt-0' />
                                        </button>
                                    </Tooltip>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <ToastContainer />
        </div>
    )
}

export default Solicitudes
