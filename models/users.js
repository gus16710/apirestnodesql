const Sequelize = require("sequelize");
const db = require("../config/db");

const users = db.define("users", {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING(50),
    },
    email: {
        type: Sequelize.STRING(50),        
    },
    password: {
        type: Sequelize.STRING(50),        
    },
}, {
    timestamps: false
});

module.exports = users;