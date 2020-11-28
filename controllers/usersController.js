const users = require("../models/users");

exports.index = async(req, res) => {      
    try {
        const dataUsers = await users.findAll({});
        debugger;

        
        let json = res.json(dataUsers);
        // console.table(dataUsers);

        return json;
    } catch (error) {
        console.log(error);
    }    
}