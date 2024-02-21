import React from 'react'
import { useSelector } from 'react-redux'
import ProductInCart from './ProductInCart'

const ProductsInCartHolder = () => {
    
    const productsIncart = useSelector(state => state.cart.data)

    return (
        <div className='lg:w-3/4 w-full p-2 overflow-scroll flex flex-col gap-3 max-h-screen'>
            {
                productsIncart.map(product => (
                    <ProductInCart product={product} key={product.id}/>
                ))
            }
        </div>
    )
}

export default ProductsInCartHolder