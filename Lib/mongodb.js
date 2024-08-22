const { MongoClient, ServerApiVersion } = require('mongodb');

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express();
var bodyParser = require('body-parser')
const morgan = require('morgan')
const dotenv = require('dotenv')
const productRoute = require("../routes/product")
const port = 3000;

dotenv.config();

mongoose.connect((process.env.MONGODB_URL), ()=>{
  console.log("Connected to MongoDB")
});

app.use(bodyParser.json({limit:"50mb"}));
app.use(cors())
app.use(morgan("common"))

//ROUTES
app.use("/v1/product", productRoute)

app.listen(port, () => {
  console.log(`Example app listening on port`)
});