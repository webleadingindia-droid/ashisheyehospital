'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [busy, setBusy] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setBusy(true); setSuccess(''); setError('');
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      const json = await res.json();
      if (json.ok) { setSuccess(json.message); form.reset(); } else setError(json.message);
    } catch {
      setError('There was an issue sending your message. Please call us directly at +91 70435 99108.');
    } finally { setBusy(false); }
  }

  return (
    <>
      {success && <div className="alert alert-success"><i className="fas fa-check-circle"></i> {success}</div>}
      {error && <div className="alert alert-error"><i className="fas fa-exclamation-circle"></i> {error}</div>}
      <form id="contact-form" onSubmit={onSubmit}>
        <div className="form-row">
          <div className="form-group"><label>Full Name *</label><input type="text" name="name" placeholder="Your full name" required /></div>
          <div className="form-group"><label>Phone Number *</label><input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" required /></div>
        </div>
        <div className="form-group" style={{ marginBottom: 16 }}>
          <label>Email Address *</label>
          <input type="email" name="email" placeholder="your@email.com" required />
        </div>
        <div className="form-group" style={{ marginBottom: 24 }}>
          <label>Your Message *</label>
          <textarea name="message" rows={5} placeholder="How can we help you? Tell us about your eye concern or query..." required></textarea>
        </div>
        <button type="submit" className="btn btn-primary btn-full" disabled={busy}>
          {busy ? <><i className="fas fa-spinner fa-spin"></i> Sending...</> : <><i className="fas fa-paper-plane"></i> Send Message</>}
        </button>
        <p style={{ fontSize: '.78rem', color: 'var(--grey-500)', textAlign: 'center', marginTop: 12 }}>
          <i className="fas fa-lock"></i> Your information is safe and will not be shared with third parties.
        </p>
      </form>
    </>
  );
}
