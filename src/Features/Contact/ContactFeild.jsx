import React from 'react'
import FormInput from "../../ui/FormInput"

const ContactFeild = () => {
    
    return (
        <div className='md:w-1/2 md:h-full min-h-[300px] flex flex-col '>
            <FormInput label={"name"} type={"input"}/>
            <FormInput label={"phone"} type={"input"}/>
            <FormInput label={"message"} type={""}/>
        </div>
    )
}

export default ContactFeild