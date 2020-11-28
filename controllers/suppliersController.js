const suppliers = require("../models/suppliers");

exports.index = async(req, res) => {      
    try {
        const dataSuppliers = await suppliers.findAll({});
        debugger;

        
        let json = res.json(dataSuppliers);
        

        return json;
    } catch (error) {
        console.log(error);
    }    
}