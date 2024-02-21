import React from 'react'
import Logo from './Logo'
import pages from "../../data/pages"
import { Link } from 'react-router-dom'

const Footer = () => {
    
    const socialsList = {
        facebook: "url",
        linkedin: "url",
        whatsapp: "url",
        email : "url"
    }

    return (
        <footer className='bg-main-black font-jost text-white w-full'>
            <div className="container grid gap-8 grid-cols-[repeat(auto-fit,minmax(225px,1fr))]">

                <Logo/>

                <ul className='w-full flex flex-col'>
                    <h4 className='text-4xl text-main-purple font-bold uppercase mb-2'>socials</h4>
                    {
                        Object.keys(socialsList).map((key,idx) => (
                            <li className='mb-1 text-xl' key={idx}>
                                <Link to={socialsList[key]}>
                                    {key}
                                </Link>
                            </li>
                        ))
                    }
                </ul>

                <ul>
                    <h4 className='text-4xl text-main-purple font-bold uppercase mb-2'>navigate</h4>
                    {
                        pages.map((page,idx) => (
                            <li key={idx} className='mb-1 text-xl'>
                                <Link to={page.href}>
                                    {page.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>

            </div> 
        </footer>
    )
}

export default Footer