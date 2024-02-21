import React from 'react'
import ProductsInCartHolder from '../Features/Cart/ProductsInCartHolder'
import ProductsInCartInfo from '../Features/Cart/ProductsInCartInfo'
import { useSelector } from 'react-redux'

const Cart = () => {
    
    const productsInCart = useSelector(state => state.cart.data)

    return productsInCart.length ? (
            <div className='container h-screen !pt-[130px] gap-3 lg:flex-row flex-col flex'>
                <ProductsInCartHolder/>
                <ProductsInCartInfo/>
            </div>
        ) : (
            <div className='h-screen w-full flex items-center justify-center'>
                <div className='flex'>
                    <h4 className='text-3xl text-center'>no items in cart to show</h4>
                </div>
            </div>
        )
}

export default Cart