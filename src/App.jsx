import Blog from "./components/blog/Blog"
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
    </>
  )
}

export default App
