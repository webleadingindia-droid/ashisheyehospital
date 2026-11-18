import { HOSPITAL_PHONE, HOSPITAL_WHATSAPP } from '@/lib/config';

export default function FloatingButtons() {
  return (
    <div className="floating-buttons">
      <a href={`https://wa.me/${HOSPITAL_WHATSAPP}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Ashish%20Eye%20Hospital.`}
         className="fab-btn fab-whatsapp" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
        <i className="fab fa-whatsapp"></i>
        <span>WhatsApp</span>
      </a>
      <a href={`tel:${HOSPITAL_PHONE}`} className="fab-btn fab-call" aria-label="Call Us">
        <i className="fas fa-phone"></i>
        <span>Call Now</span>
      </a>
      <button className="fab-btn fab-appt" id="openModal" aria-label="Book Appointment">
        <i className="fas fa-calendar-plus"></i>
        <span>Book Appt</span>
      </button>
    </div>
  );
}
