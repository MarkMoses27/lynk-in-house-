import Home from "./components/home/Home"
import Nav from "./components/nav/Nav"
import { BrowserRouter } from "react-router-dom"

function App() {
  

  return (
    <BrowserRouter>
   <Nav/>
   <Home/>

      
    </BrowserRouter>
  )
}

export default App
