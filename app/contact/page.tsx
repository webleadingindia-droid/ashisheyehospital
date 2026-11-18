import Link from 'next/link';
import { Fragment } from 'react';
import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: "Contact Us – Ashish Eye Hospital Surat | Phone, Address & Map",
  description: "Contact Ashish Eye Hospital, Surat. Address: 7th Floor, Oxygen House, Mota Varachha. Phone: +91 70435 99108. Open Mon–Sat 9 AM–7 PM. Get directions & book online.",
};

const faqs = [
                {q: 'What are your hospital timings?', a: 'We are open Monday to Saturday from 9:00 AM to 7:00 PM. On Sundays, consultations are available by prior appointment only. For emergencies, please call us at +91 70435 99108.'},
                {q: 'How do I reach Ashish Eye Hospital?', a: 'We are located at the 7th Floor, Oxygen House, Near Sudama Chowk, Mota Varachha, Surat – 394101. The hospital is easily accessible from all parts of Surat. You can find us on Google Maps by searching "Ashish Eye Hospital Surat".'},
                {q: 'Is parking available near the hospital?', a: 'Yes, parking is available in and around Oxygen House building. The location near Sudama Chowk is well-connected by auto-rickshaw and other local transport from all areas of Surat.'},
                {q: 'Do you accept walk-in patients?', a: 'Yes, we welcome walk-in patients during our regular working hours. However, for specialized consultations with a particular doctor, we recommend booking an appointment in advance to minimize wait time.'},
                {q: 'How can I book an appointment?', a: 'You can book an appointment by calling +91 70435 99108, using our online appointment form on this website, sending a WhatsApp message, or visiting us directly at the hospital.'},
            ];

