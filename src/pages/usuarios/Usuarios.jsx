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
import { useUser } from 'context/UserContext';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Usuarios = () => {

    const [usuarios, setUsuarios] = useState([])
    const { userData } = useUser()
    const { data: queryData, error: queryError, loading: queryLoading } = useQuery(GET_USUARIOS)

    useEffect(() => {
        if (typeof (queryData) === 'object') {
            if (userData.rol === 'ADMINISTRADOR') {
                setUsuarios(queryData.Usuarios)
            } else {
                const filtro = queryData.Usuarios.filter(dato => dato.rol === 'ESTUDIANTE')
                setUsuarios(filtro)
            }
        }
        queryError && toast.error('error consultando los usuarios')
    }, [queryData, setUsuarios, queryError, usuarios, userData.rol])

    if (queryLoading) return <ReactLoading type={'spokes'} color={'#95CCBB'} heigth={'10%'} width={'10%'} className='py-40' />

    return (
        <div style={{ width: '85%' }}>
            <h4 className='mt-10'>Información de usuarios de la plataforma</h4>
            <Accordion className='mt-4 border-1 border-gray-400'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>
                        <div className='font-semibold'>Solicitudes pendientes</div>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className='flex flex-col items-start'>
                    <Typography className='cursor-pointer hover:text-blue-900 py-0.5' style={{ width: '90%' }}>
                        <Pendientes usuarios={usuarios} />
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className='my-2 border-1 border-gray-400'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>
                        <div className='font-semibold'>{
                            userData.rol === 'ADMINISTRADOR' ? 'Usuarios registrados' :
                                'Estudiantes registrados'
                        }</div>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className='flex flex-col items-start'>
                    <Typography className='cursor-pointer hover:text-blue-900 py-0.5' style={{ width: '90%' }}>
                        <Listar usuarios={usuarios} />
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default Usuarios;

const Pendientes = (props) => {

    const [editarUsuario] = useMutation(EDIT_USUARIO)
    const [eliminarUsuario] = useMutation(ELIMINAR_USUARIO);

    const usuarios = props.usuarios.filter(usuario => usuario.estado === 'PENDIENTE')

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

    return (
        <div>
            {
                usuarios.some(e => e.estado === 'PENDIENTE') ?
                    <Table hover borderless>
                        <thead >
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
                    <div className='flex justify-center py-36 font-bold'>No hay solicitudes pendientes</div>
            }
            < ToastContainer />
        </div>

    )
}

const Listar = (props) => {

    return (

        <Table hover borderless >
            <thead>
                <tr>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Identificación</th>
                    <th>Correo electrónico</th>
                    <th>Rol</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                {props.usuarios.map((usuario) => {
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
                            <td>{
                                usuario.estado === 'PENDIENTE' ? 'Pendiente'
                                    : 'AUTORIZADO' ? 'Autorizado'
                                        : 'No autorizado'
                            }</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}