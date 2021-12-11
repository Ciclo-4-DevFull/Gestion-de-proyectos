import React from 'react'
import Table from 'react-bootstrap/Table'
import edit from 'media/edit.png'

const Detalle = () => {
    return (
        <div>
            <h4 className='mt-10 text-center'>Detalle Proyecto</h4>
            <hr style={{border:'15px', display:'flex'}}/>
            <ul className="grid grid-cols-3 gap-4">
                <li><b>Nombre del proyecto:</b> <span>Proyecto Nuevo</span></li>
                <li><b>Estado:</b> <span>Activo</span></li>
                <li><b>Fase:</b> <span>Iniciado</span></li>
                <li><b>Lider:</b> <span>Edgardo Cadavid Machado</span></li>
                <li><b>Fecha inicio:</b> <span>10/12/2021</span></li>
                <li><b>Fecha finalización:</b> <span>10/06/2022</span></li>
            </ul>
            <hr style={{border:'15px', display:'flex'}}/>
            <h5 className='mt-10 text-center'>Objetivos</h5>        
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
                            <button>
                                <img src={edit} alt='' className='h-4' />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Específico</td>
                        <td>Generar el objetivo específico 1</td>
                        <td>
                            <button>
                                <img src={edit} alt='' className='h-4' />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </Table>  
        </div>
    )
}

export default Detalle
