import Link from 'next/link';
import { Fragment } from 'react';
import type { Metadata } from 'next';
import GalleryGrid from '@/components/GalleryGrid';
import './gallery.css';

export const metadata: Metadata = {
  title: "Gallery – Ashish Eye Hospital Surat | Hospital & Facility Photos",
  description: "Explore the world-class facilities, operation theatre, and patient care areas at Ashish Eye Hospital, Surat. See our advanced equipment and comfortable environment.",
};

const gallery_items = [
    {
        image: '/img/gallery-1.jpg',
        label: 'Reception & Waiting Area',
        desc: 'Our modern, air-conditioned reception with comfortable seating for patients and attendants.',
        category: 'facility'
    },
    {
        image: '/img/gallery-2.jpg',
        label: 'Diagnostic Equipment Room',
        desc: 'State-of-the-art OCT, corneal topography, and visual field testing equipment.',
        category: 'equipment'
    },
    {
        image: '/img/gallery-3.jpg',
        label: 'Modular Operation Theatre',
        desc: 'Our fully equipped, sterile modular OT with advanced surgical microscope and phaco system.',
        category: 'facility'
    },
    {
        image: '/img/gallery-4.jpg',
        label: 'Consultation Room',
        desc: 'Private, fully equipped consultation rooms for thorough eye examinations.',
        category: 'facility'
    },
    {
        image: '/img/gallery-5.jpg',
        label: 'Slit Lamp Examination',
        desc: 'Digital slit lamp biomicroscope for high-magnification anterior eye examination.',
        category: 'equipment'
    },
    {
        image: '/img/gallery-6.jpg',
        label: 'Laser Treatment Suite',
        desc: 'Dedicated laser room for LASIK, SLT, and retinal laser procedures.',
        category: 'procedure'
    },
    {
        image: '/img/gallery-7.jpg',
        label: 'Pediatric Eye Care Zone',
        desc: 'Child-friendly examination area designed to make young patients feel at ease.',
        category: 'facility'
    },
    {
        image: '/img/gallery-8.jpg',
        label: 'Contact Lens Clinic',
        desc: 'Dedicated contact lens fitting and dispensing clinic with a wide range of lens options.',
        category: 'equipment'
    },
];

export default function Page() {
  return (
    <>
<div className="page-hero">
<div className="container">
<h1>
Hospital Gallery
</h1>
<p>
Take a virtual tour of our world-class facilities and advanced medical equipment.
</p>
<div className="breadcrumb">
<Link href="/">
Home
</Link>
<i className="fas fa-chevron-right">
</i>
<span>
Gallery
</span>
</div>
</div>
</div>
{/* Gallery Filter Tabs */}
<section className="section-padding">
<div className="container">
<div className="section-header reveal">
<span className="section-label">
Our Facility
</span>
<h2>
Inside Ashish Eye Hospital
</h2>
<div className="section-divider">
</div>
<p>
We have invested in creating a comfortable, hygienic, and technologically advanced environment where patients receive the best possible care. Click on any image to view it in detail.
</p>
</div>
{/* Gallery Grid */} <GalleryGrid items={gallery_items} />
</div>
</section>
{/* Virtual Tour CTA */}
<section style={{ background: "var(--blue-50)", padding: "60px 0", borderTop: "1px solid var(--blue-100)" }}>
<div className="container">
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }} className="reveal">
<div>
<span className="section-label">
Visit Us
</span>
<h2 style={{ fontSize: "2rem", margin: "12px 0" }}>
Come See for Yourself
</h2>
<p style={{ color: "var(--grey-600)", lineHeight: "1.8", marginBottom: "24px" }}>
We believe in transparency. We warmly invite you to visit our hospital, meet our team, and see our facilities firsthand before scheduling any procedure. Our staff will be happy to show you around and answer all your questions.
</p>
<div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "28px" }}>
<div style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: ".9rem", color: "var(--grey-700)" }}>
<i className="fas fa-map-marker-alt" style={{ color: "var(--blue-500)", marginTop: "3px" }}>
</i>
<span>
<strong>
7th Floor, Oxygen House
</strong>
, Near Sudama Chowk, Mota Varachha, Surat – 394101
</span>
</div>
<div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: ".9rem", color: "var(--grey-700)" }}>
<i className="fas fa-clock" style={{ color: "var(--blue-500)" }}>
</i>
<span>
Monday to Saturday: 
<strong>
9:00 AM – 7:00 PM
</strong>
</span>
</div>
<div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: ".9rem", color: "var(--grey-700)" }}>
<i className="fas fa-phone" style={{ color: "var(--blue-500)" }}>
</i>
<a href="tel:+917043599108" style={{ color: "var(--grey-700)" }}>
<strong>
+91 70435 99108
</strong>
</a>
</div>
</div>
<div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
<Link href="/appointment" className="btn btn-primary">
<i className="fas fa-calendar-check">
</i>
 Book Appointment
</Link>
<Link href="/contact" className="btn btn-outline">
<i className="fas fa-map">
</i>
 Get Directions
</Link>
</div>
</div>
<div>
<div style={{ background: "linear-gradient(135deg,var(--blue-600),var(--teal))", borderRadius: "var(--radius-xl)", padding: "40px", textAlign: "center", color: "#fff", boxShadow: "var(--shadow-blue)" }}>
<i className="fas fa-hospital" style={{ fontSize: "4rem", opacity: ".4", marginBottom: "20px", display: "block" }}>
</i>
<h3 style={{ color: "#fff", fontSize: "1.5rem", marginBottom: "12px" }}>
Ashish Eye Hospital
</h3>
<p style={{ color: "rgba(255,255,255,.75)", fontSize: ".9rem", marginBottom: "20px" }}>
7th Floor, Oxygen House, Near Sudama Chowk, Mota Varachha, Surat, Gujarat 394101
</p>
<div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,.15)", padding: "8px 20px", borderRadius: "99px", fontSize: ".85rem" }}>
<i className="fas fa-star" style={{ color: "#fbbf24" }}>
</i>
<span>
5.0 / 5.0 – Google Rated
</span>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="cta-band">
<div className="container reveal">
<h2>
Ready to Experience World-Class Eye Care?
</h2>
<p>
Book your appointment today and let us take care of your precious vision.
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
