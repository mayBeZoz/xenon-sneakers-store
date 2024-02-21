import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeShowMenuStatus } from '../../Stores/MenuSlice'

const MenuIcon = () => {
    
    const showMenu =  useSelector(state => state.showMenu)
    const dispatch = useDispatch()

    const showAndHide = () => {
        dispatch(changeShowMenuStatus())
    }

    return (

        <div className='md:hidden flex justify-center items-center rounded-lg h-[40px] aspect-square border-solid border-[3px] cursor-pointer border-main-purple'>

            <div onClick={showAndHide} className='relative h-2/4 w-[70%]'>
                <span className={`w-full ${showMenu && "rotate-[45deg]  top-1/2 translate-y-[-50%]"} transition-all absolute bottom-0 h-[3px] bg-main-purple block`}></span>
                <span className={`w-full ${showMenu && "scale-0"} transition-all absolute h-[3px] bottom-1/2 translate-y-1/2 bg-main-purple block`}></span>
                <span className={`w-full ${showMenu && "rotate-[-45deg] top-1/2 translate-y-[-50%]"} transition-all absolute h-[3px] top-0 bg-main-purple block`}></span>

            </div>

        </div>
    )
}

export default MenuIcon