import { AnimatePresence, motion } from 'framer-motion'

import closeIcon from "../Assets/Icons/CloseIcon.svg"

const PopUp = ({msg,actionOnSubmit,showPopUp,hidePopUp}) => {
    


    return (
        <>
            <AnimatePresence>
                {

                    showPopUp && (
                        <motion.div 
                            className='w-full bg-black bg-opacity-50 z-[1000] flex justify-center items-center h-screen fixed top-0 left-0'
                            exit={{opacity:0}}
                            initial={{opacity:0}}
                            animate={{opacity:1,y:0}}
                            transition={{duration:.2}}
                        >
                            <button onClick={hidePopUp} className='absolute top-10 right-10'>
                                <img className='w-[40px] aspect-square object-contain' src={closeIcon} alt="" />
                            </button>

                            
                            <div className=' md:w-[600px] p-12 bg-white rounded-lg w-4/5 h-fit flex flex-col items-center justify-center'>
                                <h4 className='text-center text-2xl font-medium mb-8'>{msg}</h4>
                            
                                <div className='w-full gap-4 flex justify-between'>
                                    <button onClick={actionOnSubmit} className='purple-btn !text-xl'>continue</button>

                                    <button onClick={hidePopUp} className='purple-btn !text-xl'>cancel</button>
                                </div>
                            </div>
                            
                        
                        </motion.div>
                    )

                }
            </AnimatePresence>
        </>
    )
    
    
}

export default PopUp