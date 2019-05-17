const express = require("express")
const getProducts= require('./getProducts')
const getProduct = require('./getProduct')
const app = express()
const products = require("../products.json")


app.get("/api/products", getProducts)

app.get("/api/products/:id", getProduct)

app.listen(4293, () => {
    console.log('Server listening on 4293')
})