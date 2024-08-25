const ProductService = require("../services/ProductService")

const createProduct = async (req,res) => {
    try{
        console.log(req.body)
        const {img, name, price, type, details, form, material, color,rating,review} = req.body

        if( !img || !name || !price || !type || !details || !form ||!material || !color || !rating){
            return res.status(200).json({
                status: "ERR",
                message: "The input is required,err"
            })
        } 
        const response = await ProductService.createProduct(req.body)
        return res.status(200).json(response)
    }catch(e){
        return res.status(404).json({
            message: e.message
        })
    }
}

const updateProduct = async (req,res) => {
    try{

        const productId = req.params.id
        const data = req.body

        if(!productId){
            return res.status(200).json({
                status: "ERR",
                message: "The productId is required"
            })
        }

        const response = await ProductService.updateProduct(productId, data)
        return res.status(200).json(response)
    }catch(e){
        return res.status(404).json({
            message: e.message
        })
    }
}

const getDetailsProduct = async (req,res) => {
    try{
        const productId = req.params.id
        if(!productId){
            return res.status(200).json({
                status: "ERR",
                message: "The productId is required"
            })
        }

        const response = await ProductService.getDetailsProduct(productId)
        return res.status(200).json(response)
    }catch(e){
        return res.status(404).json({
            message: e.message
        })
    }
}

const getAllProduct = async (req,res) => {
    try{
        const {limit, page} = req.query
        const response = await ProductService.getAllProduct(Number(limit), Number(page))
        return res.status(200).json(response)
    }catch(e){
        return res.status(404).json({
            message: e.message
        })
    }
}

const deleteProduct = async (req,res) => {
    try{
        const productId = req.params.id
        if(!productId){
            return res.status(200).json({
                status: "ERR",
                message: "The productId is required"
            })
        }

        const response = await ProductService.deleteProduct(productId)
        return res.status(200).json(response)
    }catch(e){
        return res.status(404).json({
            message: e.message
        })
    }
}




module.exports = {
    createProduct,
    updateProduct,
    getDetailsProduct,
    deleteProduct,
    getAllProduct
}