import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import edit from 'media/edit.png'
import plus from 'media/plus.png'
import { Dialog } from '@mui/material'
import { toast, ToastContainer } from 'react-toastify'
import Input from 'components/Input'
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
import { GET_USUARIOS } from 'graphql/users/queries'

const Detalle = () => {

    let params = useParams();
    console.log("params", params)

    const [open, setOpen] = useState(false)
    const [proyectos, setProyectos] = useState([])
    const [lider, setLider] = useState([])
    const [objetivos, setObjetivos] = useState([])
    const [avances, setAvances] = useState([])
    const [inscripciones, setInscripciones] = useState([])
    const [idestudiante, setIdestudiante] = useState([])
    const [usuarios, setUsuarios] = useState([])
    const [userdef, setUserdef] = useState([])

    const { data: queryData, error: queryError, loading: queryLoading } = useQuery(GET_PROJECTS, {
        variables: {
            id: "61b05e0e097ea0203f1ba914"
        }
    })

    const { data: queryData2 } = useQuery(GET_USUARIOS)

    useEffect(() => {
        if (queryData) {
            if (queryData.Proyectos) {
                setProyectos(queryData.Proyectos[0])
                setLider(queryData.Proyectos[0].lider)
                setObjetivos(queryData.Proyectos[0].objetivos)
                setAvances(queryData.Proyectos[0].avances)
                setInscripciones(queryData.Proyectos[0].inscripciones)
                console.log("inscripciones", inscripciones)
                const loque = []
                inscripciones.forEach(student => { loque.push(student.estudiante._id) })
                setIdestudiante(loque)
            }
        }
        queryError && toast.error('error consultando los proyectos')
    }, [queryData, setProyectos, queryError, setIdestudiante, inscripciones])

    useEffect(() => {
        if (queryData2) {
            if (queryData2.Usuarios) {
                setUsuarios(queryData2.Usuarios)
                const userDataFin = []
                idestudiante.forEach(ID => { userDataFin.push(usuarios.find(user => user._id === ID)) })
                setUserdef(userDataFin)
            }
        }
    }, [queryData2, usuarios, idestudiante])

    console.log("dataDef", userdef)

    // Obtener el listado de usuarios que tengan los ID encontrados en los proyectos

    //console.log("dataDef", usuarios)



    if (queryLoading) return <ReactLoading type={'spokes'} color={'#95CCBB'} heigth={'10%'} width={'10%'} className='py-40' />

    console.log("mi estudiante", objetivos)

    return (
        <div>
            <h5 className='mt-8 mb-8 text-center'>Detalle Proyecto</h5>
            <div>
                Ruta dinámica: {params.idproject}
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
                                <li><b>Nombre del proyecto:</b> <div className='flex flex-row'><span>{proyectos.nombre}</span> <button onClick={() => { setOpen(true) }}><img src={edit} alt='' className='h-4 pl-4' /></button></div></li>
                                <li><b>Estado:</b> <div><span>{proyectos.estado}</span></div></li>
                                <li><b>Lider:</b> <div><span></span></div>{lider.nombre} {lider.apellido}</li>
                                <li><b>Fecha inicio:</b> <div><span>{proyectos.inicio}</span></div></li>
                                <li><b>Fecha finalización:</b> <div><span>{proyectos.fin}</span></div></li>
                                <li><b>Presupuesto:</b> <div className='flex flex-row'><span>{proyectos.presupuesto}</span><button onClick={() => { setOpen(true) }}><img src={edit} alt='' className='h-4 pl-4' /></button></div></li>
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
                                        <th width='50%'>Descripción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {objetivos.map((objetivo) => {
                                        return (
                                            <tr>
                                                <td>{objetivo.tipo}</td>
                                                <td>{objetivo.descripcion}</td>
                                                <td>
                                                    <button onClick={() => { setOpen(true) }}>
                                                        <img src={edit} alt='' className='h-4' />
                                                    </button>
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
                                        <th width='35%'>Avance</th>
                                        <th ></th>
                                        <th width='25%'>Observaciones</th>
                                        <th width='5%'></th>
                                        <th width='8%'></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {avances.map((avance) => {
                                        return (
                                            <tr>
                                                <td>{avance.fecha}</td>
                                                <td>{avance.descripcion}</td>
                                                <td>
                                                    <button onClick={() => { setOpen(true) }}>
                                                        <img src={edit} alt='' title='Editar avance' className='h-4' />
                                                    </button>
                                                </td>
                                                <td>{avance.observaciones}</td>
                                                <td>
                                                    <button onClick={() => { setOpen(true) }}>
                                                        <img src={edit} alt='' title='Editar observación' className='h-4' />
                                                    </button>
                                                </td>
                                                <td>
                                                    <button onClick={() => { setOpen(true) }}>
                                                        <img src={plus} alt='' title='Agregar observación' className='h-5' />
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>
                            <hr style={{ border: '15px', display: 'flex' }} />
                            <Descripcion open={open} setOpen={setOpen} />
                            <button className='mr-2 bg-green-700 rounded px-2 py-1 text-white font-semibold'>Nuevo avance</button>
                        </AccordionDetails>
                    </Accordion>
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
                                        <th width='25%'>Fecha ingreso</th>
                                        <th width='35%'>Estudiante</th>
                                        <th width='20%'>Estado</th>
                                        <th width='5%'></th>
                                        <th width='8%'></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>11/12/2021</td>
                                        <td>Simón Suárez</td>
                                        <td>Pendiente</td>
                                        <td>
                                            <button onClick={() => { setOpen(true) }}>
                                                <img src={check} alt='' title='Aprobar' className='h-5' />
                                            </button>
                                        </td>
                                        <td>
                                            <button onClick={() => { setOpen(true) }}>
                                                <img src={denied} alt='' title='No aprobar' className='h-4' />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>12/12/2021</td>
                                        <td>Teresa Machado</td>
                                        <td>Aceptado</td>
                                        <td>
                                            <button onClick={() => { setOpen(true) }}>
                                                <img src={check} alt='' title='Aprobar' className='h-5' />
                                            </button>
                                        </td>
                                        <td>
                                            <button onClick={() => { setOpen(true) }}>
                                                <img src={denied} alt='' title='No aprobar' className='h-4' />
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <hr style={{ border: '15px', display: 'flex' }} />
                            <Descripcion open={open} setOpen={setOpen} />
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

const Descripcion = (props) => {

    return (
        <Dialog open={props.open}>
            <div className='flex flex-col m-4'>
                <h5 className='mt-3 text-center'>Editar campo</h5>
                <Input type="text" name='Descripcion' placeholder="Descripcion" required />
                <div className='flex flex-row justify-end mt-2'>
                    <button className='mr-2 bg-green-700 rounded px-2 py-1 text-white font-semibold' onClick={() => { toast.success('Se ha realizado el cambio exitosamente') }}>Aceptar</button>
                    <button className='mr-1 bg-green-700 rounded px-2 py-1 text-white font-semibold' onClick={() => { props.setOpen(false) }}>Cerrar</button>
                </div>
            </div>
            <ToastContainer />
        </Dialog>
    )
}

export default Detalle
