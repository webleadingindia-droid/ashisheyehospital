import Link from 'next/link';
import { Fragment } from 'react';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Eye Health Blog – Ashish Eye Hospital Surat | Tips & Insights",
  description: "Expert eye health articles, tips, and insights from the ophthalmologists at Ashish Eye Hospital, Surat. Learn about cataract, LASIK, glaucoma, and vision care.",
};

const posts = [
    {
        slug: 'eye-warning-signs',
        title: '10 Warning Signs You Should Never Ignore About Your Eyes',
        cat: 'Eye Health',
        date: 'January 15, 2025',
        author: 'Dr. Ashish Patel',
        icon: 'fa-eye',
        read: '5 min read',
        excerpt: 'Sudden vision loss, floaters, eye pain, or redness could signal serious conditions. Learn when to see an eye doctor immediately.',
        content: 'Your eyes are your windows to the world, and any unusual changes in your vision should be taken seriously. Here are 10 warning signs that warrant an immediate visit to an ophthalmologist: <br><br>\n<strong>1. Sudden Vision Loss:</strong> Any sudden or rapid loss of vision, even temporarily, is a medical emergency. It could indicate retinal detachment, a stroke affecting vision (amaurosis fugax), or acute angle-closure glaucoma.<br><br>\n<strong>2. New Floaters or Flashes:</strong> While occasional floaters are normal, a sudden increase in floaters, especially accompanied by flashes of light, can indicate a retinal tear or detachment.<br><br>\n<strong>3. Eye Pain:</strong> Persistent eye pain is not normal. It can be a sign of acute glaucoma, corneal abrasion, or inflammation (uveitis).<br><br>\n<strong>4. Double Vision:</strong> New onset diplopia (double vision) can indicate neurological issues, muscle problems, or corneal irregularities.<br><br>\n<strong>5. Redness with Discharge:</strong> Conjunctivitis is common, but redness with severe pain, photophobia, or vision changes may indicate keratitis or uveitis requiring urgent treatment.<br><br>\n<strong>6. Halos Around Lights:</strong> Seeing rainbow-colored halos around lights, especially at night, can be an early sign of glaucoma or cataracts.<br><br>\n<strong>7. Blurry Vision:</strong> Gradual or sudden blurring can be due to refractive changes, cataracts, macular degeneration, or diabetic retinopathy.<br><br>\n<strong>8. Loss of Peripheral Vision:</strong> Tunnel vision or blind spots in your peripheral field are classic signs of advanced glaucoma.<br><br>\n<strong>9. Drooping Eyelid (Ptosis):</strong> A drooping eyelid can be a sign of a nerve palsy, Horner\'s syndrome, or myasthenia gravis.<br><br>\n<strong>10. Watering Eyes:</strong> While tears are normal, excessive, persistent watering can indicate blocked tear ducts, dry eye disease (paradoxical tearing), or eyelid problems.',
    },
    {
        slug: 'lasik-vs-glasses',
        title: 'LASIK vs Glasses vs Contact Lenses: Which Is Right for You?',
        cat: 'LASIK',
        date: 'February 3, 2025',
        author: 'Dr. Rajiv Shah',
        icon: 'fa-glasses',
        read: '7 min read',
        excerpt: 'Weighing your vision correction options? We break down the pros and cons of LASIK surgery, eyeglasses, and contact lenses.',
        content: 'If you have a refractive error – myopia, hyperopia, or astigmatism – you have three main options: eyeglasses, contact lenses, or LASIK surgery. Each has its own advantages and considerations.<br><br>\n<strong>Eyeglasses</strong><br>\nPros: Non-invasive, easy to use, no risk of eye infection, can correct any refractive error, stylish accessory. Cons: Can fog up, break, or get lost; restrict peripheral vision; can be inconvenient during sports; ongoing cost of frames and lenses.<br><br>\n<strong>Contact Lenses</strong><br>\nPros: No obstruction to vision, great for sports and active lifestyles, available in daily and extended-wear options. Cons: Risk of eye infections if hygiene is poor; requires daily insertion/removal; expensive long-term; not suitable for dry eye patients; cannot be worn while sleeping (most types).<br><br>\n<strong>LASIK Surgery</strong><br>\nPros: Permanent vision correction in most cases; quick procedure (15 minutes total); fast recovery (most patients drive within 24 hours); freedom from glasses and contacts; cost-effective long-term. Cons: Requires surgical candidacy (not everyone is eligible); small risk of side effects like dry eye or halos; does not prevent age-related reading problems (presbyopia).<br><br>\n<strong>Who Should Choose LASIK?</strong><br>\nLASIK is ideal for adults over 18 with stable prescriptions, adequate corneal thickness, and no contraindications like severe dry eye, keratoconus, or autoimmune disease. A thorough pre-operative evaluation at Ashish Eye Hospital will determine if you are a suitable candidate.<br><br>\n<strong>Cost Comparison:</strong> While LASIK has a higher upfront cost, it eliminates the recurring expenses of glasses and contact lenses over years, making it cost-effective in the long run. Consult our specialists to find the right option for your specific vision needs and lifestyle.',
    },
    {
        slug: 'digital-eye-strain',
        title: 'Protecting Your Eyes from Digital Screens: The 20-20-20 Rule',
        cat: 'Eye Care Tips',
        date: 'March 10, 2025',
        author: 'Dr. Priya Mehta',
        icon: 'fa-laptop',
        read: '4 min read',
        excerpt: 'Spending long hours on screens? Discover practical tips to reduce digital eye strain and protect your vision long-term.',
        content: 'With the average Indian spending 6–8 hours daily on screens – computers, smartphones, and tablets – digital eye strain (computer vision syndrome) has become an epidemic. Here\'s what you can do:<br><br>\n<strong>The 20-20-20 Rule:</strong> Every 20 minutes, look at something 20 feet away for 20 seconds. This simple habit relaxes the ciliary muscle and reduces eye fatigue significantly.<br><br>\n<strong>Blink Consciously:</strong> We blink 12–15 times per minute normally, but this drops to 5–7 times while using screens, causing dry eyes. Make a conscious effort to blink fully and frequently.<br><br>\n<strong>Proper Screen Distance:</strong> Keep your screen at arm\'s length (about 50–70 cm) and slightly below eye level. This reduces the strain on your eye muscles and neck.<br><br>\n<strong>Adjust Screen Brightness:</strong> Your screen brightness should match the ambient lighting around you. A screen that\'s too bright or too dim increases eye strain.<br><br>\n<strong>Use Night Mode/Blue Light Filters:</strong> Enable night mode on your devices after sunset. While the science on blue light causing permanent damage is still debated, blue light filters can help improve sleep quality by reducing melatonin suppression.<br><br>\n<strong>Artificial Tears:</strong> If you experience dry, gritty eyes, preservative-free lubricating eye drops can provide significant relief. Use them 2–3 times a day during heavy screen use.<br><br>\n<strong>Anti-Reflective Coated Lenses:</strong> If you wear glasses, ensure they have a good quality anti-reflective (AR) coating, which reduces glare from screens and artificial lights.<br><br>\n<strong>When to See a Doctor:</strong> If you experience persistent headaches, blurry vision that doesn\'t resolve after resting, or difficulty focusing, visit Ashish Eye Hospital for a comprehensive eye examination.',
    },
    {
        slug: 'cataract-facts',
        title: 'Cataracts Demystified: 8 Facts Every Patient Must Know',
        cat: 'Cataract',
        date: 'March 25, 2025',
        author: 'Dr. Ashish Patel',
        icon: 'fa-eye',
        read: '6 min read',
        excerpt: 'Cataracts are the leading cause of preventable blindness worldwide. Understand what they are, when to operate, and what to expect.',
        content: 'A cataract is the clouding of the natural crystalline lens inside the eye. Here are 8 essential facts:<br><br>\n<strong>1. Cataracts are extremely common.</strong> By age 75, nearly half of all people have cataracts. It is the leading cause of reversible blindness worldwide, including India.<br><br>\n<strong>2. Cataracts develop slowly.</strong> Most age-related cataracts develop gradually over years, often without pain. You may notice gradual blurring, increased glare, or faded colors.<br><br>\n<strong>3. Surgery is the only cure.</strong> There are no eye drops, medications, or dietary supplements that have been proven to dissolve or reverse cataracts. Surgery is the only definitive treatment.<br><br>\n<strong>4. You don\'t have to wait for cataracts to "mature."</strong> Modern surgical techniques allow safe surgery at any stage. You should consider surgery when the cataract significantly affects your daily activities.<br><br>\n<strong>5. Cataract surgery is extremely safe.</strong> Phacoemulsification cataract surgery has a success rate of over 98%. It is one of the most commonly performed and safest surgical procedures in the world.<br><br>\n<strong>6. Premium IOLs can eliminate the need for glasses.</strong> While basic monofocal IOLs correct distance vision, premium multifocal and trifocal IOLs can provide clear vision at all distances, potentially eliminating the need for glasses after surgery.<br><br>\n<strong>7. Recovery is quick.</strong> Most patients return to normal activities within 1–2 days. Complete healing takes 4–6 weeks. You will need to use prescribed eye drops for several weeks after surgery.<br><br>\n<strong>8. Both eyes are usually operated separately.</strong> Surgeons typically operate one eye at a time, with a gap of a few days to a week, to minimize risk.',
    },
    {
        slug: 'glaucoma-silent-thief',
        title: 'Glaucoma – The Silent Thief of Sight: Early Detection Saves Vision',
        cat: 'Glaucoma',
        date: 'April 5, 2025',
        author: 'Dr. Kiran Patel',
        icon: 'fa-heartbeat',
        read: '5 min read',
        excerpt: 'Glaucoma steals your vision silently, without pain or warning. Learn about risk factors, screening, and why early detection is crucial.',
        content: 'Glaucoma is a group of eye diseases that damage the optic nerve, often due to abnormally high intraocular pressure (IOP). It is called the "silent thief of sight" because most forms cause no pain and show no symptoms until significant, irreversible vision loss has occurred.<br><br>\n<strong>Who is at Risk?</strong><br>\n- People over 40 years of age<br>\n- Those with a family history of glaucoma<br>\n- Diabetics and hypertensives<br>\n- High myopes (severe nearsightedness)<br>\n- People who have had eye trauma or surgery<br>\n- Long-term steroid users<br><br>\n<strong>Types of Glaucoma:</strong><br>\nPrimary Open-Angle Glaucoma (POAG) is the most common type and is completely asymptomatic until advanced stages. Acute Angle-Closure Glaucoma is less common but causes sudden, severe eye pain and vision loss – this is a medical emergency.<br><br>\n<strong>Diagnosis:</strong><br>\nGlaucoma diagnosis requires a combination of IOP measurement, visual field testing, OCT of the optic nerve and nerve fiber layer, and gonioscopy. A single normal IOP reading does not rule out glaucoma.<br><br>\n<strong>Treatment Options:</strong><br>\nGlaucoma is not curable, but progression can be halted or slowed with treatment. Options include daily eye drops to lower IOP, Selective Laser Trabeculoplasty (SLT), and surgical procedures like trabeculectomy or tube shunt surgery.<br><br>\n<strong>The Key Message:</strong> Get screened regularly. If you are over 40, or have any risk factors, come in for a comprehensive glaucoma evaluation at Ashish Eye Hospital. Early detection truly saves sight.',
    },
    {
        slug: 'child-eye-health',
        title: 'Eye Health in Children: When Should Your Child\'s Eyes Be Examined?',
        cat: 'Pediatric Eye Care',
        date: 'April 15, 2025',
        author: 'Dr. Meera Joshi',
        icon: 'fa-child',
        read: '5 min read',
        excerpt: 'Children often can\'t tell you they have a vision problem. Learn the recommended timeline for pediatric eye exams and warning signs to watch for.',
        content: 'Children\'s vision development is crucial in the first few years of life. Undetected vision problems can affect learning, development, and quality of life. Many children cannot describe or even recognize that their vision is abnormal – they simply assume everyone sees the way they do.<br><br>\n<strong>Recommended Eye Exam Schedule:</strong><br>\n- At 6 months of age (first screening)<br>\n- Between 2–3 years of age<br>\n- At 4–5 years, before starting school<br>\n- Every year during school years<br><br>\n<strong>Warning Signs in Infants (0–12 months):</strong><br>\n- Eyes not moving together<br>\n- One eye drifting inward or outward<br>\n- No eye contact or response to faces<br>\n- Cloudy or white appearance in the pupil (possible cataract)<br><br>\n<strong>Warning Signs in Older Children:</strong><br>\n- Sitting too close to the TV<br>\n- Squinting or closing one eye to see<br>\n- Frequent headaches, especially after reading<br>\n- Difficulty reading or avoiding books<br>\n- Turning or tilting the head<br>\n- Rubbing eyes frequently<br><br>\n<strong>Amblyopia (Lazy Eye):</strong><br>\nThis is the most common cause of preventable vision loss in children. Caused by one eye being significantly weaker than the other, it must be detected and treated before age 7–8 for the best outcome. Treatment with patching of the stronger eye is most effective in early childhood.<br><br>\nAt Ashish Eye Hospital, we provide comprehensive, child-friendly eye examinations in a warm and supportive environment. Early detection means better outcomes – always.',
    },
];

