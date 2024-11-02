import React from 'react'
import ProductsInCartHolder from '../Features/Cart/ProductsInCartHolder'
import ProductsInCartInfo from '../Features/Cart/ProductsInCartInfo'

const Cart = () => {

    return <div className='container lg:h-screen !pt-[160px] gap-3 lg:flex-row flex-col flex'>
        <ProductsInCartHolder/>
        <ProductsInCartInfo/>
    </div>
        
}

export default Cart