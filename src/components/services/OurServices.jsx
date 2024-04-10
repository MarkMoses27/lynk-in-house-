import { Link } from 'react-router-dom';
import './OurServices.css'; 

import ServiceImage1 from '../../assets/home1.png';
import ServiceImage2 from '../../assets/home2.png';
import ServiceImage3 from '../../assets/home3.png';
import ServiceImage4 from '../../assets/home4.png';

const OurServices = () => {
  // Sample service data
  const servicesData = [
    { id: 1, name: "Basic Manicure & Pedicure", image: ServiceImage1 },
    { id: 2, name: "Gel Removal", image: ServiceImage2 },
    { id: 3, name: "Nail Art", image: ServiceImage3 },
    { id: 4, name: "Additional Services", image: ServiceImage4 },
    // Add more service items as needed
  ];

  return (
    <div className="our-services">
      <h1 className="services-title">Our Services</h1>
      <h2 className="services-description">Tap the link to discover all the experiences that we offer.</h2>
      <div className="services-list">
        {servicesData.map(service => (
          <div className="service-item" key={service.id}>
            <img className="service-image" src={service.image} alt={service.name} />
            <h3 className="service-name">{service.name}</h3>
            <Link to={`/service/${service.id}`} className="service-link-button">See Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurServices;
