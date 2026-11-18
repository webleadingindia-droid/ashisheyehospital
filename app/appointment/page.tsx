import Link from 'next/link';
import { Fragment } from 'react';
import { SERVICES } from '@/lib/config';
import type { Metadata } from 'next';
import AppointmentForm from '@/components/AppointmentForm';

export const metadata: Metadata = {
  title: "Book Appointment – Ashish Eye Hospital Surat | Online Eye Consultation",
  description: "Book an eye consultation at Ashish Eye Hospital Surat. Easy online appointment form for Cataract, LASIK, Retina, Glaucoma and all eye care services.",
};

const items = [
                            'Previous eye prescriptions or glasses',
                            'Old medical reports / discharge summaries',
                            'List of current medications',
                            'Photo ID (Aadhar card etc.)',
                            'Insurance card (if applicable)',
                        ];

export default function Page() {
  return (
    <>
<div className="page-hero">
<div className="container">
<h1>
Book an Appointment
</h1>
<p>
Schedule your consultation with our expert ophthalmologists in just a few clicks.
</p>
<div className="breadcrumb">
<Link href="/">
Home
</Link>
<i className="fas fa-chevron-right">
</i>
<span>
Book Appointment
</span>
</div>
</div>
</div>
<section className="section-padding">
<div className="container">
<div className="appt-page-grid">
{/* Info Panel */}
<div className="appt-info-panel reveal-left">
<span className="section-label">
Appointment Info
</span>
<h3>
How to Book
</h3>
<p>
Fill in the form with your details and preferred time. Our team will call you within 2–4 hours to confirm your appointment slot.
</p>
<div className="appt-steps">
<div className="appt-step">
<div className="appt-step-num">
1
</div>
<div className="appt-step-text">
<strong>
Fill the Form
</strong>
<span>
Enter your name, contact, desired service, and preferred date.
</span>
</div>
</div>
<div className="appt-step">
<div className="appt-step-num">
2
</div>
<div className="appt-step-text">
<strong>
We Confirm
</strong>
<span>
Our team will call you within 2–4 hours to confirm and finalize your slot.
</span>
</div>
</div>
<div className="appt-step">
<div className="appt-step-num">
3
</div>
<div className="appt-step-text">
<strong>
Visit Us
</strong>
<span>
Come to 7th Floor, Oxygen House, Mota Varachha on your scheduled day.
</span>
</div>
</div>
<div className="appt-step">
<div className="appt-step-num">
4
</div>
<div className="appt-step-text">
<strong>
Get Expert Care
</strong>
<span>
Consult with our specialist and receive a personalised treatment plan.
</span>
</div>
</div>
</div>
{/* Quick Info */}
<div style={{ marginTop: "32px", background: "var(--blue-50)", border: "1px solid var(--blue-100)", borderRadius: "var(--radius-lg)", padding: "24px" }}>
<h4 style={{ fontSize: "1rem", marginBottom: "16px", color: "var(--blue-900)" }}>
<i className="fas fa-info-circle" style={{ color: "var(--blue-500)", marginRight: "8px" }}>
</i>
{" "}What to Bring
</h4>
<ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
{items.map((item, _i) => {  return (<Fragment key={_i}>
<li style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: ".85rem", color: "var(--grey-700)" }}>
<i className="fas fa-check-circle" style={{ color: "var(--success)", marginTop: "2px", flexShrink: "0" }}>
</i>
{" "}{item}
</li>
</Fragment>); })}
</ul>
</div>
{/* Contact Direct */}
<div style={{ marginTop: "20px", padding: "20px", background: "var(--blue-900)", borderRadius: "var(--radius-lg)", color: "#fff" }}>
<p style={{ fontSize: ".85rem", color: "rgba(255,255,255,.7)", marginBottom: "14px" }}>
Prefer to book by phone?
</p>
<a href="tel:+917043599108" className="btn btn-white btn-sm btn-full">
<i className="fas fa-phone">
</i>
 +91 70435 99108
</a>
<a href="https://wa.me/917043599108?text=I%20would%20like%20to%20book%20an%20appointment" target="_blank" className="btn btn-sm btn-full" style={{ background: "#25d366", color: "#fff", marginTop: "10px" }}>
<i className="fab fa-whatsapp">
</i>
 WhatsApp Us
</a>
</div>
</div>
{/* Appointment Form */}
<div className="appt-form-card reveal-right">
<h3>
Request Your Appointment
</h3>
<p>
Fields marked with * are required. We'll confirm your slot within 2–4 hours.
</p>
<AppointmentForm />
</div>
</div>
{/* Services Quick Links */}
<div className="section-header reveal" style={{ marginTop: "72px", marginBottom: "32px" }}>
<span className="section-label">
Book by Service
</span>
<h2>
Select Your Treatment
</h2>
<div className="section-divider">
</div>
</div>
<div className="services-grid">
{SERVICES.map((svc, i) => { const delay = (i % 4) + 1; return (<Fragment key={i}>
<Link href={`/appointment?service=${encodeURIComponent(svc.name)}`} className={`service-card reveal delay-${delay}`} style={{ display: "block", textDecoration: "none", color: "inherit" }}>
<div className="service-icon">
<i className={`fas ${svc.icon}`}>
</i>
</div>
<h3>
{svc.name}
</h3>
<span className="learn-more">
Book Now 
<i className="fas fa-arrow-right">
</i>
</span>
</Link>
</Fragment>); })}
</div>
</div>
</section>
    </>
  );
}
