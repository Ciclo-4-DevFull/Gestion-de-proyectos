import React from 'react'

const Input = (props) => {
    return (
        <div class="rounded-lg p-10 bg-whit bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-auto">
        <div class="mt-4 text-green-600 text-center">
                <h1 name={props.name} class="text-xl font-bold text-white">{props.h1}</h1>
                <p name={props.name} class="mt-4 text-white">{props.p}</p>
            <button class="mt-8 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">MAS...</button>
        </div>
    </div>
    )
}

export default Input