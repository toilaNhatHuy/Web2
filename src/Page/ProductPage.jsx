import Featured from "../components/Featured_ProductPage"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Product from "../components/Product_ProductPage"
import Navbar from "../components/Navbar"
import Attire from "../components/Attire_ProductPage"
import Categoies from "../components/Categoies_ProductPage"
import Footer from "../components/Footer"

function ProductPage(){
    return(
        <>
            <Navbar/>
            <Product/>
            <Featured/>
            <Attire/>
            <Categoies/>
            <Footer/>
        </>
    )
}
export default ProductPage