import express from 'express'
const router = express.Router()

import { productController } from '../Controllers/Product.Controller.js'

//Get a list of all products
router.get('/', productController.getAllProducts)

//Create a new product
router.post('/', productController.createNewProduct)

//Get a product by id
router.get('/:id', productController.findProductById)

//Update a product by id
router.patch('/:id', productController.updateAProduct)

//Delete a product by id
router.delete('/:id', productController.deleteAProduct)

export default router
