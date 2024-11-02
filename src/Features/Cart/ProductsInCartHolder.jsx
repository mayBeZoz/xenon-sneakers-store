import React from 'react'
import { useSelector } from 'react-redux'
import ProductInCart from './ProductInCart'

const ProductsInCartHolder = () => {
    
    const productsIncart = useSelector(state => state.cart.data)

    return (
        <div className='lg:w-3/4 w-full gap-3 h-fit lg:h-full'>
            <h2 className='font-jost text-3xl font-bold mb-2'> Your cart</h2>
            <div className='overflow-scroll h-[500px] sm:h-[600px] gap-5 flex flex-col'>
                {
                    productsIncart.length ? productsIncart.map(product => (
                        <ProductInCart product={product} key={product.id}/>
                    )) : <div className='w-full h-[300px] md:h-full flex justify-center items-center'>
                        <p className='text-4xl font-jost font-bold'>no items in cart</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default ProductsInCartHolder