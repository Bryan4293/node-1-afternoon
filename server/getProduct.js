const products = require("../products.json")

const getProduct = (request, response) =>{
    const product = products.find(product => product.id === +request.params.id)
    if(product){
        response.json(product)
    }else{
        response.status(500).json("Item no in list")
    }
    
}
module.exports = getProduct