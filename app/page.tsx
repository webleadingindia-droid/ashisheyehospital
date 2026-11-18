import Link from 'next/link';
import { Fragment } from 'react';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Ashish Eye Hospital – Best Eye Hospital in Surat | Expert Eye Care",
  description: "Ashish Eye Hospital is the best eye hospital in Surat, Gujarat. Expert Ophthalmologists offering Cataract Surgery, LASIK, Retina & Glaucoma Treatment. 5-star rated. Book your appointment today.",
};

const service_details = [
                {
                    name: 'Cataract Surgery',
                    slug: 'cataract-surgery',
                    image: 'https://www.laxmieye.org/blog/wp-content/uploads/2024/12/Cataract-Eye-Surgery.jpg',
                    desc: 'Restore crystal-clear vision with our advanced phacoemulsification and micro-incision cataract surgery techniques. Quick recovery, excellent outcomes.'
                },
                {
                    name: 'LASIK Surgery',
                    slug: 'lasik-surgery',
                    image: 'https://prasadnetralaya.com/wp-content/uploads/2020/09/The-Benefits-and-Risks-Of-LASIK-Eye-Surgery-min-1-1200x900.jpg',
                    desc: 'Freedom from glasses and contact lenses. Our bladeless LASIK procedure uses femtosecond laser technology for precise, permanent vision correction.'
                },
                {
                    name: 'Retina Treatment',
                    slug: 'retina-treatment',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRx8EQxVWVRQcWQYgi_sR0VnddH8v8sfboXg&s',
                    desc: 'Expert diagnosis and treatment of retinal disorders including diabetic retinopathy, macular degeneration, and retinal detachment.'
                },
                {
                    name: 'Glaucoma Treatment',
                    slug: 'glaucoma-treatment',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-CLFgd14E6xuesFXPU-K7NmehuVX8n3eb7w&s',
                    desc: 'Early detection and management of glaucoma to preserve your precious vision. Medical, laser, and surgical options available.'
                },
                {
                    name: 'Pediatric Eye Care',
                    slug: 'pediatric-eye-care',
                    image: 'https://da4e1j5r7gw87.cloudfront.net/wp-content/uploads/sites/4010/2023/07/Child-Eye-Exam-Boy.jpg',
                    desc: 'Specialized eye care for children including amblyopia (lazy eye), squint correction, and refractive error management.'
                },
                {
                    name: 'Eye Checkup',
                    slug: 'eye-checkup',
                    image: 'https://www.centreforsight.net/wp-content/uploads/2022/02/eye-checkup.webp',
                    desc: 'Comprehensive eye examination using state-of-the-art diagnostic equipment to detect and monitor eye conditions early.'
                },
                {
                    name: 'Cornea Services',
                    slug: 'cornea-services',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcJYrvTVRZt2pDugWHK8il5pGZAHrPxk9y3Q&s',
                    desc: 'Complete corneal care including corneal transplant, keratoconus management, and treatment of corneal infections.'
                },
                {
                    name: 'Contact Lens Clinic',
                    slug: 'contact-lens-clinic',
                    image: 'https://chirageyecare.com/wp-content/webp-express/webp-images/uploads/2023/09/man-applying-his-contact-lens-1-scaled.jpg.webp',
                    desc: 'Expert fitting and prescription of therapeutic and cosmetic contact lenses including soft and specialty lenses.'
                },
            ];

const reasons = [
                {icon: 'fa-user-md', title: 'Expert Ophthalmologists', desc: 'Our highly qualified and experienced eye specialists bring years of expertise in diagnosing and treating complex eye conditions.'},
                {icon: 'fa-robot', title: 'Advanced Technology', desc: 'We invest in the latest diagnostic and surgical equipment to ensure precision treatments and optimal patient outcomes.'},
                {icon: 'fa-heart', title: 'Patient-Centric Care', desc: 'Every patient receives personalised attention, clear communication, and a comfortable care experience from consultation to recovery.'},
                {icon: 'fa-shield-alt', title: 'Safe & Sterile Environment', desc: 'Our facilities maintain the highest standards of cleanliness and sterilisation protocols for complete patient safety.'},
                
            ];

