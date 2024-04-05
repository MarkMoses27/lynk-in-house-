import { Link } from "react-router-dom"
import "./Nav.css"

const Nav = () => {
  return (
    <div className="navbar">
        <div className="logo">
            <h1>Lynk in House</h1>
        </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/services">Services</Link>
          </li>

          <li>
            <Link to="/gallery">Gallery</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
          
        </ul>
        
      </nav>
      <button><Link to="/book">Book Now</Link> 
       </button>
    </div>
  )
}

export default Nav

