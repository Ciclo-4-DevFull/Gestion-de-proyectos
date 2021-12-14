import React, { useState, useEffect, useRef } from 'react'
import Input from 'components/Input'
import Objetivos from 'components/Objetivos'
import plus from 'media/plus.png'
import { useUser } from 'context/UserContext'
import { useMutation } from '@apollo/client'
import { CREATE_PROJECT } from 'graphql/projects/mutations'
import { toast, ToastContainer } from 'react-toastify'

const RegistroProyecto = () => {

    const [rel, setRel] = useState(false)
    const [obj, setObj] = useState([{ 'nombre': '', 'presupuesto': 0, 'tipo': '', 'description': '' }])
    const [creacionProyecto] = useMutation(CREATE_PROJECT);
    const { userData } = useUser()
    const form = useRef()

    useEffect(() => {
        setRel(false)
    }, [rel])

    const agregarObjetivo = (e) => {

        e.preventDefault()
        const fd = new FormData(form.current)
        const nuevoObjetivo = {}
        fd.forEach((value, key) => {
            nuevoObjetivo[key] = value
        })

        const nuevoObj = obj
        nuevoObj[nuevoObj.length - 1] = nuevoObjetivo
        nuevoObj.push({ 'tipo': '', 'descripcion': '' })
        setObj(nuevoObj)
        setRel(true)
    }

    const crearProyecto = (e) => {
        e.preventDefault()

        const fd = new FormData(form.current)
        const nuevoObjetivo = {}
        fd.forEach((value, key) => {
            nuevoObjetivo[key] = value
        })

        const nuevoObj = obj
        nuevoObj[nuevoObj.length - 1] = nuevoObjetivo
        setObj(nuevoObj)

        const nombre = obj[0].nombre
        console.log(nombre)
        const presupuesto = obj[0].presupuesto
        obj.forEach(objt => { delete objt.nombre; delete objt.presupuesto })

        creacionProyecto({
            variables: {
                'nombre': nombre,
                'presupuesto': parseFloat(presupuesto),
                lider: userData._id,
                objetivos: obj
            }
        })
        window.location.reload()
        toast.success("Proyecto registrado exitosamente")
    }

    return (
        <div>
            <h3 className="text-2xl font-bold leading-7 text-center p-8">NUEVO PROYECTO</h3>
            <form ref={form} onSubmit={agregarObjetivo}>
                <Input name='nombre' type='text' label='Nombre del proyecto' />
                <Input name='presupuesto' type='number' label='Presupuesto' />
                {
                    obj.map(obj => {
                        return (
                            <div className='flex flex-col'>
                                <div className='flex flex-row items-center mb-2'>
                                    <Objetivos sel='tipo' inp='descripcion' />
                                    <button type='submit'>
                                        <img src={plus} alt='' className='h-8 ml-3' />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
                <div className='flex flex-col items-end my-2'>
                </div>
            </form>
            <div className='flex justify-end mb-3'>
                <button type='submit' onClick={(e) => { crearProyecto(e) }} className='border-1 bg-blue-800 p-2 text-blue-50 font-semibold rounded'>
                    Guardar
                </button>
            </div>
            <ToastContainer />
        </div>
    )
}

export default RegistroProyecto
