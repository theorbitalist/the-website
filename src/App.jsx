import Bento from "./components/bento/Bento"
import Brands from "./components/brands/Brands"
import Contact from "./components/contact/Contact"
import Features from "./components/features/Features"
import Footer from "./components/footer/Footer"
import Global from "./components/global/Global"
import Header from "./components/header/Header"
import Mail from "./components/mail/Mail"
import Testimonial from "./components/testimonial/Testimonial"


function App() {
  return (
    <>
    <Header/>
    <Features/>
    <Bento/>
    <Global/>
    {/* <Brands/> */}
    {/* <Testimonial/> */}
    <Mail/>
    {/* <Contact/> */}
    <Footer/>
    </>
  )
}

export default App
