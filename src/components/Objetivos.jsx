import React from 'react'

const Objetivos = (props) => {

    return (
        <div className='flex flex-row'>
            <div className='flex flex-col mx-3'>
                <label className='my-2 font-label font-semibold'>Tipo</label>
                <select name={props.sel} defaultValue='1' className='border-1 rounded h-9 w-40'>
                    <option value={1}> </option>
                    <option value='GENERAL'>General</option>
                    <option value='ESPECIFICO'>Específico</option>
                </select>
            </div>
            <div className='flex flex-col'>
                <label className='my-2 font-label font-semibold'>Descripcion</label>
                <input name={props.inp} type='text' className='form-control' />
            </div>
        </div>
    )
}

export default Objetivos
