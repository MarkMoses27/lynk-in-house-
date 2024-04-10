import './FAQs.css';

const FAQs = () => {
  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-item">
        <h3 className="faq-question">Which neighborhoods do you reach?</h3>
        <p className="faq-answer">We visit residents throughout Nairobi county (except suburbs in the east).</p>
        <p className="faq-answer">Our reach extends to nearby towns on the borders of Kiambu, Kajiado, and Machakos counties e.g Juja, Kiambu, Ruiru, Kikuyu, Tatu city, Ruaka, Syokimau, Mlolongo, Kitengela, Athi-river, Rongai, and Ngong etc.</p>
        <p className="faq-answer">Check out our mapped service coverage to confirm your location.</p>
      </div>
      <div className="faq-item">
        <h3 className="faq-question">How soon can I have an appointment?</h3>
        <p className="faq-answer">We work with advance bookings; 1-60 days from today.</p>
        <p className="faq-answer">All the time slots currently available will be shown to you on our calendar on the booking page.</p>
        <p className="faq-answer">You have more slots 1-2 weeks ahead if you need services from different professionals in one appointment.</p>
      </div>
      <div className="faq-item">
        <h3 className="faq-question">Do I need to provide anything for my at-home spa experience?</h3>
        <p className="faq-answer">We bring all the materials and equipment including the bed and towels.</p>
        <p className="faq-answer">For some services, we need access to electricity contact and water supply.</p>
        <p className="faq-answer">Also, some people prefer using their own facial products or linen.</p>
      </div>
      <div className="faq-item">
        <h3 className="faq-question">Do you have a physical location?</h3>
        <p className="faq-answer">No. We are mobile and offer spa service in your home, office, or hotel.</p>
      </div>
      <div className="faq-item">
        <h3 className="faq-question">Do you attend to men?</h3>
        <p className="faq-answer">Our focus is on ladies but we also work with gents only when booked by the wife, girlfriend, sister, or daughter. Indicate on the booking notes for whom the service is if not for the person booking.</p>
        <p className="faq-answer">We do not offer waxing and body scrubs to men. The corporate massage is offered to both ladies and gents.</p>
        <p className="faq-answer">Bookings made by men alone are automatically canceled unless accompanied by a note about the wife/girlfriend being around.</p>
      </div>
      <div className="faq-item">
        <h3 className="faq-question">What are your working hours?</h3>
        <p className="faq-answer">We work from 8 am to 5 pm, from Monday to Saturday.</p>
      </div>
      <div className="faq-item">
        <h3 className="faq-question">How do I pay the deposit?</h3>
        <p className="faq-answer">The 10% deposit is done automatically online with mobile money or a card when booking.</p>
        <ol className="faq-answer">
          <li>Payments by MPESA Express are free.</li>
          <li>Payment via VISA, American Express, MasterCard & Apple Pay is possible for amounts above Ksh 100 and incur a processing fee (2.9% for Ksh & 3.8% for other currencies)</li>
          <li>Payment via PAYBILL & Airtel is possible for amounts above Ksh 100 and incur a processing fee of 2.9% + Mobile Operator fee</li>
        </ol>
        <p className="faq-answer">The 10% deposit is non-refundable. If anything comes up on the day of your appointment, we recommend rescheduling the appointment.</p>
        <p className="faq-answer">If you had signed in prior to booking, go to your account to reschedule your appointment at least 1 day prior to your scheduled date. Otherwise, contact us at least 6 hrs before your appointment to reschedule for you.</p>
        <p className="faq-answer">You can cancel at least 6 hrs prior to your scheduled slot via the link in your email or from your account. Afterward, contact us ASAP to cancel it.</p>
      </div>
    </div>
  );
};

export default FAQs;
