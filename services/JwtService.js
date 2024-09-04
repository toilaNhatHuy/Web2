const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config()


const genneralAccessToken = (payload) => {
    console.log("payload", payload)
    const access_token = jwt.sign({
        ...payload,
    },process.env.ACCESS_TOKEN,{expiresIn: '1d' })
    return access_token
}



const genneralRefreshToken = (payload) => {
    const refresh_token = jwt.sign({
        ...payload,
    },process.env.REFRESH_TOKEN,{expiresIn: '365d' })
    return refresh_token
}

const refreshTokenJwtService = (token) => {
    return new Promise( (resolve, reject)=>{
        try{
            jwt.verify(token, process.env.REFRESH_TOKEN, async (err, user) => {
                if(err){
                    resolve({
                        status:"ERROR!!",
                        message:"The authentication"
                    })
                }
                const access_token = await genneralAccessToken({
                    id: user?.id,
                    isAdmin: user?.isAdmin
                })
                resolve({
                    status: "OK",
                    message: "SUCCESS!",
                    access_token
                })
            })
        }catch(e){
            reject(e)
        }
    })
}




module.exports = {
    genneralAccessToken,
    genneralRefreshToken,
    refreshTokenJwtService
}