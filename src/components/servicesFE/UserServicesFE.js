import axios from "axios"
export const loginUser = async (data) => {
    const res = await axios.post(`http://localhost:3001/api/user/sign-in`,data)
    return res
}
export const signupUser = async (data) => {
    const res = await axios.post(`http://localhost:3001/api/user/sign-up`,data)
    return res
}
export const getDetailsUser = async (id,access_token) => {
    const res = await axios.get(`http://localhost:3001/api/user/get-details/${id}`,{
        headers:{
            token: `Bearer ${access_token}`,
        }
    })
    return res
}
export const createProducts = async (data) => {
    const res = await axios.post(`http://localhost:3001/api/product/create`,data)
    return res
}
export const GetAllProduct = async (data) => {
    const res = await axios.get(`http://localhost:3001/api/product/get-all`,data)
    return res
}
export const deleteProduct = async (id) => {
    const res = await axios.delete(`http://localhost:3001/api/product/delete-product/${id}`)
    return res
}