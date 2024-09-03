import FeaturedProduct4 from "../components/Featured/FeaturedProduct4Page"
import Navbar from "../components/Navbar/Navbar"
import Attire from "../components/Attire/AttireProductPage"
import Credibility from "../components/Credibidity/Credibility"
import Backtoschool from "../components/Backtoschool/Backtoschool"
import Footer from "../components/Footer/Footer"
import BacktoschoolTitle from "../components/BacktoschoolTitle/BacktoschoolTitle"
import React from 'react'
function BacktoschoolPage() {
  return (
    <>
            <Navbar/>
            <BacktoschoolTitle/>
            <Attire/>
            <Credibility/>
            <Backtoschool/>
            <Footer/>
    </>
  )
}

export default BacktoschoolPage