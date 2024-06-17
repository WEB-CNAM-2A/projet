// core/useCases/productUseCases.js
const { Op } = require('sequelize');
const Product = require('../../models/products');

async function getAllProducts() {
  try {
    const products = await Product.findAll();
    return products;
  } catch (error) {
    throw new Error(`Error fetching all products: ${error.message}`);
  }
}

async function getFilteredProducts(name, origin, size, type) {
  try {
    // Build the where clause dynamically based on provided parameters
    const whereClause = {};
    
    if (name) {
      whereClause.title = { [Op.iLike]: `%${name}%` };
    }
    if (origin) {
      whereClause.origin = { [Op.iLike]: `%${origin}%` };
    }
    if (size) {
      whereClause.size = { [Op.iLike]: `%${size}%` };
    }
    if (type) {
      whereClause.type = { [Op.iLike]: `%${type}%` };
    }

    // Use findAll with the constructed where clause
    const products = await Product.findAll({
      where: whereClause,
    });

    return products;
  } catch (error) {
    throw new Error(`Error fetching filtered products: ${error.message}`);
  }
}


module.exports = {
  getAllProducts,
  getFilteredProducts,
};
