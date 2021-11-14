import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Sidebar = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column',
         width: '35vh', height: '90vh', padding: '2px 1vh', margin: '2px', borderRight: '1px solid black',
         backgroundColor: '#292A2F'}}>
            <Accordion style={{marginBottom: '0.3vh'}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>
                        Gestión de usuarios
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
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
                <AccordionDetails style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                    <Typography>Registrar proyecto</Typography>
                    <Typography>Mis proyectos</Typography>
                    <Typography>Buscar proyecto</Typography>
                </AccordionDetails>            
            </Accordion>
        </div>
    )
}

export default Sidebar
