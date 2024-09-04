const UserService = require("../services/UserService")
const JwtService = require("../services/JwtService")

const createUser = async (req,res) => {
    try{
        console.log(req.body)
        const {name, email, password, confirmPassword} = req.body
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        const isCheckEmail = reg.test(email)

        if( !name || !email || !password || !confirmPassword){
            return res.status(200).json({
                status: "ERR",
                message: "ENTER YOUR EMAIL AND PASSWORD"
            })
        } 
        else if(!isCheckEmail){
            return res.status(200).json({
                status: "ERR",
                message: "EMAIL IS INCORRECT"
            })
        }
        else if(password != confirmPassword){
            return res.status(200).json({
                status: "ERR",
                message: "PASSWORD DO NOT MATCH"
            })
        };
        console.log(isCheckEmail)
        const response = await UserService.createUser(req.body)
        return res.status(200).json(response)
    }catch(e){
        return res.status(404).json({
            message: e.message
        })
    }
}


const loginUser = async (req,res) => {
    try{
        const {email, password} = req.body
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        const isCheckEmail = reg.test(email)

        if(!email || !password){
            return res.status(200).json({
                status: "ERR",
                message: "ENTER YOUR EMAIL AND PASSWORD"
            })
        } 
        else if(!isCheckEmail){
            return res.status(200).json({
                status: "ERR",
                message: "EMAIL IS INCORRECT"
            })
        }
        const response = await UserService.loginUser(req.body)
        const {refresh_token, ...newResponse} = response
        res.cookie('refresh_token',refresh_token, {
            HttpOnly:true,
            Secure:false,
            samesite:"strict"
        })
        return res.status(200).json(newResponse)
    }catch(e){
        return res.status(404).json({
            message: e.message
        })
    }
}


const updateUser = async (req,res) => {
    try{

        const userId = req.params.id
        const data = req.body

        if(!userId){
            return res.status(200).json({
                status: "ERR",
                message: "The userId is required"
            })
        }

        const response = await UserService.updateUser(userId, data)
        return res.status(200).json(response)
    }catch(e){
        return res.status(404).json({
            message: e.message
        })
    }
}


const deleteUser = async (req,res) => {
    try{
        const userId = req.params.id
        if(!userId){
            return res.status(200).json({
                status: "ERR",
                message: "The userId is required"
            })
        }

        console.log("userId",userId)
        const response = await UserService.deleteUser(userId)
        return res.status(200).json(response)
    }catch(e){
        return res.status(404).json({
            message: e.message
        })
    }
}

const getAllUser = async (req,res) => {
    try{
        const response = await UserService.getAllUser()
        return res.status(200).json(response)
    }catch(e){
        return res.status(404).json({
            message: e.message
        })
    }
}

const getDetailsUser = async (req,res) => {
    try{
        const userId = req.params.id
        if(!userId){
            return res.status(200).json({
                status: "ERR",
                message: "The userId is required"
            })
        }

        console.log("userId",userId)
        const response = await UserService.getDetailsUser(userId)
        return res.status(200).json(response)
    }catch(e){
        return res.status(404).json({
            message: e.message
        })
    }
}

const refreshToken = async (req,res) => {
    try{
        const token = req.cookies.refresh_token
        if(!token){
            return res.status(200).json({
                status: "ERR",
                message: "The token is required"
            })
        }

        const response = await JwtService.refreshTokenJwtService(token)
        return res.status(200).json(response)
    }catch(e){
        return res.status(404).json({
            message: e.message
        })
    }
}






module.exports = {
    createUser,
    loginUser,
    updateUser,
    deleteUser,
    getAllUser,
    getDetailsUser,
    refreshToken
}