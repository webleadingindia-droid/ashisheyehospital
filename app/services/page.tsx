import Link from 'next/link';
import { Fragment } from 'react';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Our Services – Ashish Eye Hospital | Cataract, LASIK, Retina & More",
  description: "Comprehensive eye care services at Ashish Eye Hospital Surat: Cataract Surgery, LASIK, Retina Treatment, Glaucoma, Pediatric Eye Care, Eye Checkup, Cornea & Contact Lens Clinic.",
};

const service_details = [
    {
        name: 'Cataract Surgery',
        icon: 'fa-eye',
        slug: 'cataract-surgery',
        short: 'Restore crystal-clear vision with advanced micro-incision cataract surgery.',
        desc: 'A cataract is the clouding of the natural lens inside the eye, causing blurry vision, glare, and reduced color perception. At Ashish Eye Hospital, we perform state-of-the-art Phacoemulsification (Phaco) and Micro-Incision Cataract Surgery (MICS) using the latest generation phaco systems. We offer a full range of premium intraocular lenses including monofocal, multifocal, trifocal, toric, and EDOF lenses to suit every patient\'s visual needs and lifestyle.',
        bullets: [
            'Blade-free, stitch-free micro-incision surgery',
            'Full range of premium IOL options (monofocal, multifocal, toric)',
            'Same-day discharge procedure',
            'Quick recovery – back to normal activities in 1–2 days',
            'Both eyes operated with a gap of a few days',
        ],
    },
    {
        name: 'LASIK Surgery',
        icon: 'fa-bolt',
        slug: 'lasik-surgery',
        short: 'Freedom from glasses with bladeless femtosecond laser vision correction.',
        desc: 'LASIK (Laser-Assisted In Situ Keratomileusis) is the world\'s most popular laser vision correction procedure. We offer Femtosecond LASIK (All-Laser LASIK) for precise, bladeless flap creation and exceptional outcomes. Our pre-operative screening includes detailed corneal topography, wavefront analysis, and pachymetry to ensure you are the right candidate. We also offer SMILE and PRK for suitable patients.',
        bullets: [
            'Suitable for myopia (nearsightedness), hyperopia, and astigmatism',
            'Bladeless Femtosecond LASIK for maximum precision',
            'Wavefront-guided customized treatment',
            'Pain-free procedure with immediate visual improvement',
            'Comprehensive pre-op evaluation and post-op follow-up',
        ],
    },
    {
        name: 'Retina Treatment',
        icon: 'fa-microscope',
        slug: 'retina-treatment',
        short: 'Expert diagnosis and treatment of all retinal conditions with advanced technology.',
        desc: 'The retina is the light-sensitive layer at the back of the eye and is critical for vision. Our retina specialist uses high-resolution OCT, fluorescein angiography, and laser photocoagulation to diagnose and treat a wide spectrum of retinal diseases. Early detection and treatment is key to preserving vision in conditions like diabetic retinopathy and macular degeneration.',
        bullets: [
            'Diabetic Retinopathy screening and laser treatment',
            'Age-related Macular Degeneration (AMD) management',
            'Retinal Detachment surgery (vitrectomy)',
            'Intravitreal injections (Anti-VEGF therapy)',
            'Retinal vascular occlusion treatment',
        ],
    },
    {
        name: 'Glaucoma Treatment',
        icon: 'fa-heartbeat',
        slug: 'glaucoma-treatment',
        short: 'Detect and manage glaucoma early to preserve your vision permanently.',
        desc: 'Glaucoma is a group of conditions that damage the optic nerve, often due to elevated intraocular pressure. Known as the "silent thief of sight," glaucoma causes irreversible vision loss if left untreated. Our comprehensive glaucoma service includes accurate IOP measurement, visual field testing, OCT of the optic nerve, and gonioscopy. Management options include eye drops, selective laser trabeculoplasty (SLT), and surgical interventions.',
        bullets: [
            'Advanced OCT-based optic nerve analysis',
            'Automated visual field testing (perimetry)',
            'Selective Laser Trabeculoplasty (SLT)',
            'Medical management with latest glaucoma drops',
            'Trabeculectomy and minimally invasive glaucoma surgery (MIGS)',
        ],
    },
    {
        name: 'Pediatric Eye Care',
        icon: 'fa-child',
        slug: 'pediatric-eye-care',
        short: 'Specialized, gentle eye care for children from infancy through adolescence.',
        desc: 'Children\'s eyes are still developing, and vision problems in early childhood can have lifelong consequences if undetected. Our pediatric ophthalmology team is specially trained to examine and treat children of all ages in a friendly, non-threatening environment. We diagnose and manage squint (strabismus), amblyopia (lazy eye), and refractive errors that affect learning and development.',
        bullets: [
            'Amblyopia (lazy eye) detection and patching therapy',
            'Strabismus (squint) assessment and surgery',
            'Pediatric refractive error correction',
            'Cycloplegic refraction under drops',
            'Child-friendly examination with portable equipment if needed',
        ],
    },
    {
        name: 'Comprehensive Eye Checkup',
        icon: 'fa-stethoscope',
        slug: 'eye-checkup',
        short: 'Thorough eye examination with advanced diagnostics for all age groups.',
        desc: 'A comprehensive eye checkup at Ashish Eye Hospital is much more than a simple vision test. Our detailed examination includes assessment of visual acuity, refraction, external eye examination, slit-lamp biomicroscopy, intraocular pressure measurement, and dilated fundus examination. We recommend annual eye checkups for adults over 40 and all diabetic patients.',
        bullets: [
            'Complete visual acuity and refraction assessment',
            'Slit-lamp anterior segment examination',
            'IOP (intraocular pressure) measurement',
            'Dilated fundus examination',
            'Digital retinal photography and documentation',
        ],
    },
    {
        name: 'Cornea Services',
        icon: 'fa-circle-dot',
        slug: 'cornea-services',
        short: 'Comprehensive corneal care from keratoconus management to corneal transplantation.',
        desc: 'The cornea is the transparent front surface of the eye, critical for clear vision. Our cornea specialist offers expert care for a wide range of corneal conditions including keratoconus, corneal scarring, bullous keratopathy, and corneal infections. We perform penetrating keratoplasty (PK), deep anterior lamellar keratoplasty (DALK), and Descemet\'s Membrane Endothelial Keratoplasty (DMEK).',
        bullets: [
            'Keratoconus management with corneal cross-linking (C3R)',
            'Corneal transplantation (PK, DALK, DMEK)',
            'Dry eye disease diagnosis and treatment',
            'Pterygium surgery with conjunctival grafting',
            'Corneal infection (keratitis) management',
        ],
    },
    {
        name: 'Contact Lens Clinic',
        icon: 'fa-glasses',
        slug: 'contact-lens-clinic',
        short: 'Expert contact lens fitting for vision correction, cosmetics, and therapeutic use.',
        desc: 'Our Contact Lens Clinic offers expert fitting and prescription of a full range of contact lenses customized to your eyes and lifestyle. Whether you need lenses for vision correction, therapeutic use, or cosmetic purposes, our optometrists will evaluate your eye health and recommend the most suitable lens type. We also provide detailed education on lens hygiene and care to prevent complications.',
        bullets: [
            'Soft daily, weekly, and monthly disposable lenses',
            'Rigid Gas Permeable (RGP) lenses for keratoconus',
            'Scleral and mini-scleral lenses',
            'Therapeutic bandage contact lenses',
            'Colored and cosmetic lenses with prescription',
        ],
    },
];

