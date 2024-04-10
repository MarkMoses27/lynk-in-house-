import Home from "./components/home/Home"
import How from "./components/How/How"
import Nav from "./components/nav/Nav"
import { BrowserRouter,Route, Routes } from "react-router-dom"
import OurServices from "./components/services/OurServices"
import About from "./components/about/About"
import LocationCoverage from "./components/location/LocationCoverage"
import FAQs from "./components/faq/FAQs"
import Footer from "./components/footer/Footer"
import Gallery from "./components/gallery/Gallery"
import Contact from "./components/contact/Contact"
function App() {
  

  return (
    <BrowserRouter>
   <Nav/>
   <Home/>
   <About/>
   <How/>
   <OurServices/>
   <LocationCoverage/>
<FAQs/>

<Routes>
  <Route path="/about" element={<About/>}/>
  <Route path="/ourservices" element={<OurServices/>}/>
  <Route path="/gallery" element={<Gallery/>}/>
  <Route path="/contact" element={<Contact/>}/>
</Routes>

<Footer/>
      
    </BrowserRouter>
  )
}

export default App
