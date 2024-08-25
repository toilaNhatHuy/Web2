const Product = require("../model/ProductModel")


const createProduct = (newProduct) => {
    return new Promise(async (resolve, reject)=>{
        const {img, name, price, type, details, form, material, color,rating,review} = newProduct
        try{
            const checkProduct = await Product.findOne({
                name: name
            })
            if(checkProduct !== null){
                resolve({
                    status:"OK",
                    message:"The name of product is already"
                })
            }
            const newProduct = await Product.create({
                img,
                name, 
                price, 
                type, 
                details, 
                form, 
                material, 
                color,
                rating,
                review
            })
            if(newProduct){
                resolve({
                    status: "OK",
                    message: "SUCCESS!",
                    data: newProduct
                })
            }
        }catch(e){
            reject(e)
        }
    })
}

const updateProduct = (id, data) => {
    return new Promise(async (resolve, reject)=>{
        try{
            const checkProduct = await Product.findOne({
                _id: id
            })
            if(checkProduct === null){
                resolve({
                    status:"OK",
                    message:"The product is not defined"
                })
            }
            const updatedProduct = await Product.findByIdAndUpdate(id,data,{new:true})
            resolve({
                status: "OK",
                message: "SUCCESS!",
                data: updatedProduct
            })
        }catch(e){
            reject(e)
        }
    })
}

const deleteProduct = (id) => {
    return new Promise(async (resolve, reject)=>{
        try{
            const checkProduct = await Product.findOne({
                _id: id
            })
            if(checkProduct === null){
                resolve({
                    status:"OK",
                    message:"The product is not defined"
                })
            }
            await Product.findByIdAndDelete(id)
            resolve({
                status: "OK",
                message: "DELETE PRODUCT SUCCESS!"
            })
        }catch(e){
            reject(e)
        }
    })
}

const getDetailsProduct = (id) => {
    return new Promise(async (resolve, reject)=>{
        try{
            const product = await Product.findOne({
                _id: id
            })
            if(product === null){
                resolve({
                    status:"OK",
                    message:"The product is not defined"
                })
            }
            resolve({
                status: "OK",
                message: "SUCCESS!",
                data: product
            })
        }catch(e){
            reject(e)
        }
    })
}

const getAllProduct = () => {
    return new Promise(async (resolve, reject)=>{
        try{
            const allProduct = await Product.find()
            resolve({
                status: "OK",
                message: "Get all product success!!!",
                data:allProduct
            })
        }catch(e){
            reject(e)
        }
    })
}





module.exports = {
    createProduct,
    updateProduct,
    getDetailsProduct,
    deleteProduct,
    getAllProduct

}