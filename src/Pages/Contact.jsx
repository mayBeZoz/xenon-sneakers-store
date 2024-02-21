import React from 'react'
import ContactFeild from '../Features/Contact/ContactFeild'
import ContactInfos from '../Features/Contact/ContactInfos'

const Contact = () => {
    return (
        <div className='bg-main-purple bg-opacity-30'>
            <div className=' w-full md:h-screen flex justify-center items-center h-fit container !pt-[100px]'>
                
                <div className='w-full gap-5 h-fit bg-white md:h-[60vh] p-4 mt-4 flex md:flex-row flex-col'>

                    <ContactInfos/>
                    <ContactFeild/>

                </div>

            </div>
        </div>
        
    )
}

export default Contact