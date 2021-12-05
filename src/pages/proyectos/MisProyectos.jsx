import React from 'react'
import logo from 'media/github.png'
import blockchain from 'media/blockchain.png'


const MisProyectos = () => {
    return (
        // <!-- Section Hero -->
     <div class="bg-white-100 py-14">
        <h1 class="mt-8 text-center text-5xl text-green-600 font-bold">Mis proyectos</h1>
      
        <div class="flex flex-row justify-center md:space-x-0 md:px-14 gap-6 md:w-full">

            <div class="m-8 py-4 px-4 bg-whit w-72 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
              <div class="w-sm">
                <img class="w-64" src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a17abde8d83650a582a28432/users-with-speech-bubbles-vector_53876-82250.jpg" alt="" />
                <div class="mt-4 text-green-600 text-center">
                  <h1 class="text-xl font-bold text-white">Forestal</h1>
                  <p class="mt-4 text-white">Grupo liderado por Juan</p>
                  <button class="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">MAS..</button>
                </div>
              </div>
            </div>
      
            <div class="mt-8 py-4 px-4 bg-whit w-72 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
              <div class="w-sm">
                <img class="w-64" src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/3b242447f922540fbe750cab/fdf.jpg" alt="" />
                <div class="mt-4 text-green-600 text-center">
                  <h1 class="text-xl font-bold text-white">Desarrollo de Software</h1>
                  <p class="mt-4 text-white">Utilizamos metodología SCRUM</p>
                  <button class="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">MAS..</button>
                </div>
              </div>
            </div>
      
            <div class="mt-8 py-4 px-4 bg-whit w-72 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
              <div class="w-sm">
                <img class="w-64" src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/8cc47b39e719570b996d9879/dsds.jpg" alt="" />
                <div class="mt-4 text-green-600 text-center">
                  <h1 class="text-xl font-bold text-white">Analisis de Datos</h1>
                  <p class="mt-4 text-white">Herramientas adecuadas de Analisis</p>
                  <button class="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">MAS...</button>
                </div>
              </div>
            </div>
        </div>
    </div>
    )
}

export default MisProyectos
