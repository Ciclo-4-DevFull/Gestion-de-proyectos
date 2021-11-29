import React from 'react'
import calculator from 'media/calculator.jpg'

const Inicio = () => {
    return (
        <div>
            <div style={{paddingBottom: '40px'}}></div>
                <div className="container-sm">
                    <h3 style={{paddingBottom: '10px', paddingTop: '20px', display: 'flex', justifyContent: 'center'}}>
                    Bienvenido al sistema de gestión de proyectos
                    </h3>
                    <div style={{justifyContent: 'center'}}>
                    <hr style={{border:'15px', display:'flex'}}/>
                </div>
                    <span style={{display: 'flex', justifyContent: 'center'}}>
                    Todo para que puedas hacer seguimiento, evaluación y
                    </span>
                    <span style={{display: 'flex', justifyContent: 'center', paddingBottom: '40px'}}>
                    estado de tus proyectos académicos.
                    </span>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <img src={calculator} style={{height: '200px', borderRadius: '100%'}} alt=""/>
                </div>
            </div> 
        </div>
    )
}

export default Inicio
