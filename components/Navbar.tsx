'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { SERVICES } from '@/lib/config';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
];
const AFTER = [
  { href: '/doctors', label: 'Doctors' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  const active = (href: string) => (pathname === href ? 'active' : '');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      const t = e.target as Node;
      if (toggleRef.current?.contains(t) || menuRef.current?.contains(t)) return;
      setOpen(false);
    };
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="container">
        <Link href="/" className="navbar-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/logo.jpg" width={280} alt="Ashish Eye Hospital" />
        </Link>

        <button ref={toggleRef} className={`nav-toggle${open ? ' active' : ''}`} id="navToggle" aria-label="Toggle Navigation" onClick={() => setOpen(o => !o)}>
          <span></span><span></span><span></span>
        </button>

        <ul ref={menuRef} className={`nav-menu${open ? ' open' : ''}`} id="navMenu">
          {LINKS.map(l => (
            <li key={l.href}><Link href={l.href} className={active(l.href)}>{l.label}</Link></li>
          ))}
          <li className="has-dropdown">
            <Link href="/services" className={active('/services')}>Services <i className="fas fa-chevron-down"></i></Link>
            <ul className="dropdown">
              {SERVICES.map(s => (
                <li key={s.slug}><Link href={`/services#${s.slug}`}><i className={`fas ${s.icon}`}></i> {s.name}</Link></li>
              ))}
            </ul>
          </li>
          {AFTER.map(l => (
            <li key={l.href}><Link href={l.href} className={active(l.href)}>{l.label}</Link></li>
          ))}
          <li>
            <Link href="/appointment" className={`btn-nav-appt ${active('/appointment')}`}><i className="fas fa-calendar-check"></i> Book Appointment</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
