import { Link } from 'react-router-dom'
import "./Product.css"
import getProductDiscountPercent from '../../utils/getProductDiscountPercent'
import getProductStarsRate from '../../utils/getProductStarsRate'
import { useSelector } from 'react-redux'

const Product = ({product}) => {
    
    const productsInCart = useSelector(state => state.cart.data)
    const productFromCart = productsInCart.find(prod => prod.id === product.id)
    const isProductInCart = Boolean(productFromCart)

  

    return (
        <Link
            to={`/${product.category.toLowerCase()}/${product.id}`}
            className={`flex product w-full flex-col`}
        >
            
            <div className={`aspect-square  border-transparent ${isProductInCart && "!border-main-purple"} border-2 border-solid rounded-lg overflow-hidden w-full mb-2 relative`}>
                <img src={product.images[0]} className='w-full block aspect-square rounded-md object-cover' alt="img" />
                {
                    product.discount && (
                        <span className='absolute bg-opacity-90 top-3 left-3 drop-shadow rounded-md p-1 text-md bg-main-purple text-white '>
                            {getProductDiscountPercent(product)}
                        </span>
                    )
                }
            </div>
            
            <div className='flex items-center mb-1 justify-between'>
                <p className='text-xl text-main-purple font-jost font-bold'>
                    {product.company}
                </p>
                
                <p className='text-md font-jost font-bold'>
                    {
                        product.discount ? (
                            <span className='mr-2 line-through text-gray-500'>
                                {`$${product.oldPrice}`}
                            </span>
                        ) : ""
                    }
                    {`$${product.price}`}
                </p>
                
            </div>

            <div>
                <p className='text-md font-bold font-jost'>
                    {product.name}
                </p>
            </div>

            <div className='w-full flex justify-between items-center'>
                <p className='text-xl font-bold font-jost'>
                    {getProductStarsRate(product)}
                </p>
            </div>
        </Link>
    )
}

export default Product