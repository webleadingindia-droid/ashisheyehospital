import Link from 'next/link';
import { Fragment } from 'react';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: "About Us – Ashish Eye Hospital Surat | Our Story & Mission",
  description: "Learn about Ashish Eye Hospital, Surat's trusted eye care centre. Our mission, values, expert team, and world-class facilities dedicated to your vision health.",
};

const stats = [
                {num: '11,000+', label: 'Patients Treated', icon: 'fa-users'},
                {num: '13+', label: 'Years of Experience', icon: 'fa-calendar-check'},
                {num: '8', label: 'Specialties Offered', icon: 'fa-stethoscope'},
                {num: '5.0 ★', label: 'Google Rating', icon: 'fa-star'},
            ];

const infra = [
                {icon: 'fa-microscope', title: 'OCT Machine', desc: 'Optical Coherence Tomography for detailed cross-sectional imaging of the retina and optic nerve.'},
                {icon: 'fa-bolt', title: 'Femtosecond Laser', desc: 'Bladeless LASIK and cataract surgery with femtosecond laser precision for superior outcomes.'},
                {icon: 'fa-eye', title: 'Slit Lamp Biomicroscope', desc: 'High-magnification examination of all anterior and posterior eye structures with digital imaging.'},
                {icon: 'fa-chart-line', title: 'Corneal Topography', desc: 'Keratoconus screening and contact lens fitting with advanced corneal mapping technology.'},
                {icon: 'fa-heartbeat', title: 'Automated Perimetry', desc: 'Comprehensive visual field testing for early glaucoma detection and monitoring.'},
                {icon: 'fa-video', title: 'Digital Fundus Camera', desc: 'High-resolution retinal photography for diabetic retinopathy screening and documentation.'},
                {icon: 'fa-hospital', title: 'Modular OT', desc: 'State-of-the-art modular operation theatre with advanced surgical microscope and phaco systems.'},
                {icon: 'fa-users', title: 'Comfortable Waiting Area', desc: 'AC waiting area, comfortable seating, and patient-friendly environment on the 7th floor, Oxygen House.'},
            ];

