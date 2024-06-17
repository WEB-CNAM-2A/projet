// controllers/productController.js

const productUseCases = require('../core/usecases/productUseCases');

async function getAllProducts(req, res, next) {
  try {
    // Call the corresponding use case to fetch all products
    const products = await productUseCases.getAllProducts();
    res.json(products);
  } catch (error) {
    next(error);
  }
}

// Define the controller method to get filtered products based on query parameters
async function getFilteredProducts(req, res, next) {
  console.log('getFilteredProducts');
  console.log(req.query);
  try {
    // Extract query parameters from the request
    const { name, origin, size, type } = req.query;
    // Call the corresponding use case to fetch filtered products
    const products = await productUseCases.getFilteredProducts(name, origin, size, type);
    res.json(products);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllProducts,
  getFilteredProducts,
};
