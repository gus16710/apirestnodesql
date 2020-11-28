const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/db");
const router = require("./routes");

//Conexion con la base de datos
const dbConection = async () => {
  try {
    await db.authenticate();
    console.log("Conecction has been established successfully");
  } catch (error) {
    console.log(error);
  }
};

dbConection();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);
app.listen(3001);
