const {Product} = require("../model/model.js")

const productController = {
    //ADD PRODUCT
    addProduct: async(req,res)=>{
        res.status(200).json(req.body);
    }
}
module.exports = productController;