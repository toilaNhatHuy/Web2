import React  from 'react';
import AboutUsTitle from '../components/AboutUs_AboutusPage'
import Mission from '../components/Mission_AboutusPage'
import Member from '../components/Member_AboutusPage'
import Contactus from '../components/Contactus_AboutusPage'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
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