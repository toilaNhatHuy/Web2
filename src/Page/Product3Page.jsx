import Featured_Product3 from "../components/Featured_Product3Page"
import Product from "../components/Product_ProductPage"
import Navbar from "../components/Navbar"
import Attire from "../components/Attire_ProductPage"
import Categories3 from "../components/Categoies_ProductPage-3"
import Footer from "../components/Footer"
import React from 'react'
function Product3Page(){
    return(
        <>
            <Navbar/>
            <Product/>
            <Featured_Product3/>
            <Attire/>
            <Categories3/>
            <Footer/>
        </>
    )
}
export default Product3Page