
const getProductStarsRate = (product) => {
    const stars = "★★★★★"
    const rate = Math.round(((product.rate / 10) / 2))
    return stars.slice(0,rate)
}


export default getProductStarsRate