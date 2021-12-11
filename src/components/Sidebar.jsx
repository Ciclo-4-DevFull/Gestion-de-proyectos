import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import foto from 'media/profile.png'
import menu from 'media/menu.ico'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useAuth } from 'context/AuthContext';

const Sidebar = () => {

    const [barra, setBarra] = useState(true);

    if (barra) {
        return (<Opciones barra={barra} setBarra={setBarra} />)
    } else {
        return (<Reducido barra={barra} setBarra={setBarra} />)
    }
}

const Opciones = ({ barra, setBarra }) => {

    const { setToken } = useAuth();

    return (
        <div className='flex flex-col w-1/4 bg-gray-800 py-0.5 px-3 rounded-r'>
            <button className='my-3' onClick={() => { setBarra(!barra) }}>
                <img src={menu} alt='' className='object-none' />
            </button>
            <div className='flex justify-center my-4'>
                <img src={foto} alt='Foto' className='h-14 w-14 mt-0' />
            </div>
            <span className='flex justify-center mb-7 text-gray-50'>Bienvenido/a</span>
            <Accordion className='my-0.5'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>
                        <span className='font-semibold'>Gestión de usuarios</span>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className='flex flex-col items-start'>
                    <Link to='/usuarios' className='no-underline text-gray-800' >
                        <Typography className='cursor-pointer hover:text-blue-900 py-0.5'>Usuarios</Typography>
                    </Link>
                    <Link to='/actualizar-info' className='no-underline text-gray-800'>
                        <Typography className='cursor-pointer hover:text-blue-900 py-0.5'>Actualizar información</Typography>
                    </Link>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>
                        <span className='font-semibold'>Gestión de proyectos</span>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className='flex flex-col items-start'>
                    <Link to='/registro-proyecto' className='no-underline text-gray-800'>
                        <Typography className='cursor-pointer hover:text-blue-900 py-0.5'>Registrar proyecto</Typography>
                    </Link>
                    <Link to='/mis-proyectos' className='no-underline text-gray-800'>
                        <Typography className='cursor-pointer hover:text-blue-900 py-0.5'>Mis proyectos</Typography>
                    </Link>
                    <Link to='/busca-proyecto' className='no-underline text-gray-800'>
                        <Typography className='cursor-pointer hover:text-blue-900 py-0.5'>Buscar proyecto</Typography>
                    </Link>
                </AccordionDetails>
            </Accordion>
            <Link to='/' className='flex justify-center no-underline'>
                <button className='mt-8 text-gray-50' onClick={() => { setToken(null) }}>Cerrar sesión</button>
            </Link>
        </div>
    )
}

const Reducido = ({ barra, setBarra }) => {
    return (
        <div className='flex flex-col w-14 bg-gray-800 py-0.5 px-3 rounded-r' onClick={() => { setBarra(!barra) }}>
            <button className='my-3'>
                <img src={menu} alt='' className='object-none' />
            </button>
        </div>
    )
}

export default Sidebar
