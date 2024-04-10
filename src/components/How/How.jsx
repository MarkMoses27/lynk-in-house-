// How.jsx
import './How.css';
import home from '../../assets/home2.png';
import cta from '../../assets/home3.png';
import welcome from '../../assets/home4.png';

const How = () => {
  const steps = [
    {
      title: "Schedule Online",
      description: "It takes you 3 minutes to select spa services & your best time slot (1-60 days in advance), enter your contacts & address, pay 10%, and receive SMS & email confirmation.",
      image: home 
    },
    {
      title: "We Come To You",
      description: "We bring all materials & equipment & set up the spa in a comfortable place of your choice. Some services require access to electricity contact & water..",
      image: cta
    },
    {
      title: "You Experience",
      description: "We customize your session to your personality & needs.",
      image: welcome
    }
  ];

  return (
    <div className="how-container">
      <h2>How It Works</h2>
      <div className="how-steps">
        {steps.map((step, index) => (
          <div className="how-step" key={index}>
            <img src={step.image} alt={step.title} />
            <div className="overlay">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default How;
