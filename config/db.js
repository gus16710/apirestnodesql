const { Sequelize } = require("sequelize");


console.log('dirname db = ', __dirname);
console.log('env  db = ' , __dirname + '/.env');
console.log('PORT = ' , process.env.PORT);

const db = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  
  {
    host:  process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT,
    // port: 1434,
    dialectOptions: {
      options: {
        database: process.env.DATABASE_NAME,
        validateBulkLoadParameters: true,
      },
    },
  }
);

module.exports = db;
