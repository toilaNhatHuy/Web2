import Slideshow from "./components/SlideShow.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Slogan from "./components/Slogan.jsx";
import Featured from "./components/Featured.jsx";
import Sale from "./components/Sale.jsx";
import NewArrivals from "./components/NewArrivals.jsx";
import Footer from "./components/Footer.jsx";
// import Body from "./Body"
// import Slideshow from "./SlideShow"

function App() {
    return (
    <>
        <Navbar/>
        <Home/>
        <Slideshow/>
        <Slogan/>
        <Featured/>
        <Sale/>
        <NewArrivals/>
        <Note/>
        <Footer/>
    </>
    
    )
}

export default App