import React from 'react'
import FormInput from "../../ui/FormInput"

const ContactFeild = () => {
    
    return (
        <div className='md:w-1/2 md:h-full min-h-[300px] gap-2 justify-between flex flex-col '>
            <FormInput label={"name"} type={"input"}/>
            <FormInput label={"phone"} type={"input"}/>
            <FormInput label={"message"} type={""}/>

            <button className='w-full text-white font-jost capitalize text-xl mt-8 font-semibold p-4 h-[70px] bg-main-purple'>
                submit                
            </button>
        </div>
    )
}

export default ContactFeild