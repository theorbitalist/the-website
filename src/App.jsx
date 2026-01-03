import Bento from "./components/bento/Bento";
import Brands from "./components/brands/Brands";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Global from "./components/global/Global";
import Header from "./components/header/Header";
import Mail from "./components/mail/Mail";
import Testimonial from "./components/testimonial/Testimonial";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <>
      <Helmet>
        <title>Earth & Space Intelligence | The Orbitalist</title>
        <meta
          name="description"
          content="The Orbitalist provides Earth and space intelligence through climate and geospatial analysis to support CSR, ESG, and impact-driven decisions."
        />
        <meta
          name="keywords"
          content="earth observation, space intelligence, climate data analysis, geospatial intelligence, CSR analytics, ESG data, satellite data analysis, climate risk mapping"
        />
        <link rel="canonical" href="https://www.theorbitalist.space/" />

        <meta property="og:title" content="Earth & Space Intelligence | The Orbitalist" />
        <meta property="og:description" content="The Orbitalist provides Earth and space intelligence through climate and geospatial analysis." />
        <meta property="og:image" content="https://www.theorbitalist.space/assets/logo_astronaut-D1E5IewJ.png" />
        <meta property="og:url" content="https://www.theorbitalist.space/" />
        <meta property="og:type" content="website" />

      </Helmet>
      <Header />
      <Features />
      <Bento />
      <Global />
      {/* <Brands/> */}
      {/* <Testimonial/> */}
      <Mail />
      {/* <Contact/> */}
      <Footer />
    </>
  );
}

export default App;
