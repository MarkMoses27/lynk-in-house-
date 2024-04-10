import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitter, faInstagram, faLinkedin, faPinterest, faYoutube, faTiktok} from "@fortawesome/free-brands-svg-icons";
import './Footer.css';
const Footer = () => {
  // Get current year for copyright notice
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-social">
        <h3>Follow Us</h3>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube}  /></a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter}  /></a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram}  /></a>
        <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTiktok}  /></a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}   /></a>
        <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faPinterest}  /></a>
      </div>
      <div className="footer-copyright">
        <p>&copy; {currentYear} Nail Lynk. All rights reserved.Designed by <a href="https://wa.me/c/254715137922" target="_blank" rel="noopener noreferrer">Mark Moses</a></p>
      </div>
    </footer>
  );
};

export default Footer;
