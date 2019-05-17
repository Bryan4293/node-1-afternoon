const products = require('../products.json')

const getProducts= (request, response) => {
    const price = request.query.price
    if(price){
        const cost = products.filter(val => val.price >= +price)
        response.status(200).json(cost)
    }
   response.status(200).json(products)
   
}

module.exports = getProducts;
