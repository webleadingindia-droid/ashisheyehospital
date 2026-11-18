'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

function animateCount(el: HTMLElement, target: number, duration: number) {
  const start = performance.now();
  const isDecimal = target % 1 !== 0;
  function update(ts: number) {
    const progress = Math.min((ts - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = eased * target;
    el.textContent = isDecimal ? value.toFixed(1) : Math.round(value).toLocaleString();
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

export default function SiteEffects() {
  const pathname = usePathname();
  const [showTop, setShowTop] = useState(false);

  // Scroll reveal + count-up, re-run on every route change
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('revealed'); obs.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => { if (!el.classList.contains('revealed')) obs.observe(el); });

    const cObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const target = parseFloat(el.dataset.target || (el.textContent || '').replace(/[^0-9.]/g, ''));
          animateCount(el, target, 2000);
          cObs.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('.count-up').forEach(c => cObs.observe(c));

    return () => { obs.disconnect(); cObs.disconnect(); };
  }, [pathname]);

  // Delegated: FAQ accordion + smooth anchor scroll
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const q = target.closest('.faq-question');
      if (q) {
        const item = q.closest('.faq-item');
        if (item) {
          const wasOpen = item.classList.contains('open');
          document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
          if (!wasOpen) item.classList.add('open');
        }
        return;
      }
      const a = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (a) {
        const id = a.getAttribute('href')!.slice(1);
        const el = id ? document.getElementById(id) : null;
        if (el) {
          e.preventDefault();
          const nav = document.getElementById('navbar');
          const offset = nav ? nav.offsetHeight + 16 : 80;
          window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
        }
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  // Back to top
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      id="backToTop"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed', bottom: 30, left: 24, width: 42, height: 42, borderRadius: '50%',
        background: 'var(--blue-600)', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '.9rem',
        boxShadow: '0 4px 16px rgba(37,99,235,.35)', opacity: showTop ? 1 : 0,
        visibility: showTop ? 'visible' : 'hidden', transition: 'all .3s ease', zIndex: 700,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      <i className="fas fa-chevron-up"></i>
    </button>
  );
}
