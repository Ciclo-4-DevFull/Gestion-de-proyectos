import React from 'react'

const RegistroProyecto = () => {
    return (
        <div class="bg-white w-full rounded">
        <h3 class= "text-2xl font-bold leading-7 text-center p-8">NUEVO PROYECTO</h3>
        <div class="md:flex items-center mt-12">
                <div class="w-full md:w-1/2 flex flex-col md:ml-6">
                    <label class="font-semibold leading-none">ID Proyecto</label>
                    <input type="text" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                </div>
                <div class="w-full md:w-1/2 flex flex-col ml-6 mr-6">
                    <label class="font-semibold leading-none">Nombre Proyecto</label>
                    <input type="email" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
                </div>
        </div>
        <div class="md:flex items-center mt-12">
            <div class="w-full flex flex-col mt-8 ml-6 mr-6">
                <label class="font-semibold leading-none">Objetivos Generales</label>
                <textarea type="text" class="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"></textarea>
            </div>
            <div class="w-full flex flex-col mt-8 ml-6 mr-6">
                <label class="font-semibold leading-none">Objetivos Especificos</label>
                <textarea type="text" class="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"></textarea>
            </div>
        </div>
        <div class="flex items-center justify-center w-full">
            <button class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-gray-800 rounded hover:bg-gray-600 transition ease-in duration-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                 Guardar Proyecto
            </button>
        </div>    
   </div>



    )
}

export default RegistroProyecto
