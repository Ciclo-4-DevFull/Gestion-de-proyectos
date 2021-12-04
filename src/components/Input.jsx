import React from 'react'

const Input = (props) => {
    return (
        <div className='flex flex-column mx-10 my-3'>
            <label name={props.name} className='form-label'>{props.label}</label>
            <input name={props.name} type={props.type} className='form-control' />
        </div>
    )
}

export default Input
