import Blog from "./components/blog/Blog"
import Details from "./components/details/Details"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"

function App() {
  return (
    <>
    <div className="z-50">
    <Navbar/>
    </div>
    <Hero/>
    <Blog/>
    <Details/>
    </>
  )
}

export default App
