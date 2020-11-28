const users = require("../models/users");

exports.index = async(req, res) => {      
    try {
        const dataUsers = await users.findAll({});
        res.json(dataUsers);
    } catch (error) {
        console.log(error);
    }    
}