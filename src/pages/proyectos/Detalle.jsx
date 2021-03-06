import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import edit from 'media/edit.png'
import plus from 'media/plus.png'
import { Dialog } from '@mui/material'
import { toast, ToastContainer } from 'react-toastify'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import check from 'media/check.png'
import denied from 'media/denied.png'
import { GET_PROJECTS } from 'graphql/projects/queries'
import { useMutation, useQuery } from '@apollo/client';
import ReactLoading from 'react-loading';
import { useParams } from 'react-router-dom'
import { APROBAR_INSCRIPCION } from 'graphql/inscriptions/mutations'
import { RECHAZAR_INSCRIPCION } from 'graphql/inscriptions/mutations'
import { EDITAR_PROYECTO } from 'graphql/projects/mutations'
import { EDIT_AVANCE } from 'graphql/projects/mutations'
import { CREATE_AVANCE } from 'graphql/projects/mutations'
import { CREATE_OBSERVACION } from 'graphql/projects/mutations'
import { useUser } from 'context/UserContext'

const Detalle = () => {

    let params = useParams();

    const [open, setOpen] = useState(false)
    const [proyectos, setProyectos] = useState([])
    const [lider, setLider] = useState([])
    const [objetivos, setObjetivos] = useState([])
    const [avances, setAvances] = useState([])
    const [inscripciones, setInscripciones] = useState([])
    const [tipo, setTipo] = useState("")
    const [idobjetivo, setIdobjetivo] = useState("")
    const [idavance, setIdavance] = useState("")
    const { userData } = useUser()

    const { data: queryData, error: queryError, loading: queryLoading } = useQuery(GET_PROJECTS, {
        variables: {
            id: params.idproject
        }
    })


    const [editarInscripcion] = useMutation(APROBAR_INSCRIPCION)
    const [rechazarInscripcion] = useMutation(RECHAZAR_INSCRIPCION)




    const aceptar = (inscripcion) => {
        editarInscripcion({
            variables: {
                id: inscripcion._id,
            }
        })
        toast.success('Operaci??n realizada con ??xito')
    }

    const rechazar = (inscripcion) => {
        rechazarInscripcion({
            variables: {
                id: inscripcion._id,
            }
        })
        toast.success('Operaci??n realizada con ??xito')
    }

    useEffect(() => {
        if (queryData) {
            if (queryData.Proyectos) {
                setProyectos(queryData.Proyectos[0])
                setLider(queryData.Proyectos[0].lider)
                setObjetivos(queryData.Proyectos[0].objetivos)
                setAvances(queryData.Proyectos[0].avances)
                setInscripciones(queryData.Proyectos[0].inscripciones)
            }
        }
        queryError && toast.error('error consultando los proyectos')
    }, [queryData, setProyectos, queryError, inscripciones])

    if (queryLoading) return <ReactLoading type={'spokes'} color={'#95CCBB'} heigth={'10%'} width={'10%'} className='py-40' />
    console.log(avances)
    return (
        <div>
            <ToastContainer />
            <h5 className='mt-8 mb-8 text-center'>Detalle Proyecto</h5>
            <div>
                <div className='mb-8'>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Aspectos generales</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <hr style={{ border: '15px', display: 'flex' }} />
                            <ul className="grid grid-cols-3 gap-4">
                                <li><b>Nombre del proyecto:</b>
                                    <div className='flex flex-row'><span>{proyectos.nombre}</span>
                                        {
                                            userData.rol === 'LIDER' &&
                                            <button onClick={() => { setOpen(true); setTipo("nombre") }}><img src={edit} alt='' className='h-4 pl-4' />
                                            </button>
                                        }
                                    </div>
                                </li>
                                <li><b>Estado:</b><div><span>{proyectos.estado}</span></div></li>
                                <li><b>Lider:</b> <div><span></span></div>{lider.nombre} {lider.apellido}</li>
                                <li><b>Fecha inicio:</b> <div><span>{proyectos.inicio}</span></div></li>
                                <li><b>Fecha finalizaci??n:</b> <div><span>{proyectos.fin}</span></div></li>
                                <li><b>Presupuesto:</b>
                                    <div className='flex flex-row'><span>{proyectos.presupuesto}</span>
                                        {
                                            userData.rol === 'LIDER' &&
                                            <button onClick={() => { setOpen(true); setTipo("presupuesto") }}><img src={edit} alt='' className='h-4 pl-4' /></button>
                                        }
                                    </div>
                                </li>
                            </ul>
                            <hr style={{ border: '15px', display: 'flex' }} />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>Objetivos</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <hr style={{ border: '15px', display: 'flex' }} />
                            <Table hover borderless className='my-1 table-auto'>
                                <thead>
                                    <tr>
                                        <th width='30%'>Tipo</th>
                                        <th width='50%'>Descripci??n</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {objetivos.map((objetivo) => {
                                        return (
                                            <tr>
                                                <td>{objetivo.tipo}</td>
                                                <td>{objetivo.descripcion}</td>
                                                <td>{
                                                    userData.rol === 'LIDER' &&
                                                    <button onClick={() => { setOpen(true); setTipo("objetivo"); setIdobjetivo(objetivo._id) }}>
                                                        <img src={edit} alt='' className='h-4' />
                                                    </button>
                                                }
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>
                            <hr style={{ border: '15px', display: 'flex' }} />
                            <Descripcion open={open} setOpen={setOpen} />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>Avances</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <hr style={{ border: '15px', display: 'flex' }} />
                            <Table hover borderless className='my-1 table-auto'>
                                <thead>
                                    <tr>
                                        <th width='20%'>Fecha</th>
                                        <th width='30%'>Avance</th>
                                        <th width='8%'></th>
                                        <th width='35%'>Observaciones</th>
                                        <th width='8%'></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {avances.map((avance) => {
                                        return (
                                            <tr>
                                                <td>{avance.fecha.slice(0, 10)}</td>
                                                <td>{avance.descripcion}</td>
                                                <td>
                                                    {
                                                        userData.rol === 'ESTUDIANTE' &&
                                                        (<button onClick={() => { setOpen(true); setTipo("avance"); setIdavance(avance._id) }}>
                                                            <img src={edit} alt='' title='Editar avance' className='h-4' />
                                                        </button>)
                                                    }
                                                </td>
                                                <td>{avance.observaciones}</td>
                                                {
                                                    userData.rol === 'LIDER' &&
                                                    (avance.observaciones[0] !== "" ?
                                                        <td>
                                                            <button onClick={() => { setOpen(true); setTipo("editarObservacion"); setIdavance(avance._id) }}>
                                                                <img src={edit} alt='' title='Editar observaci??n' className='h-4' />
                                                            </button>
                                                        </td> :

                                                        <td>
                                                            <button onClick={() => { setOpen(true); setTipo("agregarObservacion"); setIdavance(avance._id) }}>
                                                                <img src={plus} alt='' title='Agregar observaci??n' className='h-5' />
                                                            </button>
                                                        </td>
                                                    )
                                                }
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>
                            <hr style={{ border: '15px', display: 'flex' }} />
                            <Descripcion open={open} setOpen={setOpen} />
                            <button className='mr-2 bg-green-700 rounded px-2 py-1 text-white font-semibold hover:bg-green-600' onClick={() => { setOpen(true); setTipo("nuevoAvance") }}>Nuevo avance</button>
                        </AccordionDetails>
                    </Accordion>
                    {
                        userData.rol === 'LIDER' &&
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>Inscripciones</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <hr style={{ border: '15px', display: 'flex' }} />
                                <Table hover borderless className='my-1 table-auto'>
                                    <thead>
                                        <tr>
                                            <th width='30%'>Fecha ingreso</th>
                                            <th width='25%'>Estudiante</th>
                                            <th width='20%'>Estado</th>
                                            <th width='5%'></th>
                                            <th width='8%'></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {inscripciones.map((inscripcion) => {
                                            return (
                                                <tr>
                                                    <td>{inscripcion.ingreso.slice(0, 10)}</td>
                                                    <td>{inscripcion.estudiante.nombre} {inscripcion.estudiante.apellido}</td>
                                                    <td>{inscripcion.estado}</td>
                                                    <td>
                                                        <button onClick={() => { aceptar(inscripcion) }}>
                                                            <img src={check} alt='' title='Aprobar' className='h-5' />
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button onClick={() => { rechazar(inscripcion) }}>
                                                            <img src={denied} alt='' title='No aprobar' className='h-4' />
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </Table>
                                <hr style={{ border: '15px', display: 'flex' }} />
                            </AccordionDetails>
                        </Accordion>
                    }
                    <Descripcion open={open} setOpen={setOpen} proyecto={proyectos} tipo={tipo} idobjetivo={idobjetivo} idavance={idavance} />
                </div>
            </div>
        </div>
    )
}

const Descripcion = (props) => {

    const [nombre, setNombre] = useState("")
    const [presupuesto, setPresupuesto] = useState(0)
    const [descripcion, setDescripcion] = useState("")
    const [avance, setAvance] = useState("")
    const [nuevoAvance, setNuevoAvance] = useState("")
    const [nuevaObservacion, setNuevaObservacion] = useState("")
    const [editarProyecto] = useMutation(EDITAR_PROYECTO)
    const [editarAvance] = useMutation(EDIT_AVANCE)
    const [crearAvance] = useMutation(CREATE_AVANCE)
    const [crearObservacion] = useMutation(CREATE_OBSERVACION)
    const { userData } = useUser()

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    const modificar = () => {
        console.log(props.tipo)
        if (props.tipo === "nombre") {
            if (nombre === "") {
                setNombre(props.proyecto.nombre)
            }
            editarProyecto({
                variables: {
                    id: props.proyecto._id,
                    nombre: nombre
                }
            })
        } else if (props.tipo === "presupuesto") {
            if (presupuesto === 0) {
                setPresupuesto(props.proyecto.presupuesto)
            }
            editarProyecto({
                variables: {
                    id: props.proyecto._id,
                    presupuesto: parseFloat(presupuesto)
                }
            })
        } else if (props.tipo === "objetivo") {
            var filtro = props.proyecto.objetivos.filter(objetivo => objetivo._id === props.idobjetivo)

            var objmodificado = [{
                tipo: filtro[0].tipo,
                descripcion: descripcion
            }]

            var nofiltro = props.proyecto.objetivos.filter(objetivo => objetivo._id !== props.idobjetivo)

            var miNuevo = []
            for (var i = 0; i < nofiltro.length; i++) {
                miNuevo[i] = { "tipo": nofiltro[i].tipo, "descripcion": nofiltro[i].descripcion }
            }

            if (filtro[0].tipo === "GENERAL") {
                objmodificado = objmodificado.concat(miNuevo)
            } else {
                objmodificado = miNuevo.concat(objmodificado)
            }


            editarProyecto({
                variables: {
                    id: props.proyecto._id,
                    objetivos: objmodificado
                }
            })

        } else if (props.tipo === "avance") {
            var filtroava = props.proyecto.avances.filter(avance => avance._id === props.idavance)
            var avamodificado = [{
                _id: filtroava[0]._id,
                descripcion: avance
            }]
            editarAvance({
                variables: {
                    id: avamodificado[0]._id,
                    descripcion: avamodificado[0].descripcion
                }
            })

        } else if (props.tipo === "nuevoAvance") {
            crearAvance({
                variables: {
                    fecha: Date.now(),
                    descripcion: nuevoAvance,
                    proyecto: props.proyecto._id,
                    creadoPor: userData._id,
                    observaciones: [""]
                }
            })
            sleep(3000).then(r => {
                window.location.reload()
            })

        } else if (props.tipo === "agregarObservacion") {
            crearObservacion({
                variables: {
                    id: props.idavance,
                    observaciones: nuevaObservacion
                }
            })
        } else if (props.tipo === "editarObservacion") {
            crearObservacion({
                variables: {
                    id: props.idavance,
                    observaciones: nuevaObservacion
                }
            })
        }


        toast.success('Operaci??n realizada con ??xito')
    }

    const miFuncion = (e) => {
        props.tipo === "nombre" ?
            setNombre(e)
            : props.tipo === "presupuesto" ? setPresupuesto(e)
                : props.tipo === "objetivo" ? setDescripcion(e)
                    : props.tipo === "avance" ? setAvance(e)
                        : props.tipo === "nuevoAvance" ? setNuevoAvance(e)
                            : setNuevaObservacion(e)
    }

    return (
        <Dialog open={props.open}>
            <div className='flex flex-col m-4'>
                <h5 className='mt-3 text-center'>{props.tipo === "nuevoAvance" ? <>Nuevo avance</> : props.tipo === "agregarObservacion" ? <>Agregar observaci??n</> : <>Editar campo</>}</h5>
                <input className='form-control' onChange={(e) => { miFuncion(e.target.value) }} />
                <div className='flex flex-row justify-end mt-2'>
                    <button className='mr-2 bg-green-700 rounded px-2 py-1 text-white font-semibold' onClick={() => { modificar(props.proyecto) }}>Aceptar</button>
                    <button className='mr-1 bg-green-700 rounded px-2 py-1 text-white font-semibold' onClick={() => { props.setOpen(false) }}>Cerrar</button>
                </div>
            </div>
            <ToastContainer />
        </Dialog>
    )
}

export default Detalle