const ProductService = require("../services/ProductService")

const createProduct = async (req,res) => {
    try{
        console.log(req.body)
        const {name, price,color,sizeS,sizeM,sizeL,sizeXl} = req.body

        if(!name || !price || !color){
            return res.status(200).json({
                status: "ERR",
                message: "PLEASE FILL THE INPUT"
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
        const {limit, page, sort, filter} = req.query
        const response = await ProductService.getAllProduct(Number(limit) || 9, Number(page) || 0, sort,filter)
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