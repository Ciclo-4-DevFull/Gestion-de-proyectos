import React from 'react'
import project from 'media/projectmanagement.jpg'

// Alinear a la izquierda y que se corran solas 3 imágenes, Descripción al lado izquierdo con el botón
// de inicio de sesión 

const Index = () => {
    return (
        <div>
            <img src={project} alt='project' width='500px' style={{display:"block", margin:"auto", paddingTop:"50px"}}/>
        </div>

    )
}

export default Index
