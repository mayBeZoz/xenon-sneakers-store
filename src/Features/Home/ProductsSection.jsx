import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../Product/Product'

const ProductsSection = () => {
    
    const products = useSelector(state => state.shoes.data)
    return (
        <>
            <h2 className='w-full mt-24 text-center uppercase text-6xl font-anton'>see our collections</h2>
            
            <div className='container grid gap-5 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]'>
                {
                    products.map(products => (
                        <Product key={products.id} product={products}/>
                    ))
                }
            </div>
        </>

    )
}

export default ProductsSection