export default function Page() {
  return (
    <>
<div className="page-hero">
<div className="container">
<h1>
Eye Health Blog
</h1>
<p>
Expert articles, tips, and insights to help you take better care of your precious vision.
</p>
<div className="breadcrumb">
<Link href="/">
Home
</Link>
<i className="fas fa-chevron-right">
</i>
<span>
Blog
</span>
</div>
</div>
</div>
<section className="section-padding">
<div className="container">
<div className="section-header reveal">
<span className="section-label">
Eye Health Education
</span>
<h2>
Latest Articles & Eye Care Tips
</h2>
<div className="section-divider">
</div>
<p>
Our doctors share their knowledge to help you make informed decisions about your eye health. Knowledge is the first step to prevention.
</p>
</div>
{/* Blog Cards Grid */}
<div className="blog-grid mb-40">
{posts.slice(1).map((post, i) => { const delay = (i % 3) + 1; return (<Fragment key={i}>
<div className={`blog-card reveal delay-${delay}`} id={post.slug}>
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
<i className="fas fa-clock">
</i>
 {post.read}
</span>
</div>
<h3>
<a href={`#post-${post.slug}`}>
{post.title}
</a>
</h3>
<p>
{post.excerpt}
</p>
<div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: ".78rem", color: "var(--grey-500)", marginBottom: "14px" }}>
<i className="fas fa-user-md" style={{ color: "var(--blue-400)" }}>
</i>
<span>
{post.author}
</span>
</div>
<a href={`#post-${post.slug}`} className="blog-read-more">
Read More 
<i className="fas fa-arrow-right">
</i>
</a>
</div>
</div>
</Fragment>); })}
</div>
{/* Full Articles */}
<div className="section-header reveal">
<span className="section-label">
Full Articles
</span>
<h2>
Read In-Depth Guides
</h2>
<div className="section-divider">
</div>
</div>
{posts.map((post, _i) => {  return (<Fragment key={_i}>
<div className="reveal" id={`post-${post.slug}`} style={{ background: "var(--white)", border: "1.5px solid var(--grey-200)", borderRadius: "var(--radius-xl)", padding: "48px", marginBottom: "32px", boxShadow: "var(--shadow-sm)" }}>
<div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "20px" }}>
<span style={{ background: "var(--blue-50)", color: "var(--blue-600)", fontSize: ".72rem", fontWeight: "700", padding: "5px 14px", borderRadius: "99px", textTransform: "uppercase", letterSpacing: ".08em", border: "1px solid var(--blue-100)" }}>
{post.cat}
</span>
</div>
<h2 style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)", marginBottom: "16px" }}>
{post.title}
</h2>
<div style={{ display: "flex", gap: "20px", marginBottom: "24px", flexWrap: "wrap", paddingBottom: "20px", borderBottom: "1px solid var(--grey-200)" }}>
<span style={{ color: "var(--grey-600)", fontSize: ".85rem" }}>
<i className="fas fa-user-md" style={{ marginRight: "6px", color: "var(--blue-400)" }}>
</i>
{post.author}
</span>
<span style={{ color: "var(--grey-600)", fontSize: ".85rem" }}>
<i className="fas fa-calendar" style={{ marginRight: "6px", color: "var(--blue-400)" }}>
</i>
{post.date}
</span>
<span style={{ color: "var(--grey-600)", fontSize: ".85rem" }}>
<i className="fas fa-clock" style={{ marginRight: "6px", color: "var(--blue-400)" }}>
</i>
{post.read}
</span>
</div>
<div style={{ color: "var(--grey-700)", lineHeight: "1.9", fontSize: ".95rem" }} dangerouslySetInnerHTML={{ __html: post.content }}>
</div>
<div style={{ marginTop: "28px", paddingTop: "24px", borderTop: "1px solid var(--grey-200)" }}>
<Link href="/appointment" className="btn btn-primary btn-sm">
<i className="fas fa-calendar-check">
</i>
 Book a Consultation
</Link>
</div>
</div>
</Fragment>); })}
</div>
</section>
<section className="cta-band">
<div className="container reveal">
<h2>
Have Questions? Talk to Our Experts
</h2>
<p>
Book a consultation and get answers to all your eye health questions from our experienced specialists.
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