const testimonials = [
                {name: 'Ramesh Gupta', loc: 'Mota Varachha, Surat', initial: 'R', text: 'Ashish Eye Hospital completely transformed my life. I had severe cataract in both eyes and was almost unable to see. After the surgery, my vision is crystal clear. The doctors and staff are extremely professional and caring. Highly recommended!', rating: 5},
                {name: 'Kavita Sharma', loc: 'Varachha, Surat', initial: 'K', text: 'I had my LASIK done here last month and I am absolutely thrilled with the results. No more glasses! The procedure was painless, the doctors explained everything beforehand, and the follow-up care was excellent. Best decision ever!', rating: 5},
                {name: 'Dinesh Patel', loc: 'Adajan, Surat', initial: 'D', text: 'My 8-year-old daughter was diagnosed with amblyopia. The pediatric eye care team at Ashish Eye Hospital is amazing – so patient and gentle with children. Her vision has improved dramatically. Thank you, Doctor!', rating: 5},
                {name: 'Sunita Joshi', loc: 'Katargam, Surat', initial: 'S', text: 'Got a full eye checkup done for my parents who are diabetic. The team did a thorough retinal screening and detected early signs of diabetic retinopathy. Timely treatment started immediately. Grateful for their expertise!', rating: 5},
                {name: 'Mukesh Agarwal', loc: 'Limbayat, Surat', initial: 'M', text: 'World-class facilities in Surat! The hospital is equipped with the latest technology. My glaucoma is well-managed under their care. Doctor is very knowledgeable and explains everything in simple language. 5 stars well deserved!', rating: 5},
                {name: 'Anita Desai', loc: 'Udhna, Surat', initial: 'A', text: 'Visited for contact lens fitting. The optometrist was very helpful, understood my lifestyle needs, and recommended the perfect lenses. Very affordable prices. The entire staff is friendly and welcoming. Will definitely return!', rating: 5},
            ];

const faqs = [
                {q: 'How do I book an appointment at Ashish Eye Hospital?', a: 'You can book an appointment by calling us at +91 70435 99108, using our online appointment form on this website, or by visiting the hospital directly at 7th Floor, Oxygen House, Mota Varachha, Surat during our working hours (Mon–Sat, 9 AM–7 PM).'},
                {q: 'What is the cost of cataract surgery at Ashish Eye Hospital?', a: 'The cost of cataract surgery varies depending on the type of lens implanted (monofocal, multifocal, or toric) and the surgical technique used. We offer transparent pricing with no hidden charges. Please call us or visit for a personalized consultation and cost estimate.'},
                {q: 'Is LASIK surgery safe? Am I a good candidate?', a: 'LASIK is one of the safest and most commonly performed elective surgical procedures globally. Candidacy depends on factors like corneal thickness, prescription stability, and overall eye health. Our specialists will conduct a thorough pre-operative evaluation to determine your suitability for LASIK.'},
                {q: 'How long does it take to recover after cataract surgery?', a: 'Most patients experience significant improvement in vision within 24–48 hours after cataract surgery. Complete recovery typically takes 4–6 weeks. You can usually resume normal daily activities within a day or two, with some activity restrictions as advised by your doctor.'},
                {q: 'Do you provide eye care for children?', a: 'Yes, we have a dedicated Pediatric Eye Care division. We recommend the first eye exam at around 6 months of age, then at age 3, and before starting school. Our doctors are trained to make children feel comfortable during examinations and treatments.'},
                {q: 'What insurance plans do you accept?', a: 'We accept most major health insurance plans and provide cashless treatment facility for empanelled insurers. Please contact our billing department or call us to verify your specific insurance coverage before your appointment.'},
            ];

const blog_posts = [
                {title: '10 Warning Signs You Should Never Ignore About Your Eyes', cat: 'Eye Health', date: 'Jan 15, 2025', icon: 'fa-eye', slug: 'eye-warning-signs', excerpt: 'Sudden vision loss, floaters, eye pain, or redness could signal serious conditions. Learn when to see an eye doctor immediately.'},
                {title: 'LASIK vs Glasses vs Contact Lenses: Which Is Right for You?', cat: 'LASIK', date: 'Feb 3, 2025', icon: 'fa-glasses', slug: 'lasik-vs-glasses', excerpt: 'Weighing your vision correction options? We break down the pros and cons of LASIK surgery, eyeglasses, and contact lenses.'},
                {title: 'Protecting Your Eyes from Digital Screens: The 20-20-20 Rule', cat: 'Eye Care Tips', date: 'Mar 10, 2025', icon: 'fa-laptop', slug: 'digital-eye-strain', excerpt: 'Spending long hours on screens? Discover practical tips to reduce digital eye strain and protect your vision long-term.'},
            ];

