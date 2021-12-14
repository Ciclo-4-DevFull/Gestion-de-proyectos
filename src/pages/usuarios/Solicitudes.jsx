import { React, useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import check from 'media/check.png'
import denied from 'media/denied.png'
import Tooltip from '@mui/material/Tooltip';
import { ToastContainer, toast } from 'react-toastify';
import { useMutation, useQuery } from '@apollo/client';
import { GET_USUARIOS } from 'graphql/users/queries'
import ReactLoading from 'react-loading';
import { EDIT_USUARIO } from 'graphql/users/mutations';
import { ELIMINAR_USUARIO } from 'graphql/users/mutations';

const Solicitudes = () => {

    const [usuarios, setUsuarios] = useState([])
    const { data: queryData, error: queryError, loading: queryLoading } = useQuery(GET_USUARIOS, {
        variables: {
            estado: "PENDIENTE"
        }
    })

    const [editarUsuario] = useMutation(EDIT_USUARIO)
    const [eliminarUsuario] = useMutation(ELIMINAR_USUARIO);

    const aceptar = (usuario) => {
        editarUsuario({
            variables: {
                _id: usuario._id,
                nombre: usuario.nombre,
                apellido: usuario.apellido,
                identificacion: usuario.identificacion,
                correo: usuario.correo,
                rol: usuario.rol,
                estado: "AUTORIZADO"
            }
        })
        toast.success('Operación realizada con éxito')
    }

    const rechazar = (usuario) => {
        editarUsuario({
            variables: {
                _id: usuario._id,
                nombre: usuario.nombre,
                apellido: usuario.apellido,
                identificacion: usuario.identificacion,
                correo: usuario.correo,
                rol: usuario.rol,
                estado: "NO_AUTORIZADO"
            }
        })

        eliminarUsuario({
            variables: { _id: usuario._id }
        })
        toast.success('Operación realiazada con éxito')
    }

    useEffect(() => {
        if (typeof (queryData) === 'object') {
            setUsuarios(queryData.Usuarios)
        }
        queryError && toast.error('error consultando los usuarios')
    }, [queryData, setUsuarios, queryError, usuarios])

    if (queryLoading) return <ReactLoading type={'spokes'} color={'#95CCBB'} heigth={'10%'} width={'10%'} className='py-40' />

    return (
        <div style={{ width: '85%' }}>
            <h4 className='mt-10'>Solicitudes pendientes</h4>
            {usuarios.some(e => e.estado === 'PENDIENTE') ?
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
                                            <button onClick={() => { aceptar(usuario) }}>
                                                <img src={check} alt='' className='h-6' />
                                            </button>
                                        </Tooltip>
                                        <Tooltip title="Rechazar">
                                            <button onClick={() => { rechazar(usuario) }}>
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
                <div className='flex justify-center py-36 font-bold'>No hay solicitudes pendientes</div>}
            <ToastContainer />
        </div>
    )
}

export default Solicitudes;
