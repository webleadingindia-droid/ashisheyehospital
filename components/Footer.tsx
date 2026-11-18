import Link from 'next/link';
import { HOSPITAL_ADDRESS, HOSPITAL_EMAIL, HOSPITAL_PHONE, HOSPITAL_WHATSAPP, SERVICES } from '@/lib/config';

const QUICK = [['/about', 'About us'], ['/doctors', 'Our doctors'], ['/gallery', 'Gallery'], ['/blog', 'Blog'], ['/contact', 'Contact'], ['/appointment', 'Book appointment']];

export default function Footer() {
  return (
    <footer className="x-foot">
      <div className="x-wrap">
        <div className="g">
          <div>
            <Link href="/" className="logo">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/img/logo.jpg" alt="Ashish Eye Hospital" /></Link>
            <p>Eye tests, surgery and glasses under one roof in Mota Varachha, Surat.</p>
            <p style={{ marginTop: 14 }}><a href={`https://wa.me/${HOSPITAL_WHATSAPP}`}><i className="fab fa-whatsapp"></i> Chat on WhatsApp</a></p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>{QUICK.map(([h, l]) => <li key={h}><Link href={h}>{l}</Link></li>)}</ul>
          </div>
          <div>
            <h4>Treatments</h4>
            <ul>{SERVICES.map(s => <li key={s.slug}><Link href={`/services#${s.slug}`}>{s.name}</Link></li>)}</ul>
          </div>
          <div>
            <h4>Visit us</h4>
            <ul>
              <li>{HOSPITAL_ADDRESS}</li>
              <li><a href={`tel:${HOSPITAL_PHONE}`}>{HOSPITAL_PHONE}</a></li>
              <li><a href={`mailto:${HOSPITAL_EMAIL}`}>{HOSPITAL_EMAIL}</a></li>
              <li>Mon–Sat 9:00 AM–7:00 PM. Sunday by appointment.</li>
            </ul>
          </div>
        </div>
        <div className="bot">
          <span>© {new Date().getFullYear()} Ashish Eye Hospital. All rights reserved.</span>
          <span><a href="#">Privacy policy</a> &nbsp; <a href="#">Terms</a></span>
        </div>
      </div>
    </footer>
  );
}
