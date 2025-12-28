import BlogGrid from "./components/blog/BlogGrid"
import BlogPost from "./components/blog/BlogPost"
import Collaborate from "./components/collaborate/Collaborate"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"

function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
    <Hero/>
    </div>
    {/* <BlogPost/> */}
    <BlogGrid/>
    <Collaborate/>
    <Footer/>
    </>
  )
}

export default App
