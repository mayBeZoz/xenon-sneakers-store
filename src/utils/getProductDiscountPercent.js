
const getProductDiscountPercent = (product) => {
    const oldPrice = product.oldPrice
    const currPrice = product.price
    const discountPercent = Math.trunc(((oldPrice - currPrice) / oldPrice) * 100) 
    return `${discountPercent}%`
}

export default getProductDiscountPercent