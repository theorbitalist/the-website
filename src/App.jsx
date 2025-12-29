import BlogGrid from "./components/blog/BlogGrid"
import BlogPost from "./components/blog/BlogPost"
import Exhibition from "./components/blog/Exhibition"
import Collaborate from "./components/collaborate/Collaborate"
import Collection from "./components/collection/Collection"
import Countdown from "./components/countdown/CountDown"
import Footer from "./components/footer/Footer"
import CreatePost from "./components/forms/CreatePost"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import POTD from "./components/picture of the day/POTD"

function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
    <Hero/>
    </div>
    <BlogPost/>
    <BlogGrid/>
    <div className="container">
    <Collection/>
    <Exhibition/>
    <POTD/>
    {/* <CreatePost/> */}
    </div>
    <Collaborate/>
    {/* <Countdown/> */}
    <Footer/>
    </>
  )
}

export default App
