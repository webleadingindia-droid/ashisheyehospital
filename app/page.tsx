import Link from 'next/link';
import type { Metadata } from 'next';
import { DOCTORS_LIST, HOSPITAL_ADDRESS, HOSPITAL_EMAIL, HOSPITAL_MAPS_URL, HOSPITAL_PHONE, HOSPITAL_WHATSAPP } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Ashish Eye Hospital – Eye Hospital in Mota Varachha, Surat',
  description: 'Cataract surgery, LASIK, retina and glaucoma care, children’s eye care and an optical shop in Mota Varachha, Surat. Book your appointment online.',
};

const services = [
  { name: 'Cataract surgery', slug: 'cataract-surgery', icon: 'fa-eye', desc: 'Micro-incision surgery with a quick recovery and a lens chosen for your lifestyle.' },
  { name: 'LASIK surgery', slug: 'lasik-surgery', icon: 'fa-bullseye', desc: 'Bladeless laser correction to reduce your dependence on glasses and lenses.' },
  { name: 'Retina treatment', slug: 'retina-treatment', icon: 'fa-circle-dot', desc: 'Diabetic retinopathy, macular degeneration and retinal detachment.' },
  { name: 'Glaucoma treatment', slug: 'glaucoma-treatment', icon: 'fa-gauge-high', desc: 'Early detection and long-term pressure control to protect your sight.' },
  { name: 'Children’s eye care', slug: 'pediatric-eye-care', icon: 'fa-child-reaching', desc: 'Lazy eye, squint and glasses for children, in a gentle setting.' },
  { name: 'Eye checkup', slug: 'eye-checkup', icon: 'fa-stethoscope', desc: 'A full examination with modern diagnostic equipment.' },
  { name: 'Cornea services', slug: 'cornea-services', icon: 'fa-droplet', desc: 'Keratoconus, corneal infections and transplant care.' },
  { name: 'Contact lens clinic', slug: 'contact-lens-clinic', icon: 'fa-glasses', desc: 'Fitting and prescriptions for soft and specialty lenses.' },
];

const reasons = [
  { icon: 'fa-user-doctor', title: 'Specialists for each condition', desc: 'Retina, cornea, glaucoma, LASIK and children’s eye care each have their own expert.' },
  { icon: 'fa-microscope', title: 'Modern equipment', desc: 'Surgical microscopes and diagnostic machines that catch problems early.' },
  { icon: 'fa-comments', title: 'Clear explanations', desc: 'You hear what is wrong, what the options are and what each one costs, before you decide.' },
  { icon: 'fa-shield-heart', title: 'A sterile, dedicated OT', desc: 'A separate operation theatre and sterilisation unit within the hospital.' },
];

const quotes = [
  { name: 'Ramesh Gupta', loc: 'Mota Varachha', text: 'I could barely see before my cataract surgery. Now everything is sharp. The doctors and staff were professional and kind throughout.' },
  { name: 'Kavita Sharma', loc: 'Varachha', text: 'Everything was explained before my LASIK, the procedure was painless and the follow-up care was excellent. No more glasses.' },
  { name: 'Dinesh Patel', loc: 'Adajan', text: 'My 8-year-old daughter has amblyopia. The team was patient and gentle with her, and her vision has improved a lot.' },
];

const faqs = [
  { q: 'How do I book an appointment?', a: `Use the online form on this website, call ${HOSPITAL_PHONE}, or walk in at ${HOSPITAL_ADDRESS} between 9 AM and 7 PM, Monday to Saturday.` },
  { q: 'How much does cataract surgery cost?', a: 'The cost depends on the lens type (monofocal, multifocal or toric) and the technique used. We give you a clear estimate after your consultation, with no hidden charges.' },
  { q: 'Am I a good candidate for LASIK?', a: 'It depends on your corneal thickness, how stable your prescription is and your overall eye health. A pre-operative evaluation tells us if LASIK suits you.' },
  { q: 'Do you accept health insurance?', a: 'We accept most major plans and offer cashless treatment for empanelled insurers. Call us before your visit to confirm your coverage.' },
];

