import Link from 'next/link';
import { Fragment } from 'react';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Patient Testimonials – Ashish Eye Hospital Surat | Real Patient Reviews",
  description: "Read genuine patient reviews and success stories from Ashish Eye Hospital, Surat. Rated 5.0 on Google. See why thousands trust us for their eye care needs.",
};

const testimonials = [
    {name:'Ramesh Gupta',   loc:'Mota Varachha, Surat', init:'R', service:'Cataract Surgery',   rating:5,
     text:'Ashish Eye Hospital completely transformed my life. I had severe cataract in both eyes and was almost unable to see. After the surgery, my vision is crystal clear. Dr. Ashish Patel is a genius. The doctors and staff are extremely professional and caring. Highly recommended to everyone!'},
    {name:'Kavita Sharma',  loc:'Varachha, Surat',      init:'K', service:'LASIK Surgery',      rating:5,
     text:'I had my LASIK done here last month and I am absolutely thrilled with the results. No more glasses after 15 years! The procedure was completely painless, the doctors explained everything in great detail beforehand, and the post-operative care was excellent. Best decision of my life!'},
    {name:'Dinesh Patel',   loc:'Adajan, Surat',        init:'D', service:'Pediatric Eye Care', rating:5,
     text:'My 8-year-old daughter was diagnosed with amblyopia (lazy eye). Dr. Meera Joshi is absolutely amazing with children – so patient and gentle. She explained everything to us in simple language. My daughter\'s vision has improved dramatically in just 6 months. Forever grateful!'},
    {name:'Sunita Joshi',   loc:'Katargam, Surat',      init:'S', service:'Retina Treatment',   rating:5,
     text:'My father has been diabetic for 20 years and we were very worried about his eyes. The team at Ashish Eye Hospital did a thorough retinal screening and detected early signs of diabetic retinopathy. Timely treatment was started and his vision has been preserved. Cannot thank them enough.'},
    {name:'Mukesh Agarwal', loc:'Limbayat, Surat',      init:'M', service:'Glaucoma Treatment', rating:5,
     text:'World-class facilities in Surat! I never thought I would find such advanced eye care right here in our city. My glaucoma is now well-managed under Dr. Kiran Patel\'s supervision. He is very knowledgeable and explains everything clearly. 5 stars is not enough for this hospital!'},
    {name:'Anita Desai',    loc:'Udhna, Surat',         init:'A', service:'Contact Lens Clinic',rating:5,
     text:'Visited for contact lens fitting. The optometrist was very helpful, understood my lifestyle and work demands, and recommended the perfect lenses for me. The prices are very reasonable. The entire staff is friendly and welcoming. Will definitely return for my annual checkups.'},
    {name:'Harish Trivedi', loc:'Kapodra, Surat',       init:'H', service:'Cornea Treatment',   rating:5,
     text:'I was suffering from keratoconus for 3 years and had visited multiple hospitals without finding a proper solution. Dr. Kiran Patel performed corneal cross-linking at Ashish Eye Hospital and my cornea has stabilized beautifully. Vision improvement has been remarkable. Excellent care!'},
    {name:'Pooja Mehta',    loc:'Althan, Surat',        init:'P', service:'Eye Checkup',        rating:5,
     text:'Got a comprehensive eye checkup done for my entire family here. The examination was very thorough and detailed. They identified that my mother needs reading glasses and caught a minor issue with my father\'s retina early. Very professional team. The hospital is well-equipped and clean.'},
    {name:'Jayesh Patel',   loc:'Sarthana, Surat',      init:'J', service:'Cataract Surgery',   rating:5,
     text:'At 68 years of age, I was afraid of cataract surgery. But the team at Ashish Eye Hospital made me feel completely at ease. They explained every step of the procedure. The surgery was quick and painless, and I was discharged the same day. I can see clearly for the first time in years!'},
];

const stars: [number, number][] = [[5, 95], [4, 4], [3, 1], [2, 0], [1, 0]];

