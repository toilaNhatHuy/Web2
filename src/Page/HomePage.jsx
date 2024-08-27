import Navbar from "../components/Navbar"
import Home from "../components/HomeHomePage"
import Slideshow from "../components/SlideShowHomePage"
import Slogan from "../components/SloganHomePage"
import Popular from "../components/PopularHomePage"
import Sale from "../components/SaleHomePage"
import NewArrivals from "../components/NewArrivalsHomePage"
import Featured from "../components/FeaturedHomePage"
import Nameproduct from "../components/NameproductHomePage"
import Note from "../components/NoteHomePage"
import Footer from "../components/Footer"
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