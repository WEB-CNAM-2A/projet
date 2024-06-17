// data/repositories/productRepository.js

const pool = require('../../config/db');

// Repository method to fetch all products
async function getAll() {
  const client = await pool.connect();
  try {
    const res = await client.query('SELECT * FROM products');
    return res.rows;
  } finally {
    client.release();
  }
}

module.exports = {
  getAll,
};