export default function Page() {
  return (
    <>
<div className="page-hero">
<div className="container">
<h1>
Our Eye Care Services
</h1>
<p>
Comprehensive ophthalmic services under one roof, delivered with precision and compassion.
</p>
<div className="breadcrumb">
<Link href="/">
Home
</Link>
<i className="fas fa-chevron-right">
</i>
<span>
Services
</span>
</div>
</div>
</div>
{/* Services Overview Grid */}
<section className="section-padding-sm" style={{ background: "var(--grey-50)" }}>
<div className="container">
<div className="section-header reveal">
<span className="section-label">
All Services
</span>
<h2>
What We Treat & Treat Well
</h2>
<div className="section-divider">
</div>
</div>
<div className="services-grid">
{service_details.map((svc, i) => { const delay = (i % 4) + 1; return (<Fragment key={i}>
<a href={`#${svc.slug}`} className={`service-card reveal delay-${delay}`} style={{ display: "block", textDecoration: "none", color: "inherit" }}>
<div className="service-icon">
<i className={`fas ${svc.icon}`}>
</i>
</div>
<h3>
{svc.name}
</h3>
<p>
{svc.short}
</p>
<span className="learn-more">
View Details 
<i className="fas fa-arrow-right">
</i>
</span>
</a>
</Fragment>); })}
</div>
</div>
</section>
{/* Detailed Service Sections */}
<section className="section-padding">
<div className="container">
{service_details.map((svc, i) => {  return (<Fragment key={i}>
<div className="service-detail reveal" id={svc.slug}>
<div className="service-detail-grid">
<div className="service-detail-icon">
<i className={`fas ${svc.icon}`}>
</i>
</div>
<div className="service-detail-text">
<h2>
{svc.name}
</h2>
<p>
{svc.desc}
</p>
<div className="service-bullets">
{svc.bullets.map((bullet, _i) => {  return (<Fragment key={_i}>
<div className="service-bullet">
<i className="fas fa-check-circle">
</i>
<span>
{bullet}
</span>
</div>
</Fragment>); })}
</div>
<Link href={`/appointment?service=${encodeURIComponent(svc.name)}`} className="btn btn-primary" style={{ marginTop: "24px" }}>
<i className="fas fa-calendar-check">
</i>
 Book for {svc.name}
</Link>
</div>
</div>
</div>
</Fragment>); })}
</div>
</section>
<section className="cta-band">
<div className="container reveal">
<h2>
Need a Service Not Listed Here?
</h2>
<p>
Contact us – our specialists can address virtually any eye care need. Call or book an appointment today.
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
