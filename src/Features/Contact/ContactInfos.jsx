import React from 'react'
import mailIcon from "../../Assets/Icons/Mail.svg"
import locationIcon from "../../Assets/Icons/Location.svg"
import phoneIcon from "../../Assets/Icons/Phone.svg"
import mapImg from "../../Assets/Images/map.png"

const ContactInfos = () => {
    
    return (
        <div className=' md:w-1/2 text-main-black md:h-full gap-2 p-2 justify-between min-h-[300px] flex flex-col'>
            <div className="flex my-2 items-center text-xl">
                <span>
                    <img className='w-6 mr-2 aspect-square object-contain' src={mailIcon} alt="" />
                </span>
                <span>dummyemail@dummy.dum</span>
            </div>

            <div className="flex my-2 items-center text-xl">
                <span>
                    <img className='w-6 mr-2 aspect-square object-contain' src={phoneIcon} alt="" />
                </span>
                <span>012-345-678-999</span>
            </div>

            <div className="flex my-2 items-center text-xl">
                <span>
                    <img className='w-6 mr-2 aspect-square object-contain' src={locationIcon} alt="" />
                </span>
                <span>egypt ,cairo </span>
            </div>

            <img className='w-full mt-2 flex-1 md:h-full object-contain' src={mapImg} alt="img" />
            
        </div>
    )
}

export default ContactInfos