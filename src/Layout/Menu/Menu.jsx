import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { animations } from '../../animate'
import pages from '../../data/pages'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { changeShowMenuStatus } from '../../Stores/MenuSlice'


const Menu = () => {
    
    const showMenu = useSelector(state => state.showMenu)
    const dispatch = useDispatch()

    const closeMenu = () => {
        dispatch(changeShowMenuStatus())
    }

    return (
        <AnimatePresence>
            {   
                showMenu ? 
                (<motion.div
                    variants={animations}
                    initial="translateXleft"
                    animate="translateX0"
                    transition={{
                        duration:.5,
                        ease:"backInOut"
                    }}
                    exit="translateXleft"
                    className='md:hidden bg-white z-[100] overflow-auto w-full h-screen fixed top-0 pt-[100px] left-0 '
                    key="menu"
                >

                    <ul className='w-full h-full flex flex-col p-[30px]'>
                        {
                            pages.map(page => (
                                <li className='flex-1 flex uppercase items-center w-full text-3xl' key={page.name}>
                                    <Link onClick={closeMenu} to={page.href}>{page.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
    
                </motion.div>) :

                <></>
            }
        </AnimatePresence>
    )
}

export default Menu