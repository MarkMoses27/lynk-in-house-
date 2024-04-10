import { Link } from 'react-router-dom';
import './About.css'; 
const About = () => {
  return (
    <div className="about-container">
      <div className="home-content">
        <h1>About Us</h1>
        <h2>Step Into The World of Nail Styling Perfection!</h2>
        <p>We recognize that every customer is different and has different tastes when it comes to nail care. Lynk Nails is here to help.</p>
        <p>Our stylists are highly skilled in their respective fields and are here to give you the best experience.</p>
        <div className='about-btn'>
          <Link to="/booking"><button className="about-us-btn">More About Us</button></Link>
          <Link to="/contact"><button className="call-btn">Make A Call</button></Link>
        </div>
      </div>
    </div>
  );
}

export default About;
