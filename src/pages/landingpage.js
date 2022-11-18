import logo from '../assets/Logo.png'
import Footer from '../components/Footer'
import Header from '../components/navbar'
import Slider from '../components/Slider'

function LandingPage(){
    return(
        <div className="home">
            <Header />
            <div className="metazord">
                <img src={logo} alt="logo" className="image" />
                <span>House   Of   MetaZord</span>
            </div>
            <div className="landingpage">
                <Slider />
            </div>
            <Footer />
        </div>
    )
}
export default LandingPage