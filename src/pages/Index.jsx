import React from 'react'
import project from 'media/projectmanagement.jpg'

const Index = () => {

    return (
        <div style={{width:"1330px",height:"430px",overflow:"hidden",margin:"10px",position:"relative"}}>
            <div >
                <img src={project} alt='imgFondo' style={{position:"absolute",left:"-100%",right:"-100%",top:"-100%",bottom:"-100%",margin:"auto",minHeight:"100%",minWidth:"100%"}}/>
            </div>
            <div style={{background:"gray",borderRadius:"50px" ,opacity:"0.8", width:"900px",height:"200px", position:"relative", top:"100px",left:"190px", margin:"0"}}>
            </div>
            <h1 style={{position:"relative",top:"-80px", left:"220px",color:"white"}}>Bienvenido al sistema de gestión de proyectos</h1>
            <span style={{position:"relative",color:"white",top:"-100px", left:"220px"}}><b>_______________________________________________________________________________________________________________________________</b></span>            
            <p style={{position:"relative", color:"white", top:"-90px", left:"290px"}}><b>Todo para que puedas hacer seguimiento, evaluación y estado de tus proyectos académicos</b></p>
        </div>

        

    )
}

export default Index