import React, { useState } from 'react'
import PopUp from "../../ui/PopUp"

const ImagesGallery = ({images}) => {
    
    const [ curImgOrder,setcurImgOrder ] = useState(0)
    const [ showPopUp,setShowPopUp ] = useState(false)



    return (
        <>
        
            <div className='md:w-1/2 gap-3 items-center md:aspect-square flex flex-col'>

                <div onClick={() => setShowPopUp(true)} className=' md:w-full aspect-square flex justify-center items-center rounded-md overflow-hidden h-[320px]'>
                    <img className='h-full w-full object-cover' src={images[curImgOrder]} alt="" />
                </div>


                <div className='h-[100px] bg-gray-100 w-[320px] p-3 flex rounded-lg overflow-scroll'>
                    <div className='h-full w-max gap-6 flex'>
                        {
                            images.map((img,idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setcurImgOrder(idx)}
                                    className={` cursor-pointer  transition border-white ${idx === curImgOrder && "!border-main-purple"} border-2 border-solid h-full aspect-square overflow-hidden rounded-md object-cover`}

                                >
                                    <img src={img} alt="img" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <PopUp showPopUp={showPopUp} hidePopUp={() => setShowPopUp(false)}>
                
                <img src={images[curImgOrder]} alt='img' className='w-4/5 h-2/3 object-contain'/>

            </PopUp>
        </>
    )
}

export default ImagesGallery