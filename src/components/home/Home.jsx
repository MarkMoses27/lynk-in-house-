import { Link } from 'react-router-dom';
import HOME_IMAGE from './../../assets/cta.svg';
import './Home.css';
const Home = () => {
    return (
      <div className="home-container">
        <div className="welcome-content">
          <h1 className="welcome-heading">Welcome to Lynk Nails</h1>
          <p className="welcome-text">Experience the artistry of nail care,tailored just for you!</p>
          <Link to="/booking">
            <button className="netyite-button">Book Now</button>
          </Link>
          <Link to="/services">
            <button className="sglex-button">View Services</button>
          </Link>
        </div>
        <div className="welcome-image">
          <img className="home-image" src={HOME_IMAGE} alt="Welcome"/>
        </div>
      </div>
    )
}

export default Home;
