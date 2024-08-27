import React from 'react'
import AboutUsTitle from '../components/AboutUs/AboutUsAboutusPage'
import Mission from '../components/Mission/MissionAboutusPage'
import Member from '../components/Member/MemberAboutusPage'
import Contactus from '../components/Contactus/ContactusAboutusPage'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
// import Navbar from '../components/Home/Navbar'
// import Footer from '../components/Footer'

function AboutusPage() {
  return (
    <>
        <Navbar/>
        <AboutUsTitle/>
        <Mission/>
        <Member/>
        <Contactus/>
        <Footer/>
    </>
  )
}

export default AboutusPage