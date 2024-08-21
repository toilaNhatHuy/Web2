import Home from "../components/Home_HomePage"
import Slideshow from "../components/SlideShow_HomePage"
import Slogan from "../components/Slogan_HomePage"
import Sale from "../components/Sale_HomePage"
import NewArrivals from "../components/NewArrivals_HomePage"
import Featured from "../components/Featured_HomePage"
import Nameproduct from "../components/Nameproduct_HomePage"
import Note from "../components/Note_HomePage"


function HomePage() {
    return (
    <>
        <Home/>
        <Slideshow/>
        <Slogan/>
        <Featured/>
        <Sale/>
        <NewArrivals/>
        <Nameproduct/>
        <Note/>
    </>
    )
}

export default HomePage