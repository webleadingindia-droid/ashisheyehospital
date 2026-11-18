import Link from 'next/link';
import { Fragment } from 'react';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Our Doctors – Ashish Eye Hospital Surat | Expert Ophthalmologists",
  description: "Meet the expert ophthalmologists at Ashish Eye Hospital, Surat. Our board-certified eye specialists have decades of experience in cataract, LASIK, retina, and glaucoma treatment.",
};

const doctors = [
    {
        name: 'Dr. Ashish Patel',
        initials: 'AP',
        specialty: 'Senior Ophthalmologist & Cataract Surgeon',
        qual: 'MBBS, MS (Ophthalmology), Fellowship in Phacoemulsification',
        exp: '15+ Years',
        ops: '5,000+',
        expertise: ['Cataract Surgery (Phaco)', 'Premium IOL Implantation', 'LASIK Surgery', 'Anterior Segment Disorders'],
        about: 'Dr. Ashish Patel is the founder and senior ophthalmologist at Ashish Eye Hospital. With over 15 years of experience and more than 5,000 successful cataract surgeries, he is one of Surat\'s most sought-after cataract and refractive surgeons. He completed his post-graduation from a prestigious medical college and underwent fellowship training in advanced phacoemulsification techniques.',
        langs: 'Gujarati, Hindi, English',
        avail: 'Mon–Sat: 10 AM – 2 PM & 5 PM – 8 PM',
    },
    {
        name: 'Dr. Priya Mehta',
        initials: 'PM',
        specialty: 'Retina & Vitreous Specialist',
        qual: 'MBBS, MS (Ophthalmology), Fellowship in Vitreoretinal Surgery',
        exp: '10+ Years',
        ops: '2,000+',
        expertise: ['Retinal Detachment Surgery', 'Diabetic Retinopathy', 'Anti-VEGF Injections', 'Macular Degeneration'],
        about: 'Dr. Priya Mehta is a highly skilled retina and vitreous specialist with 10 years of dedicated expertise in the medical and surgical management of complex retinal conditions. She has completed her vitreoretinal fellowship from a nationally reputed institute and has published research in peer-reviewed ophthalmology journals.',
        langs: 'Gujarati, Hindi, English',
        avail: 'Mon–Fri: 9 AM – 1 PM & 4 PM – 7 PM',
    },
    {
        name: 'Dr. Rajiv Shah',
        initials: 'RS',
        specialty: 'LASIK & Refractive Surgery Expert',
        qual: 'MBBS, DNB (Ophthalmology), Fellowship in Refractive Surgery',
        exp: '12+ Years',
        ops: '3,500+',
        expertise: ['Femtosecond LASIK', 'SMILE Surgery', 'PRK / LASEK', 'Wavefront-Guided LASIK'],
        about: 'Dr. Rajiv Shah is a leading refractive surgeon with over 12 years of experience and more than 3,500 laser eye correction procedures performed. He is an expert in the latest laser vision correction technologies and has helped thousands of patients achieve spectacle-free vision. He is known for his meticulous pre-surgical evaluation and patient counselling.',
        langs: 'Gujarati, Hindi, English',
        avail: 'Mon, Wed, Fri: 11 AM – 3 PM & 6 PM – 8 PM',
    },
    {
        name: 'Dr. Meera Joshi',
        initials: 'MJ',
        specialty: 'Pediatric Ophthalmologist & Squint Specialist',
        qual: 'MBBS, MS (Ophthalmology), Fellowship in Pediatric Ophthalmology',
        exp: '8+ Years',
        ops: '1,500+',
        expertise: ['Pediatric Eye Exams', 'Amblyopia (Lazy Eye)', 'Strabismus Surgery', 'Pediatric Glaucoma'],
        about: 'Dr. Meera Joshi specializes in pediatric ophthalmology and squint surgery. With 8 years of experience, she is particularly adept at making children feel comfortable and at ease during eye examinations. Her gentle approach and expertise have helped hundreds of children regain normal visual development and binocular vision.',
        langs: 'Gujarati, Hindi, English',
        avail: 'Tue, Thu, Sat: 10 AM – 2 PM',
    },
    {
        name: 'Dr. Kiran Patel',
        initials: 'KP',
        specialty: 'Glaucoma Specialist & Cornea Expert',
        qual: 'MBBS, MS (Ophthalmology), Fellowship in Glaucoma & Cornea',
        exp: '9+ Years',
        ops: '1,800+',
        expertise: ['Glaucoma Surgery', 'Selective Laser Trabeculoplasty', 'Corneal Transplant', 'Keratoconus Management'],
        about: 'Dr. Kiran Patel is a dual fellowship-trained ophthalmologist specialising in glaucoma and corneal diseases. He has extensive experience in managing complex glaucoma cases and performing advanced corneal surgeries including DALK and DMEK. He is passionate about early glaucoma detection and preserving lifelong vision for his patients.',
        langs: 'Gujarati, Hindi, English',
        avail: 'Mon–Sat: 2 PM – 6 PM',
    },
];

