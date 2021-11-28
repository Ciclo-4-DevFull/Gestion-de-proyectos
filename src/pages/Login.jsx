import React from 'react'
import {Link} from 'react-router-dom'
import google from 'media/google2.png'
import project from 'media/projectmanagement.jpg'

const login = () => {
    return (
        <div style={{height:"66vh"}} className='overflow-hidden relative mx-1'>
            <div >
                <img src={project} alt='imgFondo' style={{position:"absolute",left:"-100%",right:"-100%",top:"-100%",bottom:"-100%",margin:"auto",minHeight:"100%",minWidth:"100%"}}/>
            </div>
            <div style={{background:"gray",borderRadius:"50px" ,opacity:"0.9", width:"400px",height:"400px", position:"relative", top:"20px",left:"450px", margin:"0"}}>
            </div>
            <h2 style={{position:"relative",top:"-370px", left:"550px",color:"white"}}>Iniciar sesión</h2>
            <span style={{position:"relative",color:"white",top:"-390px", left:"500px"}}><b>_____________________________________________</b></span>            
            <form style={{position:"relative",color:"white",top:"-370px", left:"480px"}}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Correo electrónico:</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" style={{width:"300px", height:"30px"}} />
                </div>
                <div className="mb-3" style={{paddingTop: '1vh'}}>
                    <label for="exampleInputPassword1" className="form-label">Contraseña:</label>
                    <input type="password" className="form-control" style={{width:"300px", height:"30px"}}/>
                </div>
                <div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Recuérdame</label>
                    </div>
                    <label style={{color: 'white', textDecoration: 'underline', cursor: 'pointer', paddingBottom:"5px"}}>
                        Olvidé la contraseña
                    </label>
                </div>
                <div>
                    <Link to="/bienvenida">
                        <button type="submit" className="btn btn-primary" style={{marginBottom: '8px', backgroundColor:  '#426E86'}}>
                            Ingresar
                        </button>
                    </Link>
                </div>
            </form>
            <div style={{position:"relative",color:"white",top:"-370px", left:"480px"}}>
                <label>¿No tienes cuenta?</label>
                <Link to="/registro">
                    <label style={{color: 'white', textDecoration: 'underline', cursor:'pointer'}}>
                        Registrarse
                    </label>
                </Link>
            </div>
            <span style={{position:"relative",color:"white",top:"-370px", left:"480px"}}>
                ---------------------<b> o </b>----------------------
            </span>
            <div style={{position:"relative",color:"white",top:"-370px", left:"480px"}}>
                <button type="button" className="btn btn-light">
                    <img src={google} alt="Google" style={{height: '4vh', marginRight: '2vh'}}/>
                    Ingresar con Google
                </button>
            </div>
        </div>
    )
}

export default login
