import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../Features/Product/Product'

const Women = () => {
    
    const products = useSelector(state => state.shoes.data)
    const womenProducts = products.filter(product => product.category === "women")

    return (
        <div className='container min-h-screen !pt-[150px]'>
            <h2 className=' text-center text-5xl font-bold font-anton mb-16'>womens wear</h2>
            <div className=" grid gap-5 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
                {
                    womenProducts.map(product => <Product product={product} key={product.id}/>)
                }
            </div>
        </div>

    )
}

export default Women