const doctors = DOCTORS_LIST.filter(d => d.includes('–')).map(d => {
  const [name, field] = d.split('–').map(s => s.trim());
  return { name, field, initials: name.replace('Dr. ', '').split(' ').map(w => w[0]).join('') };
});

const bento = ['big', 'wide', '', 'sand', '', 'sand', '', 'sand'];
const stats = [['15,000+', 'Patients treated'], ['13+', 'Years of eye care'], ['8', 'Specialist services'], ['5.0', 'Google rating']];

export default function Page() {
  return (
    <>
      <section className="x-hero">
        <div className="x-wrap">
          <div>
            <div className="tags"><span><i className="fas fa-star"></i>5.0 on Google</span><span>Mota Varachha, Surat</span></div>
            <h1>Clear vision starts with <em>one visit.</em></h1>
            <p className="lead">Cataract, LASIK, retina, glaucoma and children’s eye care. Eye tests, surgery and glasses, all in one building.</p>
            <div className="acts">
              <Link href="/appointment" className="x-btn x-btn-primary"><i className="fas fa-calendar-check"></i> Book appointment</Link>
              <a href={`tel:${HOSPITAL_PHONE}`} className="x-btn x-btn-ghost"><i className="fas fa-phone"></i> {HOSPITAL_PHONE}</a>
            </div>
            <small>Open Monday to Saturday, 9:00 AM–7:00 PM.</small>
          </div>
          <div className="x-iris">
            <div className="ring r1"></div><div className="ring r2"></div><div className="ring r3"></div><div className="dot"></div>
            <div className="pic">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/img/gallery-1.jpg" alt="Doctor at Ashish Eye Hospital" /></div>
            <div className="x-glass g1"><span className="gi"><i className="fas fa-user-doctor"></i></span><div><b>5 eye specialists</b><span>Retina, cornea, LASIK</span></div></div>
            <div className="x-glass g2"><span className="gi"><i className="fas fa-scissors"></i></span><div><b>In-house OT</b><span>Same-building surgery</span></div></div>
            <div className="x-chart" aria-label="Eye chart">
              <span className="r1">E</span><span className="r2">FP</span><span className="r3">TOZ</span><span className="r4">LPED</span>
              <Link href="/appointment">Check your vision</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="x-stats"><div className="x-wrap"><div>
        {stats.map(([n, l]) => <div className="s" key={l}><b>{n}</b><span>{l}</span></div>)}
      </div></div></div>

      <div className="x-marq" aria-hidden="true"><div className="t">
        {[0, 1].map(k => <span key={k}>{services.map(s => <span key={s.slug + k}>{s.name} <i className="fas fa-eye"></i></span>)}</span>)}
      </div></div>

      <section className="x-sec" id="services">
        <div className="x-wrap">
          <div className="top">
            <div><h2>Every eye problem, one hospital</h2><p className="sub">From a routine eye test to complex surgery, you do not need to go anywhere else.</p></div>
            <Link href="/services" className="x-btn x-btn-ghost">All services</Link>
          </div>
          <div className="x-bento">
            {services.map((s, i) => (
              <Link key={s.slug} href={`/services#${s.slug}`} className={`x-b ${bento[i]}`}>
                <span className="ic"><i className={`fas ${s.icon}`}></i></span><span className="go"><i className="fas fa-arrow-right"></i></span>
                <h3>{s.name}</h3><p>{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="x-sec dark">
        <div className="x-wrap x-why">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/gallery-1.jpg" alt="Consultation room with diagnostic equipment" loading="lazy" style={{ objectPosition: '70% 40%' }} />
          <div>
            <h2>What to expect when you come in</h2>
            <p className="sub">A hospital that is easy to trust and easy to understand.</p>
            <ul>{reasons.map(r => (
              <li key={r.title}><i className={`fas ${r.icon}`}></i><div><h4>{r.title}</h4><p>{r.desc}</p></div></li>
            ))}</ul>
          </div>
        </div>
      </section>

      <section className="x-sec">
        <div className="x-wrap">
          <div className="top"><div><h2>Take a look inside</h2><p className="sub">Reception, optical shop and OT, as they are today.</p></div><Link href="/gallery" className="x-btn x-btn-ghost">Full gallery</Link></div>
          <div className="x-mosaic">
            {/* eslint-disable @next/next/no-img-element */}
            <img className="w2" src="/img/gallery-5.jpg" alt="Hospital reception" loading="lazy" />
            <img className="h2" src="/img/gallery-3.jpg" alt="Waiting area" loading="lazy" />
            <img className="h2" src="/img/gallery-4.jpg" alt="Optical shop" loading="lazy" />
            <img src="/img/gallery-8.jpg" alt="Ashish Eye Hospital logo" loading="lazy" />
            <img src="/img/gallery-6.jpg" alt="O.T. complex" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="x-sec alt">
        <div className="x-wrap">
          <div className="top"><div><h2>Meet the doctors</h2><p className="sub">Experienced ophthalmologists, each focused on one area of eye care.</p></div><Link href="/doctors" className="x-btn x-btn-ghost">See all doctors</Link></div>
          <div className="x-docs">
            {doctors.map(d => (
              <div className="x-doc" key={d.name}><div className="av">{d.initials}</div><h3>{d.name}</h3><p>{d.field}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="x-sec">
        <div className="x-wrap">
          <div className="top"><h2>What our patients say</h2></div>
          <div className="x-tst">
            <div className="main"><p>{quotes[0].text}</p><div className="who"><b>{quotes[0].name}</b><span>{quotes[0].loc}, Surat</span></div></div>
            <div className="stack">
              {quotes.slice(1).map(q => (
                <div className="c" key={q.name}><div className="st">★★★★★</div><p>{q.text}</p><div className="who" style={{ marginTop: 14 }}><b>{q.name}</b><span>{q.loc}, Surat</span></div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="x-sec alt">
        <div className="x-wrap">
          <div className="top"><h2>Common questions</h2></div>
          <div className="x-faq">
            {faqs.map(f => <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}
          </div>
        </div>
      </section>

      <section className="x-sec">
        <div className="x-wrap">
          <div className="top"><h2>Visit us in Mota Varachha</h2></div>
          <div className="x-visit">
            <div className="card">
              <div className="row"><i className="fas fa-location-dot"></i><div><b>Address</b><span>{HOSPITAL_ADDRESS}</span></div></div>
              <div className="row"><i className="fas fa-clock"></i><div><b>Hours</b><span>Mon–Sat 9:00 AM–7:00 PM. Sunday by appointment.</span></div></div>
              <div className="row"><i className="fas fa-phone"></i><div><b>Call or email</b><a href={`tel:${HOSPITAL_PHONE}`}>{HOSPITAL_PHONE}</a><br /><a href={`mailto:${HOSPITAL_EMAIL}`}>{HOSPITAL_EMAIL}</a></div></div>
              <div className="row"><i className="fab fa-whatsapp"></i><div><b>WhatsApp</b><a href={`https://wa.me/${HOSPITAL_WHATSAPP}`}>Message us</a></div></div>
            </div>
            <iframe src={HOSPITAL_MAPS_URL} title="Ashish Eye Hospital on Google Maps" loading="lazy"></iframe>
          </div>
        </div>
      </section>

      <section className="x-cta">
        <div className="x-wrap">
          <div><h2>Not seeing as well as you used to?</h2><p>Book an eye test this week and get a clear answer.</p></div>
          <div className="acts">
            <Link href="/appointment" className="x-btn x-btn-light">Book appointment</Link>
            <a href={`tel:${HOSPITAL_PHONE}`} className="x-btn x-btn-line">Call now</a>
          </div>
        </div>
      </section>
    </>
  );
}
