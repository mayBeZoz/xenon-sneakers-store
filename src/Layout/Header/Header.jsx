import React, { useEffect, useRef } from 'react'
import Nav from './Nav'
import Logo from './Logo'
import MenuIcon from './MenuIcon'
import { useSelector } from 'react-redux'

const Header = () => {

    const showMenu = useSelector(state => state.showMenu)

    const header = useRef()

    let lastScroll = 0

    window.onscroll = () => {
        
        if (!showMenu) {
            if (lastScroll < scrollY) {
                header.current.style.transform = 'translateY(-100%)'
            }else {
                header.current.style.transform = 'translateY(0%)'
            }
            lastScroll = scrollY
        }else {
            header.current.style.transform = 'translateY(0%)'

        }
    }

    return (
        
        <header ref={header} className='w-full ease-05s fixed font-jost capitalize bg-white top-0 left-0 h-[100px] z-[200]'>
            <div className="container border-b h-full flex justify-between items-center">


                <Logo/>

                <Nav/>

                <MenuIcon/>

            </div>
        </header>
    
    )
}

export default Header