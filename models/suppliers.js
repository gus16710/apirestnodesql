const Sequelize = require("sequelize");
const db = require("../config/db");

const suppliers = db.define("proveedor", {
    id_proveedor: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.STRING(50),
    },
    domicilio: {
        type: Sequelize.STRING(50),        
    },
    correo: {
        type: Sequelize.STRING(50),        
    },
}, {
    freezeTableName: true, // Model tableName will be the same as the model name,
    timestamps: false
});

module.exports = suppliers;