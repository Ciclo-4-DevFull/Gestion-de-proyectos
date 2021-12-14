import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
    return (
        <div className="rounded-lg p-10 mx-3 bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 md:mx-auto">
            <div className="mt-2 text-green-600 text-center">
                <h1 className="text-xl font-bold text-white">{props.nombre}</h1>
                <Link to={props.ruta}>
                    <button onClick={() => { console.log(props.proyecto) }} className="mt-8 py-2 px-8 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">Ingresar</button>
                </Link>
            </div>
        </div>
    )
}

export default Card
