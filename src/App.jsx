import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Landing from "./pages/Landing";
import BlogPage from "./pages/BlogPage";
import Waitlist from "./components/waitlist/Waitlist";

function App() {
  return (
    <Router>

      {/* <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>

      <Footer /> */}
      <Waitlist/>
    </Router>
  );
}

export default App;
