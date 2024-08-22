const mongoose = require("mongoose")
const productSchema = new mongoose.Schema(
    {
        img:{type:String, required: true},
        name:{type: String, required: true},
        price:{type: String, required: true},
        detail:{type: String, required: true},
        form:{type: String, required: true},
        material:{type: String, required: true},
        color:{type: String, required: true},
        rating:{type: Number, required: true},
        review:{type: String, required: true},
    },
    {
        timestamps: true,
    }
);
const Product = mongoose.model("Product", productSchema);
module.exports = Product;