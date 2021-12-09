import React from 'react'
import logo from 'media/github.png'
import blockchain from 'media/blockchain.png'


const MisProyectos = () => {
    return (
        <div class="bg-white-100">
            <h1 class="mb-15 text-center text-4xl text-gray-800 font-bold">Mis proyectos</h1>
          <div class="grid gap-4 md:gap-6 grid-cols-3 m-8">

            <div class="rounded-lg p-10 bg-whit bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-auto">
                <div class="mt-4 text-green-600 text-center">
                    <h1 class="text-xl font-bold text-white">Analisis de Datos</h1>
                    <p class="mt-4 text-white">Herramientas adecuadas de Analisis</p>
                    <button class="mt-8 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">MAS...</button>
                </div>
            </div>
      
            <div class="rounded-lg p-10 bg-whit bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-auto">
                <div class="mt-4 text-green-600 text-center">
                  <h1 class="text-xl font-bold text-white">Desarrollo de Software</h1>
                  <p class="mt-4 text-white">Utilizamos metodología SCRUM</p>
                  <button class="mt-8 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">MAS..</button>
                </div>
            </div>
      
            <div class="rounded-lg p-10 bg-whit bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-auto">
                <div class="mt-4 text-green-600 text-center">
                  <h1 class="text-xl font-bold text-white">Analisis de Datos</h1>
                  <p class="mt-4 text-white">Herramientas adecuadas de Analisis</p>
                  <button class="mt-8 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">MAS...</button>
                </div>
            </div>
          </div>
        </div>
    )
}

export default MisProyectos
