import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PopUp from '../../ui/PopUp'
import { removeAllProducts } from '../../Stores/CartSlice'

const ProductsInCartInfo = () => {
    
    const productsInCart = useSelector(state => state.cart.data)
    const dispatch = useDispatch()

    const totalPrice = productsInCart.length ? productsInCart
    .map(product => product.price * product.quantity)
    .reduce((acc,cur) => acc + cur) : 0

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
            <div className='flex-1 lg:h-full flex flex-col justify-between p-3 rounded-lg bg-gray-200 max-h-screen overflow-auto'>

                <div>
                    <h3 className='text-3xl font-bold text-main-purple font-jost uppercase'>check out</h3>
                    <p className='text-2xl mt-2 font-medium'>total : {totalPrice}$</p>
                    <hr className='h-[1.5px] my-3 w-2/3 md:w-full bg-black border-none'/>
                </div>
                
                

                
                {
                    productsInCart.length ? (
                        <div className=' bg-gray-100 h-[400px] p-3 mt-4 rounded-md overflow-scroll w-full lg:flex-1'>
                            {
                    
                                productsInfos.map((prodInfo,idx) => (
                                    <div key={idx} className='w-full my-3 flex flex-col'>
                                        <p className='text-main-purple font-bold text-xl'>{prodInfo.name}</p>
                                        <div className='p-2 text-lg font-medium'>
                                            <p>quantity : {prodInfo.qty}</p>
                                            <p>price : {prodInfo.singlePrice}$</p>
                                            <p>total price : {prodInfo.totalPrice}$</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ) : <div className='flex-1 flex my-3 justify-center items-center'>
                        <p className='font-jost text-xl text-center'>no items in cart</p>
                    </div>
                }
                
                <div className='w-full mt-4 gap-2 lg:flex-col flex'>
                    <button onClick={()=> {productsInCart.length&&setShowPopUp(true)}} className='purple-btn flex-1 !text-xl'>remove all</button>
                    <button className='purple-btn flex-1 !text-xl'>check out</button>
                </div>


            </div>
        
            <PopUp msg={"are you sure about removing all products from the cart?"} actionOnSubmit={removeProductsFromCart} showPopUp={showPopUp} hidePopUp={() => setShowPopUp(false)}/>
                
        </>
    )
}



export default ProductsInCartInfo