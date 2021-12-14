import { useMutation, useQuery } from '@apollo/client'
import { GET_PROJECTS } from 'graphql/projects/queries'
import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import ReactLoading from 'react-loading'
import expand from 'media/expand.png'
import { Dialog } from '@mui/material'
import { INSCRIPTION } from 'graphql/inscriptions/mutations'
import { useUser } from 'context/UserContext'
import { toast, ToastContainer } from 'react-toastify'
import { CAMBIAR_ESTADO } from 'graphql/projects/mutations'

const BuscaProyectos = () => {

    const { data, loading } = useQuery(GET_PROJECTS);
    const [editarProyecto] = useMutation(CAMBIAR_ESTADO)
    const [open, setOpen] = useState(false)
    const [id, setId] = useState('')
    const { userData } = useUser()

    const cambiarEstado = (proyecto, nuevo) => {

        if (nuevo === 'ACTIVO' & proyecto.fase === 'NULO') {
            editarProyecto({
                variables: {
                    id: proyecto._id,
                    estado: nuevo,
                    fase: "INICIADO",
                    inicio: Date.now()
                }
            })
        } else {
            editarProyecto({
                variables: {
                    id: proyecto._id,
                    estado: nuevo
                }
            })
        }
        toast.success("Proyecto actualizado exitosamente")
        window.location.reload()
    }

    const cambiarFase = (proyecto, nuevo) => {
        nuevo === 'TERMINADO' && editarProyecto({
            variables: {
                id: proyecto._id,
                estado: 'INACTIVO',
                fase: nuevo,
                fin: Date.now()
            }
        })
        toast.success("Proyecto actualizado exitosamente")
        window.location.reload()
    }

    if (loading) return <ReactLoading type={'spokes'} color={'#95CCBB'} heigth={'10%'} width={'10%'} className='py-40' />

    return (
        <div style={{ width: '85%' }}>
            <h4 className='mt-10'>Proyectos disponibles</h4>
            <Table hover borderless className='my-10'>
                <thead className='bg-blue-100'>
                    <tr>
                        <th>Nombre</th>
                        <th>Estado</th>
                        <th>Fase</th>
                        <th>Lider</th>
                        <th>Detalle</th>
                    </tr>
                </thead>
                <tbody>
                    {data.Proyectos.map(proyecto => {
                        return (
                            <tr key={proyecto._id}>
                                <td>{proyecto.nombre}</td>
                                <td>{
                                    userData.rol === 'ADMINISTRADOR' ?
                                        <select defaultValue={proyecto.estado} onChange={(e) => cambiarEstado(proyecto, e.target.value)}>
                                            <option value='ACTIVO'>Activo</option>
                                            <option value='INACTIVO'>Inactivo</option>
                                        </select>
                                        :
                                        proyecto.estado === 'ACTIVO' ? 'Activo' : 'Inactivo'
                                }</td>
                                <td>{
                                    userData.rol === 'ADMINISTRADOR' ?
                                        <select defaultValue={proyecto.fase} onChange={(e) => { cambiarFase(proyecto, e.target.value) }}>
                                            <option value='NULO'> </option>
                                            <option value='INICIADO'>Iniciado</option>
                                            <option value='DESARROLLO'>En desarrollo</option>
                                            <option value='TERMINADO'>Terminado</option>
                                        </select>
                                        :
                                        proyecto.fase === 'NULO' ? 'No iniciado'
                                            : 'INICIADO' ? 'Iniciado'
                                                : 'DESARROLLO' ? 'Desarrollo'
                                                    : 'Terminado'
                                }</td>
                                <td>{`${proyecto.lider.nombre} ${proyecto.lider.apellido}`}</td>
                                <td className=' flex justify-center h-10'>
                                    <button onClick={() => { setOpen(true); setId(proyecto._id) }}>
                                        <img src={expand} alt='' className='h-4' />
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <Detalle open={open} setOpen={setOpen} id={id} estudiante={userData._id} />
            <ToastContainer />
        </div>
    )
}

const Detalle = (props) => {

    const [inscripcion] = useMutation(INSCRIPTION)
    const { data: ProjectData, loading: loadingProject } = useQuery(GET_PROJECTS, {
        variables: {
            id: props.id
        }
    });

    const inscribirse = (id) => {
        inscripcion({
            variables: {
                proyecto: id,
                estudiante: props.estudiante
            }
        })
        toast.success('Se ha inscrito al proyecto exitosamente')
    }

    if (loadingProject) return <></>

    return (
        ProjectData && ProjectData.Proyectos ?
            <Dialog open={props.open}>
                <div className='flex flex-col m-4'>
                    <h5 className='flex justify-center text-green-700'>{ProjectData.Proyectos[0].nombre}</h5>
                    <h6 className='mt-3'>Información general</h6>
                    <div className='flex flex-col p-2 border-1 rounded my-2'>
                        <span>
                            <b>Fecha de inicio: </b> {JSON.stringify(ProjectData.Proyectos[0].inicio).slice(1, 11)}
                        </span>
                        <span>
                            <b>Fecha de finalización: </b> {JSON.stringify(ProjectData.Proyectos[0].fin).slice(1, 11)}
                        </span>
                        <span><b>Objetivos:</b></span>
                        <Table hover borderless className='my-1'>
                            <thead>
                                <tr>
                                    <th>Tipo</th>
                                    <th>Descripción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ProjectData.Proyectos[0].objetivos.map(objetivo => {
                                    return (
                                        <tr>
                                            <td>{
                                                objetivo.tipo === 'GENERAL' ? 'General' : 'Específico'
                                            }</td>
                                            <td>{objetivo.descripcion}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </div>
                    <h6 className='mt-2'>Contacto</h6>
                    <div className='flex flex-col p-2 border-1 rounded my-2'>
                        <span>
                            <b>Lider:</b> {`${ProjectData.Proyectos[0].lider.nombre} ${ProjectData.Proyectos[0].lider.apellido}`}
                        </span>
                        <span>
                            <b>Correo electrónico:</b> {ProjectData.Proyectos[0].lider.correo}
                        </span>
                    </div>
                    <div className='flex flex-row justify-end mt-2'>
                        <button className='mr-2 bg-green-700 rounded px-2 py-1 text-white font-semibold' onClick={() => { inscribirse(ProjectData.Proyectos[0]._id) }}>Inscribirse</button>
                        <button className='mr-1 bg-green-700 rounded px-2 py-1 text-white font-semibold' onClick={() => { props.setOpen(false) }}>Cerrar</button>
                    </div>
                </div>
                <ToastContainer />
            </Dialog>
            : <></>
    )
}

export default BuscaProyectos
