import React from 'react'
import ContactFeild from '../Features/Contact/ContactFeild'
import ContactInfos from '../Features/Contact/ContactInfos'

const Contact = () => {
    return (
        <section>
            <div className=' w-full md:min-h-[80vh] flex justify-center items-center h-fit container !pt-[100px]'>
                
                <div className='w-full gap-5 h-fit p-4 mt-4 flex md:flex-row flex-col'>

                    <ContactInfos/>
                    <ContactFeild/>

                </div>

            </div>
        </section>
        
    )
}

export default Contact