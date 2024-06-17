// data/repositories/productRepository.js

const Product = require('../../models/products');

async function getAll() {
  try {
    const products = await Product.findAll();
    return products;
  } catch (error) {
    throw new Error(`Error fetching all products: ${error.message}`);
  }
}

module.exports = {
  getAll,
};
