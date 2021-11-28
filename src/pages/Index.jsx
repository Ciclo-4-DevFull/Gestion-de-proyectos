import React from 'react'
import project from 'media/projectmanagement.jpg'
import {Link} from 'react-router-dom'

const Index = () => {

    return (
        <div style={{height:"66vh"}} className='overflow-hidden relative mx-1'>
            <div >
                <img src={project} alt='imgFondo' style={{position:"absolute",left:"-100%",right:"-100%",top:"-100%",bottom:"-100%",margin:"auto",minHeight:"100%",minWidth:"100%"}}/>
            </div>
            <div style={{background:"gray",borderRadius:"50px" ,opacity:"0.9", width:"900px",height:"200px", position:"relative", top:"100px",left:"190px", margin:"0"}}>
            </div>
            <h1 style={{position:"relative",top:"-80px", left:"220px",color:"white"}}>Bienvenido al sistema de gestión de proyectos</h1>
            <span style={{position:"relative",color:"white",top:"-100px", left:"220px"}}><b>_______________________________________________________________________________________________________________________________</b></span>            
            <p style={{position:"relative", color:"white", top:"-90px", left:"290px"}}><b>Todo para que puedas hacer seguimiento, evaluación y estado de tus proyectos académicos</b></p>
            <Link to="/login">
            <div style={{position:"relative",top:"-85px", left:"570px"}}>
                <button type="submit" className="btn btn-primary" style={{backgroundColor:  '#426E86'}}><b>Iniciar sesión</b></button>
            </div>
            </Link>
        </div>

        

    )
}

export default Index
