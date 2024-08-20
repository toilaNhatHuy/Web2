import Slideshow from "./components/Home/SlideShow.jsx";
import Navbar from "./components/Home/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import Slogan from "./components/Home/Slogan.jsx";
import Featured from "./components/Home/Featured.jsx";
import Sale from "./components/Home/Sale.jsx";
import NewArrivals from "./components/Home/NewArrivals.jsx";
import Footer from "./components/Home/Footer.jsx";
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