export default function Page() {
  return (
    <>
{/* ══ HERO SECTION ══════════════════════════════════════════ */}
<section className="hero">
<div className="hero-pattern">
</div>
<div className="hero-glow">
</div>
<div className="container">
<div className="hero-content">
<div className="hero-badge">
<i className="fas fa-star">
</i>
{" "}5.0 Star Rated Eye Care Centre – Surat
</div>
<h1>
Your Vision, 
<span>
Our Mission
</span>
 – Expert Eye Care in Surat
</h1>
<p className="hero-subtitle">
At Ashish Eye Hospital, we combine cutting-edge technology with compassionate care to restore and protect your most precious sense – your sight. Trusted by thousands of patients across Surat and South Gujarat.
</p>
<div className="hero-actions">
<Link href="/appointment" className="btn btn-primary btn-lg">
<i className="fas fa-calendar-check">
</i>
 Book Appointment
</Link>
<Link href="/services" className="btn btn-outline" style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }}>
<i className="fas fa-eye">
</i>
 Our Services
</Link>
</div>
<div className="hero-stats">
<div className="hero-stat">
<div className="hero-stat-num count-up" data-target="15000">
15,000+
</div>
<div className="hero-stat-label">
Happy Patients
</div>
</div>
<div className="hero-stat">
<div className="hero-stat-num count-up" data-target="13">
13+
</div>
<div className="hero-stat-label">
Years Experience
</div>
</div>
<div className="hero-stat">
<div className="hero-stat-num count-up" data-target="8">
8
</div>
<div className="hero-stat-label">
Eye Care Services
</div>
</div>
<div className="hero-stat">
<div className="hero-stat-num" style={{ opacity: "1" }}>
5.0 ★
</div>
<div className="hero-stat-label">
Google Rating
</div>
</div>
</div>
</div>
<div className="hero-visual">
<div className="hero-card-float hero-card-float-1 float-bob">
<i className="fas fa-shield-check" style={{ color: "#10b981", fontSize: "1.4rem" }}>
</i>
<div className="hero-card-float-text">
<strong>
NABH Certified
</strong>
<span>
Quality Assured Care
</span>
</div>
</div>
<div className="hero-card-main">
<img src="https://lh3.googleusercontent.com/p/AF1QipPMJGByCPqHVSdeb6QRQ8_hnDKSvKruVeFX-mdo=s1360-w1360-h1020-rw" alt="" />
</div>
<div className="hero-card-float hero-card-float-2 float-bob" style={{ animationDelay: ".5s" }}>
<i className="fas fa-user-md" style={{ color: "var(--blue-500)", fontSize: "1.4rem" }}>
</i>
<div className="hero-card-float-text">
<strong>
Expert Ophthalmologists
</strong>
<span>
Experienced Specialists
</span>
</div>
</div>
</div>
</div>
</section>
{/* ══ TRUST STRIP ════════════════════════════════════════════ */}
<div className="trust-strip">
<div className="container">
<div className="trust-item reveal delay-1">
<i className="fas fa-check-circle">
</i>
<span>
Expert Ophthalmologists
</span>
</div>
<div className="trust-item reveal delay-2">
<i className="fas fa-microscope">
</i>
<span>
Advanced Technology
</span>
</div>
<div className="trust-item reveal delay-3">
<i className="fas fa-heartbeat">
</i>
<span>
Compassionate Care
</span>
</div>
<div className="trust-item reveal delay-4">
<i className="fas fa-map-marker-alt">
</i>
<span>
Mota Varachha, Surat
</span>
</div>
<div className="trust-item reveal delay-5">
<i className="fas fa-star">
</i>
<span>
5.0 Google Rating
</span>
</div>
<div className="trust-item reveal delay-6">
<i className="fas fa-clock">
</i>
<span>
Mon–Sat: 9 AM – 7 PM
</span>
</div>
</div>
</div>
{/* ══ SERVICES SECTION ═══════════════════════════════════════ */}
<section className="section-padding" id="services">
<div className="container">
<div className="section-header reveal">
<span className="section-label">
What We Offer
</span>
<h2>
Comprehensive Eye Care Services
</h2>
<div className="section-divider">
</div>
<p>
From routine eye checkups to complex surgical procedures, we provide a full spectrum of ophthalmic services under one roof with the latest medical technology.
</p>
</div>
<div className="services-grid">
{service_details.map((svc, i) => { const delay = (i % 4) + 1; return (<Fragment key={i}>
<div className={`service-card reveal delay-${delay}`} id={svc.slug}>
{/* Service Image */}
<div className="service-image">
<img src={svc.image} alt={svc.name} />
</div>
<h3>
{svc.name}
</h3>
<p>
{svc.desc}
</p>
<Link href={`/services#${svc.slug}`} className="learn-more">
Learn More 
<i className="fas fa-arrow-right">
</i>
</Link>
</div>
</Fragment>); })}
</div>
<div className="text-center mt-40 reveal">
<Link href="/services" className="btn btn-primary">
<i className="fas fa-th-large">
</i>
 View All Services
