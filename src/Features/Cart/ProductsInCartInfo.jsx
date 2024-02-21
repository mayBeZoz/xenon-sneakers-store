import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PopUp from '../../ui/PopUp'
import { removeAllProducts } from '../../Stores/CartSlice'

const ProductsInCartInfo = () => {
    
    const productsInCart = useSelector(state => state.cart.data)
    const dispatch = useDispatch()

    const totalPrice = productsInCart
    .map(product => product.price * product.quantity)
    .reduce((acc,cur) => acc + cur)

    const productsInfos = productsInCart
    .map(product => ({
        qty:product.quantity,
        name:product.name,
        singlePrice:product.price,
        totalPrice:product.price * product.quantity
    })) 

    const [showPopUp , setShowPopUp] = useState()

    const removeProductsFromCart = () => {
        dispatch(removeAllProducts())
        setShowPopUp(false)
    }

    return (
        <>
            <div className='flex-1 lg:h-[70vh] p-2 rounded-lg h-fit bg-gray-200 max-h-screen overflow-auto'>

                <h3 className='text-3xl font-bold text-main-purple font-jost uppercase'>check out</h3>


                <p className='text-2xl mt-4'>total : {totalPrice}</p>
                
                
                <hr className='h-[2px] my-3 w-2/3 lg:w-full bg-black border-none'/>

                
                <div className='lg:max-h-[60%] bg-gray-100 p-2 mt-4 rounded-md overflow-scroll w-full h-[200px]'>
                    {
            
                        productsInfos.map((prodInfo,idx) => (
                            <div key={idx} className='w-full my-3 text-2xl flex flex-col'>
                                <p className='text-main-purple font-bold'>{prodInfo.name}</p>
                                <div className='p-2 text-xl'>
                                    <p>quantity : {prodInfo.qty}</p>
                                    <p>price : {prodInfo.singlePrice}</p>
                                    <p>total price : {prodInfo.totalPrice}</p>
                                </div>
                            </div>
                        )) 
                    }
                </div>
                
                <div className='w-full mt-4 gap-2 lg:flex-col flex'>
                    <button onClick={()=> setShowPopUp(true)} className='purple-btn flex-1 !text-xl'>remove all</button>
                    <button className='purple-btn flex-1 !text-xl'>check out</button>
                </div>


            </div>
        
            <PopUp showPopUp={showPopUp} hidePopUp={() => setShowPopUp(false)}>
                <div className='lg:w-[60%] p-4 bg-white rounded-lg w-4/5 h-1/2 flex flex-col items-center justify-around'>
                    <h4 className='text-center text-2xl'>are you sure about removing all products from the cart?</h4>
                
                    <div className='w-full gap-4 flex justify-between'>
                        <button onClick={removeProductsFromCart} className='purple-btn !text-xl'>yes</button>

                        <button onClick={()=> setShowPopUp(false)} className='purple-btn !text-xl'>no</button>
                    </div>
                </div>
            </PopUp>

        </>
    )
}



export default ProductsInCartInfo