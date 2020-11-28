const { Sequelize } = require("sequelize");

const db = new Sequelize("DBone", "sa", "AEGqK6Sb40m", {
  host: "localhost",
  dialect: "mssql",   
  port: 1434, 
  dialectOptions: {    
    options: {
      validateBulkLoadParameters: true,
    },
  },
});

module.exports = db;
