import React from 'react'

const FormInput = ({ label , id , type}) => {
    
    return (
        <div className='flex my-1 flex-col'>
            <label className='text-xl mb-2 ' htmlFor={id}>{label}</label>
            {
                type === "input" ? 
                (
                    <input id={id} className='h-12 p-3 text-xl bg-main-purple bg-opacity-25 focus:bg-opacity-40'/>
                ) 
                    : 
                (
                    <textarea id={id} className=' resize-none p-3 h-[130px] text-xl bg-main-purple bg-opacity-25 focus:bg-opacity-40'/>
                )
            }
        </div>
    )
}

export default FormInput