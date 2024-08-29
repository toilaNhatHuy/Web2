const express = require("express")
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const routes = require("../routes")
const bodyParser = require('body-parser')
const cors = require("cors")
const morgan = require("morgan")
dotenv.config();

const app = express()
const port = process.env.PORT

app.use(bodyParser.json())
app.use(express.json({extended: true}))
app.use(express.urlencoded({ extended: true }))
app.use(cors({credentials: true, origin: 'https://localhost:3000'}))
// app.use(upload())
app.use(morgan("common"))
routes(app)

//CONNECT TO DATABASE
mongoose.set("strictQuery", false);
mongoose.connect(`${process.env.MONGODB_URL}`)
    .then(()=>{
        console.log("Connect database success!")
    })
    .catch((err)=>{
        console.log(err)
    })


// RUN SEVER
app.listen(port,()=>{
    console.log("Server is running in port: " + port)
})
