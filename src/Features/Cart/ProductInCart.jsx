import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { decProductQty, incProductQty, removeProduct } from '../../Stores/CartSlice'

const ProductInCart = ({product}) => {
    
    const dispatch = useDispatch()

    const removeFromCart = () => {
        dispatch(removeProduct(product))
    }

    const incQty = () => {
        dispatch(incProductQty(product))
    }

    const decQty = () => {
        dispatch(decProductQty(product))
    }

    return (
        <div className='w-full flex-col items-center sm:flex-row rounded-lg p-2 bg-gray-100 sm:h-[130px] gap-7 flex'>
            
            <Link to={`/${product.category}/${product.id}`} className='h-[100px] sm:h-full aspect-square'>
                <img className='w-full h-full object-cover' src={product.images[0]} alt="img" />
            </Link>

            <div className='sm:h-full w-full sm:w-1/4 flex flex-col justify-center'>
                <Link to={`/${product.category}/${product.id}`} className='text-xl font-bold text-main-purple'>{product.name}</Link>
                <p className=' truncate'>{product.description}</p>
            </div>

            <div className='flex justify-between w-full sm:w-1/4'>
                
                <button onClick={incQty} className='!w-1/4 purple-btn !text-xl'>+</button>
                <div className='text-2xl flex justify-center items-center'>{product.quantity}</div>
                <button onClick={decQty} className='!w-1/4 purple-btn !text-xl'>-</button>

            </div>

            <button onClick={removeFromCart} className='purple-btn !w-full sm:!w-1/4 !text-xl'>remove</button>

        </div>
    )
}

export default ProductInCart