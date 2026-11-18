'use client';
import { useEffect, useState } from 'react';
import { SERVICES } from '@/lib/config';
import { showFlash } from '@/lib/flash';

export default function AppointmentModal() {
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [minDate, setMinDate] = useState('');

  useEffect(() => {
    setMinDate(new Date().toISOString().split('T')[0]);
    const onClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('#openModal, .open-modal')) setOpen(true);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('click', onClick); document.removeEventListener('keydown', onKey); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setBusy(true);
    try {
      const res = await fetch('/api/appointment', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...data, source: 'modal' }) });
      const json = await res.json();
      showFlash(json.ok ? 'success' : 'error', json.message);
      if (json.ok) { form.reset(); setOpen(false); }
    } catch {
      showFlash('error', 'Network error. Please call +91 70435 99108 directly.');
    } finally { setBusy(false); }
  }

  return (
    <div id="apptModal" className={`modal-overlay${open ? ' active' : ''}`} role="dialog" aria-modal="true" aria-label="Book Appointment"
         onClick={e => { if (e.target === e.currentTarget) setOpen(false); }}>
      <div className="modal-box">
        <button className="modal-close" id="modalClose" aria-label="Close" onClick={() => setOpen(false)}>&times;</button>
        <div className="modal-header">
          <i className="fas fa-calendar-check"></i>
          <h2>Book an Appointment</h2>
          <p>Fill the form below and we&apos;ll confirm your slot shortly.</p>
        </div>
        <form className="appt-form" id="modalApptForm" onSubmit={onSubmit}>
          <div className="form-row">
            <div className="form-group"><label>Full Name *</label><input type="text" name="name" placeholder="Your full name" required /></div>
            <div className="form-group"><label>Phone Number *</label><input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" required /></div>
          </div>
          <div className="form-row">
            <div className="form-group"><label>Email Address</label><input type="email" name="email" placeholder="your@email.com" /></div>
            <div className="form-group">
              <label>Service *</label>
              <select name="service" required defaultValue="">
                <option value="">Select Service</option>
                {SERVICES.map(s => <option key={s.slug} value={s.name}>{s.name}</option>)}
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group"><label>Preferred Date *</label><input type="date" name="date" required min={minDate} /></div>
            <div className="form-group"><label>Message</label><input type="text" name="message" placeholder="Any special requirement?" /></div>
          </div>
          <button type="submit" className="btn btn-primary btn-full" disabled={busy}>
            {busy ? <><i className="fas fa-spinner fa-spin"></i> Submitting...</> : <><i className="fas fa-paper-plane"></i> Confirm Appointment</>}
          </button>
        </form>
      </div>
    </div>
  );
}
