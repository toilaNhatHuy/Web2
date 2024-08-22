const mongoose = require('mongoose')

const TeeSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    Price:{
        type: Number,
        reuqired: true
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
});
const product = new mongoose.model('T-Shirt', TeeSchema)
module.exports = product;