import React, { useState } from 'react'
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

const Detalle = () => {

    const [open, setOpen] = useState(false)

    return (
        <div>
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
                            <hr style={{border:'15px', display:'flex'}}/>
                            <ul className="grid grid-cols-3 gap-4">
                                <li><b>Nombre del proyecto:</b> <div className='flex flex-row'><span>Proyecto Nuevo </span> <button onClick={() => {setOpen(true)}}><img src={edit} alt='' className='h-4 pl-4' /></button></div></li>
                                <li><b>Estado:</b> <div><span>Activo</span></div></li>
                                <li><b>Lider:</b> <div><span>Edgardo Cadavid Machado</span></div></li>
                                <li><b>Fecha inicio:</b> <div><span>10/12/2021</span></div></li>
                                <li><b>Fecha finalización:</b> <div><span>10/06/2022</span></div></li>
                                <li><b>Presupuesto:</b> <div className='flex flex-row'><span>$50.000 </span><button onClick={() => {setOpen(true)}}><img src={edit} alt='' className='h-4 pl-4'/></button></div></li>
                            </ul>
                            <hr style={{border:'15px', display:'flex'}}/>
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
                            <hr style={{border:'15px', display:'flex'}}/>
                            <Table hover borderless className='my-1 table-auto'>
                                <thead>
                                    <tr>
                                        <th width='30%'>Tipo</th>
                                        <th width='50%'>Descripción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>General</td>
                                        <td>Establecer el objetivo general</td>
                                        <td>
                                            <button onClick={() => {setOpen(true)}}>
                                                <img src={edit} alt='' className='h-4' />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Específico</td>
                                        <td>Generar el objetivo específico 1</td>
                                        <td>
                                            <button onClick={() => {setOpen(true)}}>
                                                <img src={edit} alt='' className='h-4' />
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <hr style={{border:'15px', display:'flex'}}/>
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
                        <hr style={{border:'15px', display:'flex'}}/>
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
                                    <tr>
                                        <td>11/12/2021</td>
                                        <td>Se realizó el primer avance</td>
                                        <td>
                                            <button onClick={() => {setOpen(true)}}>
                                                <img src={edit} alt='' title='Editar avance' className='h-4' />
                                            </button>
                                        </td>
                                        <td>Observación 1</td>
                                        <td>
                                            <button onClick={() => {setOpen(true)}}>
                                                <img src={edit} alt='' title='Editar observación' className='h-4' />
                                            </button>
                                        </td>
                                        <td>
                                            <button onClick={() => {setOpen(true)}}>
                                                <img src={plus} alt='' title='Agregar observación' className='h-5' />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>12/12/2021</td>
                                        <td>Se realizó el segundo avance</td>
                                        <td>
                                            <button onClick={() => {setOpen(true)}}>
                                                <img src={edit} alt='' title='Editar avance' className='h-4' />
                                            </button>
                                        </td>
                                        <td>Observación 2</td>
                                        <td>
                                            <button onClick={() => {setOpen(true)}}>
                                                <img src={edit} alt='' title='Editar observación' className='h-4' />
                                            </button>
                                        </td>
                                        <td>
                                            <button onClick={() => {setOpen(true)}}>
                                                <img src={plus} alt='' title='Agregar observación' className='h-5' />
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <hr style={{border:'15px', display:'flex'}}/>
                            <Descripcion open={open} setOpen={setOpen} />
                            <button className='mr-2 bg-green-700 rounded px-2 py-1 text-white font-semibold'>Nuevo avance</button>
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
                <Input type="text" name='Descripcion' placeholder="Descripcion" required/>
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