export default function Page() {
  return (
    <>
<div className="page-hero">
<div className="container">
<h1>
Patient Testimonials
</h1>
<p>
Real stories from real patients who trusted us with their vision. Rated 5.0 on Google.
</p>
<div className="breadcrumb">
<Link href="/">
Home
</Link>
<i className="fas fa-chevron-right">
</i>
<span>
Testimonials
</span>
</div>
</div>
</div>
{/* Rating Overview */}
<section style={{ background: "var(--blue-900)", padding: "60px 0", position: "relative", overflow: "hidden" }}>
<div style={{ position: "absolute", inset: "0", background: "radial-gradient(circle at 50% 50%,rgba(59,130,246,.2),transparent 60%)" }}>
</div>
<div className="container" style={{ position: "relative", zIndex: "2" }}>
<div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "60px", alignItems: "center", maxWidth: "800px", margin: "0 auto" }} className="reveal">
<div style={{ textAlign: "center" }}>
<div style={{ fontFamily: "var(--font-display)", fontSize: "5rem", fontWeight: "700", color: "#fff", lineHeight: "1" }}>
5.0
</div>
<div style={{ color: "#fbbf24", fontSize: "1.5rem", margin: "8px 0" }}>
<i className="fas fa-star">
</i>
<i className="fas fa-star">
</i>
<i className="fas fa-star">
</i>
<i className="fas fa-star">
</i>
<i className="fas fa-star">
</i>
</div>
<div style={{ color: "rgba(255,255,255,.7)", fontSize: ".9rem" }}>
Overall Rating
</div>
<div style={{ color: "rgba(255,255,255,.5)", fontSize: ".8rem", marginTop: "4px" }}>
Based on Google Reviews
</div>
</div>
<div>
{stars.map(([num, pct]) => {  return (<Fragment key={num}>
<div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
<span style={{ color: "rgba(255,255,255,.7)", fontSize: ".85rem", width: "12px" }}>
{num}
</span>
<i className="fas fa-star" style={{ color: "#fbbf24", fontSize: ".8rem" }}>
</i>
<div style={{ flex: "1", height: "8px", background: "rgba(255,255,255,.1)", borderRadius: "99px", overflow: "hidden" }}>
<div style={{ width: `${pct}%`, height: "100%", background: "linear-gradient(90deg,#fbbf24,#f59e0b)", borderRadius: "99px" }}>
</div>
</div>
<span style={{ color: "rgba(255,255,255,.6)", fontSize: ".82rem", width: "32px" }}>
{pct}%
</span>
</div>
</Fragment>); })}
</div>
</div>
</div>
</section>
{/* Testimonials Grid */}
<section className="section-padding">
<div className="container">
<div className="section-header reveal">
<span className="section-label">
Patient Reviews
</span>
<h2>
What Our Patients Say
</h2>
<div className="section-divider">
</div>
<p>
Every review represents a life improved, vision restored, and trust earned. We are humbled by the kind words of our patients.
</p>
</div>
<div className="testimonials-grid">
{testimonials.map((t, i) => { const delay = (i % 3) + 1; return (<Fragment key={i}>
<div className={`testimonial-card reveal delay-${delay}`}>
<div className="testimonial-stars">
{Array.from({ length: t.rating }).map((_, s) => <i key={s} className="fas fa-star"></i>)}
</div>
<span style={{ display: "inline-block", background: "var(--blue-50)", color: "var(--blue-600)", fontSize: ".72rem", fontWeight: "700", letterSpacing: ".06em", textTransform: "uppercase", padding: "4px 12px", borderRadius: "99px", marginBottom: "12px", border: "1px solid var(--blue-100)" }}>
{t.service}
</span>
<p className="testimonial-text">
{t.text}
</p>
<div className="testimonial-author">
<div className="testimonial-avatar">
{t.init}
</div>
<div className="testimonial-author-info">
<strong>
{t.name}
</strong>
<span>
{t.loc}
</span>
</div>
</div>
</div>
</Fragment>); })}
</div>
{/* Google Review CTA */}
<div className="reveal" style={{ marginTop: "60px", background: "var(--grey-50)", border: "1.5px solid var(--grey-200)", borderRadius: "var(--radius-xl)", padding: "48px", textAlign: "center" }}>
<div style={{ width: "64px", height: "64px", background: "linear-gradient(135deg,#4285f4,#34a853)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: "1.8rem", color: "#fff" }}>
<i className="fab fa-google">
</i>
</div>
<h3 style={{ fontSize: "1.5rem", marginBottom: "12px" }}>
Had a Great Experience With Us?
</h3>
<p style={{ color: "var(--grey-600)", maxWidth: "480px", margin: "0 auto 28px", lineHeight: "1.75" }}>
We would love to hear about your experience at Ashish Eye Hospital. Your feedback helps other patients make informed decisions and helps us continue improving our services.
</p>
<a href="https://g.page/ashish-eye-hospital-surat/review" target="_blank" rel="noopener" className="btn btn-primary">
<i className="fab fa-google">
</i>
 Write a Google Review
</a>
</div>
</div>
</section>
<section className="cta-band">
<div className="container reveal">
<h2>
Join Thousands of Happy Patients
</h2>
<p>
Experience the care that has earned us a 5-star rating. Book your appointment today.
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
