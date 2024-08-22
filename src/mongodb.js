const express = require("express")
const dotenv = require('dotenv')
dotenv.config();

const app = express()
const port = process.env.PORT || 3001

app.get("/", (req,res)=>{
    return res.send("hello world")
})

app.listen(port,()=>{
    console.log("Server is running in port: " + port)
})




// const { MongoClient, ServerApiVersion } = require('mongodb');

// const express = require('express')
// const cors = require('cors')
// const mongoose = require('mongoose')
// const app = express();
// var bodyParser = require('body-parser')
// const morgan = require('morgan')
// const dotenv = require('dotenv')
// const productRoute = require("../routes/product")
// const port = 3000;

// dotenv.config();

// mongoose.connect((process.env.MONGODB_URL), ()=>{
//   console.log("Connected to MongoDB")
// });

// app.use(bodyParser.json({limit:"50mb"}));
// app.use(cors())
// app.use(morgan("common"))

// //ROUTES
// app.use("/v1/product", productRoute)

// app.listen(port, () => {
//   console.log(`Example app listening on port`)
// });