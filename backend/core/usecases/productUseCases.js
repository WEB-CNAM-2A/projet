// core/useCases/productUseCases.js

const Product = require('../entities/Product');
const productRepository = require('../../data/repositories/productRepository');

async function getAllProducts() {
  // Call the repository method to fetch all products
  const productData = await productRepository.getAll();

  // Map product data to Product entities
  const products = productData.map(({ title, image, price, origin, size, type }) => 
    new Product(title, image, price, origin, size, type)
  );
  return products;
}

async function getFilteredProducts(name, origin, size, type) {
  // Call the repository method to fetch all products
  const productData = await productRepository.getAll();

  // Filter products based on query parameters
  const products = productData
    .filter(product => 
      (!name || product.title.toLowerCase().includes(name.toLowerCase())) &&
      (!origin || product.origin.toLowerCase().includes(origin.toLowerCase())) &&
      (!size || product.size.toLowerCase().includes(size.toLowerCase())) &&
      (!type || product.type.toLowerCase().includes(type.toLowerCase()))
    )
    .map(({ title, image, price, origin, size, type }) => 
      new Product(title, image, price, origin, size, type)
    );
  return products;
}

module.exports = {
  getAllProducts,
  getFilteredProducts,
};
