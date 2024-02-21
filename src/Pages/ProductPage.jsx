import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ImagesGallery from '../Features/ProductPage/ImagesGallery'
import ProductInfos from '../Features/ProductPage/ProductInfos'

const ProductPage = () => {
    
    const { productId } = useParams()
    const products = useSelector(state => state.shoes.data)
    const product = products.find(product => product.id === +productId)

    return (
        <div className={`!pt-[150px] ${!product && "h-screen"} gap-y-24 gap-x-14 md:flex-row flex-col flex container`}>
            {
                product && (
                    <>
                        <ImagesGallery images={product.images}/>
                        <ProductInfos product={product}/>
                    </>
                )
            }
        </div>
    )
    
}

export default ProductPage