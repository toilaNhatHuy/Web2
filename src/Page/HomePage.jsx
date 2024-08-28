import Navbar from "../components/Navbar/Navbar"
import Home from "../components/Homepage/HomeHomePage"
import Slideshow from "../components/Slideshow/SlideShowHomePage"
import Slogan from "../components/Slogan/SloganHomePage"
import Popular from "../components/Popular/PopularHomePage"
import Sale from "../components/Sale/SaleHomePage"
import NewArrivals from "../components/Newarrivals/NewArrivalsHomePage"
import Featured from "../components/Featured/FeaturedHomePage"
import Nameproduct from "../components/Nameproduct/NameproductHomePage"
import Note from "../components/Note/NoteHomePage"
import Footer from "../components/Footer/Footer"
import React from 'react'


function HomePage() {
    return (
    <>
        <Navbar/>
        <Home/>
        <Slideshow/>
        <Slogan/>
        <Featured/>
        <Popular/>
        <Sale/>
        <NewArrivals/>
        <Nameproduct/>
        <Note/>
        <Footer/>
    </>
    )
}

export default HomePage