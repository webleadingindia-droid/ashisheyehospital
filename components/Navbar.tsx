'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const LINKS = [
  ['/', 'Home'], ['/about', 'About'], ['/services', 'Services'], ['/doctors', 'Doctors'],
  ['/gallery', 'Gallery'], ['/blog', 'Blog'], ['/contact', 'Contact'],
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className="x-head">
      <div className="x-wrap">
        <Link href="/" className="x-brand" aria-label="Ashish Eye Hospital home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/logo.jpg" alt="Ashish Eye Hospital" />
        </Link>
        <button className="x-toggle" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(o => !o)}>
          <i className={`fas ${open ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
        <nav className={`x-menu${open ? ' open' : ''}`}>
          {LINKS.map(([href, label]) => (
            <Link key={href} href={href} className={`x-link${pathname === href ? ' active' : ''}`}>{label}</Link>
          ))}
          <Link href="/appointment" className="x-btn x-btn-primary">Book appointment</Link>
        </nav>
      </div>
    </header>
  );
}
