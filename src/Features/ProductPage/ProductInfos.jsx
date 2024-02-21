import React from 'react'
import getProductDiscountPercent from '../../utils/getProductDiscountPercent'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, decProductQty, incProductQty, removeProduct } from '../../Stores/CartSlice'



const ProductInfos = ({product}) => {

    const productsInCart = useSelector(state => state.cart.data)
    const productFromCart = productsInCart.find(prod => prod.id === product.id)
    const isProductInCart = Boolean(productFromCart)
    const dispatch = useDispatch()


    const addProductToCart = () => {
        dispatch(addProduct(product))
    }
    const removeProductFromCart = () => {
        dispatch(removeProduct(product))
    }
    const incQty = () => {
        dispatch(incProductQty(product))
    }
    const decQty = () => {
        dispatch(decProductQty(product))
    }

    const productInCartControls =  (
        <div className='w-full gap-4 my-6 flex flex-col'>

            <div className='w-full  flex justify-between items-center'>
                <button onClick={incQty} className='purple-btn !w-1/4'>+</button>

                <div className='w-1/3 text-3xl flex justify-center items-center'>
                    {
                        productFromCart && productFromCart.quantity
                    }
                </div>

                <button onClick={decQty} className='purple-btn !w-1/4'>-</button>
            </div>

            <button onClick={removeProductFromCart} className='purple-btn'>
                remove from cart
            </button>
        </div>
    )

    const productNotInCartControls =  (
        <div className='w-full my-6'>
            <button onClick={addProductToCart} className='purple-btn'>
                add to cart
            </button>
        </div>
    )
    
    return (
        <div className='md:w-1/2 w-full md:aspect-square font-jost flex flex-col'>
            
            <h4 className='text-main-purple font-bold  text-xl'>{product.company}</h4>
            <h3 className='font-bold text-5xl uppercase mb-2'>{product.name}</h3>
            <p className='text-md mb-6'>{product.description}</p>

            <div className='flex items-center'>
                <strong className='text-4xl'>${product.price}</strong>
                {
                    product.discount &&
                    <p className='ml-4 line-through text-3xl font-bold text-gray-500'>
                        {product.oldPrice}
                    </p> 
                }
            </div>
                
                
            {
                product.discount &&
                <p className='w-fit bg-main-purple my-4 bg-opacity-70 rounded-md text-white p-3 text-2xl'>
                    {getProductDiscountPercent(product)} off
                </p> 
            }
                
           
                
            
            {
                isProductInCart ? productInCartControls : productNotInCartControls
            }

        </div>
    )
}

export default ProductInfos