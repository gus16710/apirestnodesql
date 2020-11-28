var env = require('node-env-file'); // .env file
env(__dirname + '/.env');


const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/db");
const router = require("./routes");

//Conexion con la base de datos
const dbConection = async () => {
  try {
    await db.authenticate();
    console.log("Conection has been established successfully");
  } catch (error) {
    console.log(error);
  }
};

console.log('dirname = ', __dirname);
console.log('env = ' , __dirname + '/.env');

const port = process.env.PORT || 3000;
console.log('PORT = ' , process.env.PORT);

dbConection();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);
app.listen(port);
