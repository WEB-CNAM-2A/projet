const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD, {
    host: process.env.DB_HOST, // Corrected to use DB_HOST
    port: process.env.DB_PORT, // Specify the port separately if needed
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true, // Set to true if your PostgreSQL server requires SSL
        rejectUnauthorized: false // Set to false if you have a self-signed certificate
      }
    }
  }
);

module.exports = sequelize;
