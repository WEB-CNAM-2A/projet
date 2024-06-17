// productRoutes.js

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Define route to get all products
router.get('/products', productController.getAllProducts);
// Define route to get filtered products
router.get('/products/filtered', productController.getFilteredProducts);

module.exports = router;
