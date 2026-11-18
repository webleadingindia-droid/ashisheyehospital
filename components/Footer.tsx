import Link from 'next/link';
import { HOSPITAL_ADDRESS, HOSPITAL_EMAIL, HOSPITAL_PHONE, HOSPITAL_WHATSAPP, SERVICES } from '@/lib/config';

const QUICK = [
  ['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'], ['/doctors', 'Our Doctors'],
  ['/gallery', 'Gallery'], ['/blog', 'Blog'], ['/contact', 'Contact Us'], ['/appointment', 'Book Appointment'],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col footer-brand">
              <div className="footer-logo">
                <Link href="/" className="navbar-brand">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/img/logo.jpg" width={280} alt="Ashish Eye Hospital" />
                </Link>
              </div>
              <p>Committed to restoring and preserving your vision with world-class eye care, advanced technology, and compassionate specialists.</p>
              <div className="footer-rating">
                <div className="stars">
                  {[0, 1, 2, 3, 4].map(i => <i key={i} className="fas fa-star"></i>)}
                </div>
                <span>5.0 – Rated on Google</span>
              </div>
              <div className="footer-social">
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
                <a href={`https://wa.me/${HOSPITAL_WHATSAPP}`} aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                {QUICK.map(([href, label]) => (
                  <li key={href}><Link href={href}><i className="fas fa-angle-right"></i> {label}</Link></li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h4>Our Services</h4>
              <ul className="footer-links">
                {SERVICES.map(s => (
                  <li key={s.slug}><Link href={`/services#${s.slug}`}><i className="fas fa-angle-right"></i> {s.name}</Link></li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h4>Contact Us</h4>
              <ul className="footer-contact">
                <li><i className="fas fa-map-marker-alt"></i><span>{HOSPITAL_ADDRESS}</span></li>
                <li><i className="fas fa-phone"></i><a href={`tel:${HOSPITAL_PHONE}`}>{HOSPITAL_PHONE}</a></li>
                <li><i className="fas fa-envelope"></i><a href={`mailto:${HOSPITAL_EMAIL}`}>{HOSPITAL_EMAIL}</a></li>
                <li><i className="fas fa-clock"></i><span>Mon – Sat: 9:00 AM – 7:00 PM<br />Sunday: By Appointment</span></li>
              </ul>
              <Link href="/appointment" className="btn btn-primary btn-sm mt-20">
                <i className="fas fa-calendar-check"></i> Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Ashish Eye Hospital. All Rights Reserved. | Designed with <i className="fas fa-heart" style={{ color: '#e74c3c' }}></i> in Surat</p>
          <p><a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a> | <a href="#">Disclaimer</a></p>
        </div>
      </div>
    </footer>
  );
}