</Link>
</div>
</div>
</section>
{/* ══ WHY CHOOSE US ══════════════════════════════════════════ */}
<section className="why-us section-padding">
<div className="why-us-bg-pattern">
</div>
<div className="container">
<div className="section-header reveal">
<span className="section-label">
Why Patients Trust Us
</span>
<h2>
Why Choose Ashish Eye Hospital?
</h2>
<div className="section-divider">
</div>
<p>
We are committed to providing world-class eye care with a patient-first approach. Here's what sets us apart.
</p>
</div>
<div className="why-grid">
{reasons.map((r, i) => { const delay = (i % 4) + 1; return (<Fragment key={i}>
<div className={`why-card reveal delay-${delay}`}>
<i className={`fas ${r.icon}`}>
</i>
<h4>
{r.title}
</h4>
<p>
{r.desc}
</p>
</div>
</Fragment>); })}
</div>
</div>
</section>
{/* ══ DOCTORS PREVIEW ════════════════════════════════════════ */}
<section className="section-padding" style={{ background: "var(--grey-50)" }}>
<div className="container">
<div className="section-header reveal revealed">
<span className="section-label">
Meet Your Eye Care Expert
</span>
<h2>
Leading Ophthalmologist in Surat
</h2>
<div className="section-divider">
</div>
</div>
<div className="doctor-profile" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "40px", alignItems: "center" }}>
<div className="doctor-image" style={{ background: "linear-gradient(135deg,var(--blue-100),var(--blue-50))", borderRadius: "28px", padding: "30px", textAlign: "center", boxShadow: "var(--shadow-md)" }}>
<div style={{ width: "200px", height: "200px", background: "var(--blue-600)", borderRadius: "50%", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
<i className="fas fa-user-md" style={{ fontSize: "5rem", color: "#fff" }}>
</i>
</div>
<div className="doctor-badge" style={{ background: "var(--blue-600)", color: "#fff", padding: "8px 16px", borderRadius: "50px", display: "inline-block", marginBottom: "15px" }}>
<i className="fas fa-certificate">
</i>
 Medical Director
</div>
<h3 style={{ color: "var(--blue-800)", marginBottom: "5px" }}>
Dr. Ashish Bharoliya
</h3>
<p style={{ color: "var(--blue-600)", fontWeight: "500", marginBottom: "15px" }}>
M.B.B.S, M.S Ophthalmology
</p>
<div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
<span style={{ background: "#e0f2fe", padding: "5px 12px", borderRadius: "50px", fontSize: "0.8rem" }}>
<i className="fas fa-microscope">
</i>
 Phaco Refractive Surgeon
</span>
<span style={{ background: "#e0f2fe", padding: "5px 12px", borderRadius: "50px", fontSize: "0.8rem" }}>
<i className="fas fa-eye">
</i>
 Fellowship in Medical Retina
</span>
</div>
</div>
<div className="doctor-details">
<h3>
Your Vision, Our Expertise
</h3>
<p>
Dr. Ashish Bharoliya is a highly skilled ophthalmologist with specialized training in Phaco Refractive Surgery and Medical Retina. As the Medical Director of Ashish Eye Hospital, he brings years of experience and a patient-first approach to every consultation and procedure.
</p>
<div className="doctor-specialties" style={{ marginTop: "20px" }}>
<h4>
Specializations:
</h4>
<ul style={{ listStyle: "none", padding: "0", display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: "10px" }}>
<li>
<i className="fas fa-check-circle" style={{ color: "var(--teal)" }}>
</i>
 Phaco Refractive Surgery
</li>
<li>
<i className="fas fa-check-circle" style={{ color: "var(--teal)" }}>
</i>
 Medical Retina
</li>
<li>
<i className="fas fa-check-circle" style={{ color: "var(--teal)" }}>
</i>
 Cataract Surgery
</li>
<li>
<i className="fas fa-check-circle" style={{ color: "var(--teal)" }}>
</i>
 Comprehensive Eye Checkup
</li>
</ul>
</div>
<div className="hospital-timing" style={{ marginTop: "20px", padding: "15px", background: "var(--blue-50)", borderRadius: "16px" }}>
<h4>
<i className="far fa-clock">
</i>
 OPD Timing:
</h4>
<p>
<strong>
Monday to Saturday:
</strong>
 10:00 AM - 8:00 PM
</p>
<p>
<strong>
Sunday:
</strong>
 10:00 AM - 1:00 PM
</p>
</div>
</div>
</div>
</div>
</section>
{/* ══ TESTIMONIALS ═══════════════════════════════════════════ */}
<section className="testimonials section-padding">
<div className="container">
<div className="section-header reveal">
<span className="section-label">
Patient Stories
</span>
<h2>
What Our Patients Say
</h2>
<div className="section-divider">
</div>
<p>
Real experiences from real patients. Their trust and satisfaction are our greatest achievements.
</p>
</div>
<div className="testimonials-grid">
{testimonials.map((t, i) => { const delay = (i % 3) + 1; return (<Fragment key={i}>
<div className={`testimonial-card reveal delay-${delay}`}>
<div className="testimonial-stars">
{Array.from({ length: t.rating }).map((_, s) => <i key={s} className="fas fa-star"></i>)}
</div>
<p className="testimonial-text">
{t.text}
</p>
<div className="testimonial-author">
<div className="testimonial-avatar">
{t.initial}
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
</div>
</section>
{/* ══ FAQ PREVIEW ════════════════════════════════════════════ */}
<section className="section-padding" style={{ background: "var(--white)" }}>
<div className="container">
<div className="section-header reveal">
<span className="section-label">
Common Questions
</span>
<h2>
Frequently Asked Questions
</h2>
<div className="section-divider">
</div>
</div>
<div className="faq-list">
{faqs.map((faq, i) => {  return (<Fragment key={i}>
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
{/* ══ BLOG PREVIEW ═══════════════════════════════════════════ */}
<section className="section-padding" style={{ background: "var(--grey-50)" }}>
<div className="container">
<div className="section-header reveal">
<span className="section-label">
Eye Health Tips
</span>
<h2>
Latest from Our Blog
</h2>
<div className="section-divider">
</div>
</div>
<div className="blog-grid">
{blog_posts.map((post, i) => { const delay = i + 1; return (<Fragment key={i}>
<div className={`blog-card reveal delay-${delay}`}>
<div className="blog-thumb">
<i className={`fas ${post.icon}`}>
</i>
<span className="blog-thumb-label">
{post.cat}
</span>
</div>
<div className="blog-body">
<div className="blog-meta">
<span>
<i className="fas fa-calendar">
</i>
 {post.date}
</span>
<span>
<i className="fas fa-tag">
</i>
 {post.cat}
</span>
</div>
<h3>
<Link href={`/blog#${post.slug}`}>
{post.title}
</Link>
</h3>
<p>
{post.excerpt}
</p>
<Link href={`/blog#${post.slug}`} className="blog-read-more">
Read More 
<i className="fas fa-arrow-right">
</i>
</Link>
</div>
</div>
</Fragment>); })}
</div>
<div className="text-center mt-40 reveal">
<Link href="/blog" className="btn btn-primary">
<i className="fas fa-newspaper">
</i>
 Read All Articles
</Link>
</div>
</div>
</section>
{/* ══ CTA BAND ═══════════════════════════════════════════════ */}
<section className="cta-band">
<div className="container reveal">
<h2>
Ready to See the World More Clearly?
</h2>
<p>
Don't let eye problems hold you back. Book your comprehensive eye consultation today and take the first step towards better vision.
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
 Call +91 70435 99108
</a>
</div>
</div>
</section>
    </>
  );
}