export default function Page() {
  return (
    <>
<div className="page-hero">
<div className="container">
<h1>
Meet Our Expert Doctors
</h1>
<p>
Board-certified ophthalmologists with decades of combined experience, dedicated to your vision health.
</p>
<div className="breadcrumb">
<Link href="/">
Home
</Link>
<i className="fas fa-chevron-right">
</i>
<span>
Our Doctors
</span>
</div>
</div>
</div>
<section className="section-padding">
<div className="container">
<div className="section-header reveal">
<span className="section-label">
Our Team
</span>
<h2>
Specialists Who Care About Your Vision
</h2>
<div className="section-divider">
</div>
<p>
Each of our doctors brings specialized training, years of experience, and genuine compassion to deliver the best possible care for your eyes.
</p>
</div>
{doctors.map((doc, i) => {  return (<Fragment key={i}>
<div className="reveal doctor-hover-card" style={{ background: "var(--white)", border: "1.5px solid var(--grey-200)", borderRadius: "var(--radius-xl)", padding: "40px", marginBottom: "32px", boxShadow: "var(--shadow-sm)", transition: "var(--transition)" }}>
<div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "36px", alignItems: "start" }}>
<div style={{ textAlign: "center" }}>
<div className="doctor-photo-placeholder" style={{ width: "110px", height: "110px", fontSize: "2rem", margin: "0 auto 12px" }}>
{doc.initials}
</div>
<div style={{ fontSize: ".75rem", color: "var(--grey-500)", lineHeight: "1.6" }}>
<i className="fas fa-clock" style={{ color: "var(--blue-400)" }}>
</i>
<br />
<strong style={{ color: "var(--grey-700)" }}>
Availability
</strong>
<br />
{doc.avail}
</div>
<Link href={`/appointment?doctor=${encodeURIComponent(doc.name)}`} className="btn btn-primary btn-sm" style={{ marginTop: "16px" }}>
<i className="fas fa-calendar">
</i>
 Book
</Link>
</div>
<div>
<div className="doctor-specialty">
{doc.specialty}
</div>
<h2 style={{ fontSize: "1.7rem", marginBottom: "6px" }}>
{doc.name}
</h2>
<p style={{ fontSize: ".85rem", color: "var(--grey-500)", marginBottom: "16px" }}>
{doc.qual}
</p>
<p style={{ color: "var(--grey-600)", lineHeight: "1.8", marginBottom: "20px" }}>
{doc.about}
</p>
<div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "20px" }}>
<div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: ".85rem" }}>
<i className="fas fa-briefcase" style={{ color: "var(--blue-400)" }}>
</i>
<strong>
{doc.exp} Experience
</strong>
</div>
<div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: ".85rem" }}>
<i className="fas fa-procedures" style={{ color: "var(--blue-400)" }}>
</i>
<strong>
{doc.ops} Procedures
</strong>
</div>
<div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: ".85rem" }}>
<i className="fas fa-language" style={{ color: "var(--blue-400)" }}>
</i>
<span>
{doc.langs}
</span>
</div>
</div>
<div>
<strong style={{ fontSize: ".85rem", color: "var(--blue-900)", display: "block", marginBottom: "10px" }}>
Areas of Expertise:
</strong>
<div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
{doc.expertise.map((exp, _i) => {  return (<Fragment key={_i}>
<span style={{ background: "var(--blue-50)", color: "var(--blue-700)", padding: "5px 14px", borderRadius: "var(--radius-full)", fontSize: ".8rem", fontWeight: "500", border: "1px solid var(--blue-100)" }}>
{exp}
</span>
</Fragment>); })}
</div>
</div>
</div>
</div>
</div>
</Fragment>); })}
</div>
</section>
<section className="cta-band">
<div className="container reveal">
<h2>
Consult Our Specialists Today
</h2>
<p>
Book a consultation with one of our expert ophthalmologists and take the first step towards better eye health.
</p>
<div className="cta-band-actions">
<Link href="/appointment" className="btn btn-white">
<i className="fas fa-calendar-check">
</i>
 Book Appointment
</Link>
<a href="tel:+917043599108" className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,.5)", color: "#fff" }}>
<i className="fas fa-phone">
</i>
 +91 70435 99108
</a>
</div>
</div>
</section>
    </>
  );
}