export default function Page() {
  return (
    <>
<div className="page-hero">
<div className="container">
<h1>
About Ashish Eye Hospital
</h1>
<p>
Surat's most trusted eye care destination – combining expertise, technology, and compassion since 2016.
</p>
<div className="breadcrumb">
<Link href="/">
Home
</Link>
<i className="fas fa-chevron-right">
</i>
<span>
About Us
</span>
</div>
</div>
</div>
{/* About Intro */}
<section className="section-padding">
<div className="container">
<div className="about-intro">
<div className="about-visual reveal-left">
<div className="about-img-placeholder">
<img src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAHXro8pPHJ6VH46W-EW49BgwvHv_SWdPOEfHOjRxiwh7YEugAJfMIqHJofof3kawWtrRkTPLoSjBJ-JJgn4Qu5MMfDLx5pzkFnurDSTKYgej6-_uFjXB-HefitS8Todlpt1iY4Gk7ZifLc=s1360-w1360-h1020-rw" alt="Ashish Eye Hospital" />
</div>
<div className="about-badge-float">
<i className="fas fa-award">
</i>
<div>
<strong>
13+ Years
</strong>
<span>
of Clinical Excellence
</span>
</div>
</div>
</div>
<div className="about-text reveal-right">
<span className="section-label">
Our Story
</span>
<h2>
Dedicated to Protecting the Gift of Sight
</h2>
<p>
Founded in 2016, Ashish Eye Hospital has grown to become one of the most trusted and respected eye care centres in Surat, Gujarat. What began as a vision to provide affordable, world-class eye care to the people of Surat has grown into a comprehensive multi-specialty ophthalmic centre serving thousands of patients every year.
</p>
<p>
We are located at the 7th Floor, Oxygen House, Mota Varachha – a central location accessible to patients from all parts of Surat and surrounding areas including Bardoli, Navsari, Vyara, and beyond.
</p>
<p>
Our hospital is equipped with the latest ophthalmic technology and staffed by some of the most experienced eye surgeons and specialists in the region. We treat every patient as a member of our family – with dignity, empathy, and personalized care.
</p>
<div className="about-highlights">
<div className="about-highlight">
<i className="fas fa-check-circle">
</i>
<div className="about-highlight-text">
<strong>
11,000+ Patients Treated
</strong>
<span>
Successful surgeries & treatments
</span>
</div>
</div>
<div className="about-highlight">
<i className="fas fa-star">
</i>
<div className="about-highlight-text">
<strong>
5.0 Google Rating
</strong>
<span>
Based on genuine patient reviews
</span>
</div>
</div>
<div className="about-highlight">
<i className="fas fa-user-md">
</i>
<div className="about-highlight-text">
<strong>
Expert Specialist
</strong>
<span>
13+ years clinical experience
</span>
</div>
</div>
<div className="about-highlight">
<i className="fas fa-microscope">
</i>
<div className="about-highlight-text">
<strong>
Advanced Technology
</strong>
<span>
Latest diagnostic & surgical equipment
</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Know Your Doctor Section - Updated with New Content */}
<section className="section-padding" style={{ background: "var(--grey-50)" }}>
<div className="container">
<div className="section-header reveal">
<span className="section-label">
Know Your Doctor
</span>
<h2>
Dr. Ashish Bharoliya
</h2>
<div className="section-divider">
</div>
<p style={{ fontSize: "1.1rem", color: "var(--blue-600)", fontWeight: "500" }}>
M.B.B.S., M.S. | Eye Surgeon | Medical Retina Specialist
</p>
</div>
<div className="doctor-full-profile" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px,1fr))", gap: "40px" }}>
{/* Doctor Image & Basic Info */}
<div className="doctor-image-card" style={{ background: "#fff", borderRadius: "28px", padding: "30px", textAlign: "center", boxShadow: "var(--shadow-md)" }}>
<div style={{ width: "180px", height: "180px", background: "linear-gradient(135deg,var(--blue-600),var(--teal))", borderRadius: "50%", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
<i className="fas fa-user-md" style={{ fontSize: "4.5rem", color: "#fff" }}>
</i>
</div>
<h3 style={{ color: "var(--blue-800)", marginBottom: "5px" }}>
Dr. Ashish Bharoliya
</h3>
<p style={{ color: "var(--blue-600)", fontWeight: "500" }}>
M.B.B.S., M.S. (Ophthalmology)
</p>
<div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center", margin: "15px 0" }}>
<span style={{ background: "#e0f2fe", padding: "5px 15px", borderRadius: "50px", fontSize: "0.8rem" }}>
<i className="fas fa-microscope">
</i>
 Eye Surgeon
</span>
<span style={{ background: "#e0f2fe", padding: "5px 15px", borderRadius: "50px", fontSize: "0.8rem" }}>
<i className="fas fa-eye">
</i>
 Medical Retina Specialist
</span>
</div>
<div className="doctor-timing" style={{ marginTop: "20px", padding: "15px", background: "var(--blue-50)", borderRadius: "16px" }}>
<h4>
<i className="far fa-clock">
</i>
 OPD Timing
</h4>
<p>
<strong>
Monday to Saturday:
</strong>
 10:00 AM – 8:00 PM
</p>
</div>
</div>
{/* Doctor Detailed Info */}
<div className="doctor-details-card" style={{ background: "#fff", borderRadius: "28px", padding: "30px", boxShadow: "var(--shadow-md)" }}>
<div style={{ marginBottom: "20px" }}>
<h3 style={{ color: "var(--blue-800)" }}>
<i className="fas fa-graduation-cap">
</i>
 Education
</h3>
<ul style={{ listStyle: "none", paddingLeft: "0" }}>
<li style={{ marginBottom: "10px" }}>
<i className="fas fa-school" style={{ color: "var(--teal)", width: "25px" }}>
</i>
<strong>
School:
</strong>
 P. P. Savani School, Surat
</li>
<li style={{ marginBottom: "10px" }}>
<i className="fas fa-user-graduate" style={{ color: "var(--teal)", width: "25px" }}>
</i>
<strong>
M.B.B.S.
</strong>
 – B. J. Medical College, Ahmedabad
</li>
<li style={{ marginBottom: "10px" }}>
<i className="fas fa-stethoscope" style={{ color: "var(--teal)", width: "25px" }}>
</i>
<strong>
M.S. (Ophthalmology)
</strong>
 – M. P. Shah Medical College, Jamnagar
</li>
</ul>
</div>
<div style={{ marginBottom: "20px" }}>
<h3 style={{ color: "var(--blue-800)" }}>
<i className="fas fa-certificate">
</i>
 Fellowships & Training
</h3>
<ul style={{ listStyle: "none", paddingLeft: "0" }}>
<li style={{ marginBottom: "8px" }}>
<i className="fas fa-check-circle" style={{ color: "var(--teal)", width: "25px" }}>
</i>
 Phaco Fellowship – Narayana Nethralaya Hospital, Ahmedabad
</li>
<li style={{ marginBottom: "8px" }}>
<i className="fas fa-check-circle" style={{ color: "var(--teal)", width: "25px" }}>
</i>
 LASIK Training – Navodaya Eye Hospital, Rajkot
</li>
<li style={{ marginBottom: "8px" }}>
<i className="fas fa-check-circle" style={{ color: "var(--teal)", width: "25px" }}>
</i>
 Medical Retina Fellowship – Shankara Eye Hospital
</li>
</ul>
</div>
<div style={{ marginBottom: "20px" }}>
<h3 style={{ color: "var(--blue-800)" }}>
<i className="fas fa-briefcase">
</i>
 Experience
</h3>
<ul style={{ listStyle: "none", paddingLeft: "0" }}>
<li style={{ marginBottom: "8px" }}>
<i className="fas fa-star" style={{ color: "var(--teal)", width: "25px" }}>
</i>
 13+ years of clinical experience
</li>
<li style={{ marginBottom: "8px" }}>
<i className="fas fa-users" style={{ color: "var(--teal)", width: "25px" }}>
</i>
 11,000+ eye patients successfully treated
</li>
</ul>
</div>
<div>
<h3 style={{ color: "var(--blue-800)" }}>
<i className="fas fa-hospital-user">
</i>
 Previous Associations
</h3>
<ul style={{ listStyle: "none", paddingLeft: "0" }}>
<li style={{ marginBottom: "8px" }}>
<i className="fas fa-building" style={{ color: "var(--teal)", width: "25px" }}>
</i>
 Shree Sai Eye Hospital, Bhavnagar
</li>
<li style={{ marginBottom: "8px" }}>
<i className="fas fa-heartbeat" style={{ color: "var(--teal)", width: "25px" }}>
</i>
 Aankh Suraksha Charitable Hospital, Bhavnagar
</li>
<li style={{ marginBottom: "8px" }}>
<i className="fas fa-eye" style={{ color: "var(--teal)", width: "25px" }}>
</i>
 Dr. Agarwal's Eye Hospital, Varachha, Surat
</li>
</ul>
</div>
</div>
</div>
{/* Professional Profile Summary */}
<div className="doctor-summary" style={{ marginTop: "40px", background: "linear-gradient(135deg,var(--blue-50),#fff)", borderRadius: "24px", padding: "30px", borderLeft: "4px solid var(--teal)" }}>
<p style={{ fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "0" }}>
<strong>
Dr. Ashish Bharoliya, MBBS, MS (Ophthalmology),
</strong>
 is a highly experienced Eye Surgeon and Medical Retina Specialist with over 13 years of expertise in comprehensive eye care. He completed his MBBS from B.J. Medical College, Ahmedabad, and his MS in Ophthalmology from M.P. Shah Medical College, Jamnagar.
<br />
<br />
Dr. Bharoliya has undergone advanced training in Phaco Surgery, LASIK, and Medical Retina from renowned eye institutions across Gujarat. Throughout his career, he has successfully treated and operated on more than 11,000 patients.
<br />
<br />
Before founding Ashish Eye Hospital, he served at leading eye care centers including Shree Sai Eye Hospital (Bhavnagar), Aankh Suraksha Charitable Hospital (Bhavnagar), and Dr. Agarwal's Eye Hospital (Surat). His commitment to ethical practice, advanced technology, and patient-centered care has made him a trusted name in ophthalmology.
</p>
</div>
</div>
</section>
{/* Mission Vision Values */}
<section className="section-padding">
<div className="container">
<div className="section-header reveal">
<span className="section-label">
What Drives Us
</span>
<h2>
Our Mission, Vision & Values
</h2>
<div className="section-divider">
</div>
</div>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "28px" }}>
<div className="why-card reveal delay-1" style={{ background: "linear-gradient(135deg,var(--blue-600),var(--blue-800))", border: "none" }}>
<i className="fas fa-bullseye" style={{ color: "#93c5fd" }}>
</i>
<h4 style={{ color: "#fff" }}>
Our Mission
</h4>
<p style={{ color: "rgba(255,255,255,.75)" }}>
To provide accessible, affordable, and world-class eye care services to every patient who walks through our doors, using the most advanced technology with the utmost compassion and professionalism.
</p>
</div>
<div className="why-card reveal delay-2" style={{ background: "linear-gradient(135deg,var(--teal),var(--blue-600))", border: "none" }}>
<i className="fas fa-eye" style={{ color: "#bae6fd" }}>
</i>
<h4 style={{ color: "#fff" }}>
Our Vision
</h4>
<p style={{ color: "rgba(255,255,255,.75)" }}>
To be the most trusted, patient-centric, and technologically advanced eye care institution in Gujarat, recognized for clinical excellence, ethical practice, and exceptional patient outcomes.
</p>
</div>
<div className="why-card reveal delay-3" style={{ background: "linear-gradient(135deg,var(--blue-800),#0f172a)", border: "none" }}>
<i className="fas fa-heart" style={{ color: "#fca5a5" }}>
</i>
<h4 style={{ color: "#fff" }}>
Our Values
</h4>
<p style={{ color: "rgba(255,255,255,.75)" }}>
Integrity in every interaction. Excellence in clinical care. Empathy for every patient. Innovation in treatment. Accessibility for all sections of society.
</p>
</div>
</div>
</div>
</section>
{/* Stats Section */}
<section className="section-padding" style={{ background: "var(--blue-900)", position: "relative", overflow: "hidden" }}>
<div style={{ position: "absolute", inset: "0", background: "radial-gradient(circle at 30% 50%,rgba(59,130,246,.2),transparent 60%)" }}>
</div>
<div className="container" style={{ position: "relative", zIndex: "2" }}>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "40px", textAlign: "center" }}>
{stats.map((stat, i) => { const delay = i + 1; return (<Fragment key={i}>
<div className={`reveal delay-${delay}`}>
<i className={`fas ${stat.icon}`} style={{ fontSize: "2rem", color: "var(--blue-300)", marginBottom: "12px", display: "block" }}>
</i>
<div style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", fontWeight: "700", color: "#fff", marginBottom: "8px" }}>
{stat.num}
</div>
<div style={{ fontSize: ".85rem", color: "rgba(255,255,255,.6)", textTransform: "uppercase", letterSpacing: ".06em" }}>
{stat.label}
</div>
</div>
</Fragment>); })}
</div>
</div>
</section>
{/* Infrastructure */}
<section className="section-padding">
<div className="container">
<div className="section-header reveal">
<span className="section-label">
World-Class Facility
</span>
<h2>
Our Infrastructure & Technology
</h2>
<div className="section-divider">
</div>
<p>
We have invested in cutting-edge ophthalmic equipment to ensure accurate diagnosis and safe, effective treatment for all eye conditions.
</p>
</div>
<div className="services-grid">
{infra.map((item, i) => { const delay = (i % 4) + 1; return (<Fragment key={i}>
<div className={`service-card reveal delay-${delay}`}>
<div className="service-icon">
<i className={`fas ${item.icon}`}>
</i>
</div>
<h3>
{item.title}
</h3>
<p>
{item.desc}
</p>
</div>
</Fragment>); })}
</div>
</div>
</section>
{/* CTA */}
<section className="cta-band">
<div className="container reveal">
<h2>
Experience the Ashish Eye Hospital Difference
</h2>
<p>
Join the thousands of patients who have trusted us with their vision. Book your consultation today.
</p>
<div className="cta-band-actions">
<Link href="/appointment" className="btn btn-white">
<i className="fas fa-calendar-check">
</i>
 Book Appointment
</Link>
<Link href="/contact" className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,.5)", color: "#fff" }}>
<i className="fas fa-envelope">
</i>
 Contact Us
</Link>
</div>
</div>
</section>
    </>
  );
}
