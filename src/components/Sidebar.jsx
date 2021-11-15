import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import foto from 'media/profile.ico'

const Sidebar = () => {

    return (
        <div className='flex flex-col justify-center w-1/4 bg-gray-800 py-0.5 px-3'>
            <Accordion className='my-0.5'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>
                        Gestión de usuarios
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className='flex flex-col items-start'>
                    <Typography>Actualizar información</Typography>
                    <Typography>Solicitudes</Typography>
                </AccordionDetails>            
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>
                        Gestión de proyectos
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className='flex flex-col items-start'>
                    <Typography>Registrar proyecto</Typography>
                    <Typography>Mis proyectos</Typography>
                    <Typography>Buscar proyecto</Typography>
                </AccordionDetails>            
            </Accordion>
        </div>
    )
}

export default Sidebar
