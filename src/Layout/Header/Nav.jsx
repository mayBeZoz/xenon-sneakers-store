import React from 'react'
import pages from "../../data/pages"
import { Link } from 'react-router-dom'


const Nav = () => {
    

    return (
        
        <div className='flex-1 pr-8'>

            <ul className=' hidden md:flex justify-between w-full'>
                
                {

                    pages.map(page => (
                        <li className=' inline-block text-xl' key={page.name}>
                            <Link to={page.href}>{page.name}</Link>
                        </li>
            
                    ))

                }

            </ul>

        </div>
    
    )
}

export default Nav