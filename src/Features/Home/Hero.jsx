import React from 'react'
import homePageImage from "../../Assets/Images/homePageImage.png"
import { motion } from 'framer-motion'
import  { animations } from '../../animate'


const Hero = () => {
    
    const heroText = "Step into the World of Sneakers. Your One-Stop Destination for Premium Footwear Excellence!"

    const animeText = animations.FromBottomWithOpacity

    return (
        
        <div className='container !pt-[150px] gap-2 min-h-screen w-full flex md:flex-row flex-col'>

            <div className='flex-1 justify-center flex flex-col'>

                <h2 className='text-5xl capitalize font-jost'>
                    {
                        heroText.split(" ").map((word,idx) => (
                            <motion.span
                                className='inline-block mx-1'
                                key={idx}
                                transition={{delay:idx * .2, duration:.4}}
                                initial={animeText["0"]}
                                animate={animeText['100']}

                            >
                                {word}
                            </motion.span>
                        ))
                    }
                </h2>

                <motion.h3 
                    className=' text-gray-500 mt-2'
                    initial={animeText["0"]}
                    animate={animeText['100']}
                    transition={{delay:.2, duration:.4}}
                >
                    explore our new sports wear collections!!
                </motion.h3>

                <button className='w-fit mt-2 font-anton bg-main-purple p-3 text-3xl rounded-md text-white capitalize'>shop now</button>
            </div>

            <div className=' mx-auto md:w-2/5 w-3/5 flex items-center justify-center'>
                <img  className='w-full object-contain aspect-square' src={homePageImage} alt="" />
            </div>

        </div>
    )
}

export default Hero