export default function Page() {
  return (
    <>
<div className="page-hero">
<div className="container">
<h1>
Contact Us
</h1>
<p>
We're here to help. Reach us by phone, email, or visit us at our Mota Varachha location.
</p>
<div className="breadcrumb">
<Link href="/">
Home
</Link>
<i className="fas fa-chevron-right">
</i>
<span>
Contact Us
</span>
</div>
</div>
</div>
<section className="section-padding">
<div className="container">
<div className="contact-grid">
{/* Info Panel */}
<div className="contact-info-card reveal-left">
<h3>
Get In Touch
</h3>
<p>
Whether you have a question, want to book an appointment, or just need guidance on your eye health, our friendly team is ready to help.
</p>
<div className="contact-detail">
<div className="contact-detail-icon">
<i className="fas fa-map-marker-alt">
</i>
</div>
<div className="contact-detail-text">
<strong>
Hospital Address
</strong>
<span>
7th Floor, Oxygen House,
<br />
Near Sudama Chowk, Mota Varachha,
<br />
Surat, Gujarat 394101
</span>
</div>
</div>
<div className="contact-detail">
<div className="contact-detail-icon">
<i className="fas fa-phone">
</i>
</div>
<div className="contact-detail-text">
<strong>
Phone Number
</strong>
<a href="tel:+917043599108">
+91 70435 99108
</a>
</div>
</div>
<div className="contact-detail">
<div className="contact-detail-icon">
<i className="fas fa-envelope">
</i>
</div>
<div className="contact-detail-text">
<strong>
Email Address
</strong>
<a href="mailto:info@ashisheyehospital.com">
info@ashisheyehospital.com
</a>
</div>
</div>
<div className="contact-detail">
<div className="contact-detail-icon">
<i className="fas fa-clock">
</i>
</div>
<div className="contact-detail-text">
<strong>
Working Hours
</strong>
<span>
Monday – Saturday: 9:00 AM – 7:00 PM
<br />
Sunday: By Appointment Only
</span>
</div>
</div>
<div className="contact-detail">
<div className="contact-detail-icon">
<i className="fab fa-whatsapp">
</i>
</div>
<div className="contact-detail-text">
<strong>
WhatsApp
</strong>
<a href="https://wa.me/917043599108" target="_blank">
Chat with us on WhatsApp
</a>
</div>
</div>
{/* Social Links */}
<div style={{ marginTop: "32px", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,.15)" }}>
<p style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem", marginBottom: "16px" }}>
Follow us for eye health tips & updates:
</p>
<div className="footer-social">
<a href="#" aria-label="Facebook">
<i className="fab fa-facebook-f">
</i>
</a>
<a href="#" aria-label="Instagram">
<i className="fab fa-instagram">
</i>
</a>
<a href="#" aria-label="YouTube">
<i className="fab fa-youtube">
</i>
</a>
<a href="https://wa.me/917043599108" aria-label="WhatsApp">
<i className="fab fa-whatsapp">
</i>
</a>
</div>
</div>
</div>
{/* Contact Form */}
<div className="contact-form-card reveal-right">
<h3>
Send Us a Message
</h3>
<p>
Fill in the form below and our team will respond within 24 hours.
</p>
<ContactForm />
{/* Quick Contact Options */}
<div style={{ marginTop: "28px", paddingTop: "24px", borderTop: "1px solid var(--grey-200)" }}>
<p style={{ fontSize: ".85rem", color: "var(--grey-600)", marginBottom: "14px", fontWeight: "600" }}>
Or reach us directly:
</p>
<div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
<a href="tel:+917043599108" className="btn btn-outline btn-sm">
<i className="fas fa-phone">
</i>
 Call Now
</a>
<a href="https://wa.me/917043599108" target="_blank" className="btn btn-sm" style={{ background: "#25d366", color: "#fff" }}>
<i className="fab fa-whatsapp">
</i>
 WhatsApp
</a>
<Link href="/appointment" className="btn btn-primary btn-sm">
<i className="fas fa-calendar">
</i>
 Book Appointment
</Link>
</div>
</div>
</div>
</div>
{/* Google Map */}
<div className="reveal" style={{ marginTop: "48px" }}>
<div className="section-header" style={{ marginBottom: "24px" }}>
<span className="section-label">
Find Us
</span>
<h2>
Our Location
</h2>
<div className="section-divider">
</div>
<p>
7th Floor, Oxygen House, Near Sudama Chowk, Mota Varachha, Surat, Gujarat 394101
</p>
</div>
<div className="map-wrapper">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.123!2d72.877!3d21.227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e9867b9ce85%3A0x8a89e4b2f1f9b36c!2sMota%20Varachha%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ashish Eye Hospital Location – Mota Varachha, Surat" aria-label="Google Map showing Ashish Eye Hospital location">
</iframe>
</div>
<div style={{ display: "flex", gap: "12px", justifyContent: "center", marginTop: "20px", flexWrap: "wrap" }}>
<a href="https://www.google.com/maps/dir/?api=1&destination=Oxygen+House+Mota+Varachha+Surat" target="_blank" rel="noopener" className="btn btn-primary">
<i className="fas fa-directions">
</i>
 Get Directions
</a>
<a href="https://wa.me/917043599108?text=I%20need%20directions%20to%20Ashish%20Eye%20Hospital" target="_blank" className="btn btn-outline">
<i className="fab fa-whatsapp">
</i>
 Ask on WhatsApp
</a>
</div>
</div>
{/* FAQ Section */}
<div className="section-header reveal" style={{ marginTop: "72px", marginBottom: "32px" }}>
<span className="section-label">
Quick Answers
</span>
<h2>
Frequently Asked Questions
</h2>
<div className="section-divider">
</div>
</div>
<div className="faq-list">
{faqs.map((faq, _i) => {  return (<Fragment key={_i}>
<div className="faq-item reveal">
<div className="faq-question">
<span>
{faq.q}
</span>
<i className="fas fa-chevron-down">
</i>
</div>
<div className="faq-answer">
{faq.a}
</div>
</div>
</Fragment>); })}
</div>
</div>
</section>
    </>
  );
}
