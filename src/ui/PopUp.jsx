import { AnimatePresence, motion } from 'framer-motion'

import closeIcon from "../Assets/Icons/CloseIcon.svg"

const PopUp = ({children,showPopUp,hidePopUp}) => {
    


    return (
        <>
            <AnimatePresence>
                {

                    showPopUp && (
                        <motion.div 
                            className='w-full bg-black bg-opacity-50 z-[1000] flex justify-center items-center h-screen fixed top-0 left-0'
                            exit={{opacity:0,y:-300}}
                            initial={{opacity:0,y:-300}}
                            animate={{opacity:1,y:0}}
                            transition={{duration:.5}}
                        >
                            <button onClick={hidePopUp} className='absolute top-10 right-10'>
                                <img className='w-[40px] aspect-square object-contain' src={closeIcon} alt="" />
                            </button>

                            
                            {
                                children
                            }
                            
                        
                        </motion.div>
                    )

                }
            </AnimatePresence>
        </>
    )
    
    
}

export default PopUp