const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const suppliersController = require("../controllers/suppliersController");

router.get("/users", usersController.index);
router.get("/suppliers", suppliersController.index);

module.exports = router;