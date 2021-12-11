import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import edit from 'media/edit.png'
import { Dialog } from '@mui/material'
import { toast, ToastContainer } from 'react-toastify'
import Input from 'components/Input'

const Detalle = () => {

    const [open, setOpen] = useState(false)

    return (
        <div>
            <h4 className='mt-10 text-center'>Detalle Proyecto</h4>
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
            <h5 className='mt-6 text-center'>Objetivos</h5>        
            <Table hover className='my-1 table-auto'>
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
            <Descripcion open={open} setOpen={setOpen} />  
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
                    <button className='mr-2 bg-green-700 rounded px-2 py-1 text-white font-semibold' onClick={() => { toast.success('Se ha inscrito al proyecto exitosamente') }}>Aceptar</button>
                    <button className='mr-1 bg-green-700 rounded px-2 py-1 text-white font-semibold' onClick={() => { props.setOpen(false) }}>Cerrar</button>
                </div>
            </div>
            <ToastContainer />
        </Dialog>
    )
}

export default Detalle
