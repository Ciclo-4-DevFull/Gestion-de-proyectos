import { React, useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import check from 'media/check.png'
import denied from 'media/denied.png'
import Tooltip from '@mui/material/Tooltip';
import { ToastContainer, toast } from 'react-toastify';
import { useQuery } from '@apollo/client';
import { GET_USUARIOS } from 'graphql/users/queries'
import ReactLoading from 'react-loading';

const Solicitudes = () => {

    const [usuarios, setUsuarios] = useState([])
    const {data, error, loading } = useQuery(GET_USUARIOS)

    const pendientes = (datos) => {
         const usuarios = []
         datos.forEach(usuario => {
             usuario.estado === 'PENDIENTE' && usuarios.push(usuario)
         })
        return usuarios
    }
     
    useEffect(() => {
        if(typeof(data) === 'object'){
            const res = pendientes(data.Usuarios)
            setUsuarios(res)
        
        }
        error && toast.error('error consultando los usuarios')
    }, [data, setUsuarios, error])
    
    if (loading) return <ReactLoading type={'spokes'} color={'#95CCBB'} heigth={'10%'} width={'10%'} className='py-40'/>

    return (
        <div style={{ width: '85%' }}>
            <h4 className='mt-10'>Solicitudes pendientes</h4>
            {usuarios ?
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
                                <tr key={usuario._id}>
                                    <td>{usuario.nombre}</td>
                                    <td>{usuario.apellido}</td>
                                    <td>{usuario.identificacion}</td>
                                    <td>{usuario.correo}</td>
                                    <td>{
                                        usuario.rol === 'ESTUDIANTE' ? 'Estudiante'
                                            : 'ADMINISTRADOR' ? 'Administrador'
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
            :
            <div>No hay solicitudes pendientes</div>}
            <ToastContainer />
        </div>
    )
}

export default Solicitudes;
