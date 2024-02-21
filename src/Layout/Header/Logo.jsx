import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
    
    return (
        <div className='w-1/4'>
            <Link to="/" className='relative block h-full'>
                <h1 className=' text-4xl font-bold uppercase'>Xenon</h1>
                <p className='text-main-purple font-bold italic absolute font-dancing-script text text-3xl bottom-[-30%] left-0'>Store</p>
            </Link>
        </div>

    )
}

export default Logo