const express = require("express")
const dotenv = require('dotenv')
const mongoose = require('mongoose');
dotenv.config();

const app = express()
const port = process.env.PORT || 3001

app.get("/", (req,res)=>{
    return res.send("hello world")
})
// console.log("process.env.MONGO_DB",process.env.MONGO_DB)
//CONNECT TO DATABASE
mongoose.connect(`mongodb+srv://nhoangphuc960:${process.env.MONGO_DB}@web02.9ysir.mongodb.net/?retryWrites=true&w=majority&appName=Web02`)
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
