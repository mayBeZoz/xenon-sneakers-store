import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <div className='w-full text-5xl font-jost text-white'>
            <Link className='w-fit block' to="/">
                <div className='w-fit relative'>
                    <h1 className='uppercase font-bold'>Xenon</h1>
                    <p className=' text-main-purple left-0 bottom-[-30%] absolute text-4xl font-dancing-script'>Store</p>
                </div>
                <h3 className='text-sm mt-4 font-bold text-white'>best place to buy your sports wear</h3>
            </Link>
        </div>
    )
}

export default Logo