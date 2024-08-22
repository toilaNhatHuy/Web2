const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    Price:{
        type: Number,
        required: true
    },
    Detail:{
        type: String,
        required: true
    },
    Form:{
        type: String,
        required: true
    },
    Material:{
        type: String,
        required: true
    },
    Color:{
        type: String,
        required: true
    }
})
let Product = mongoose.model("Product",productSchema);
module.exports = {Product}