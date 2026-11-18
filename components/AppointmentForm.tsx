'use client';
import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { DOCTORS_LIST, SERVICES, TIME_SLOTS } from '@/lib/config';

function Inner() {
  const params = useSearchParams();
  const preService = params.get('service') || '';
  const preDoctor = params.get('doctor') || '';
  const [minDate, setMinDate] = useState('');
  const [busy, setBusy] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => { setMinDate(new Date().toISOString().slice(0, 10)); }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setBusy(true); setSuccess(''); setError('');
    try {
      const res = await fetch('/api/appointment', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...data, source: 'appointment-page' }) });
      const json = await res.json();
      if (json.ok) { setSuccess(json.message); form.reset(); } else setError(json.message);
    } catch {
      setError('There was a technical issue. Please call us directly at +91 70435 99108 to book your appointment.');
    } finally { setBusy(false); }
  }

  const doctorDefault = preDoctor ? DOCTORS_LIST.find(d => d.includes(preDoctor)) || '' : '';

  return (
    <>
      {success && (
        <div className="alert alert-success">
          <i className="fas fa-check-circle" style={{ fontSize: '1.2rem' }}></i>
          <span>{success}</span>
        </div>
      )}
      {error && (
        <div className="alert alert-error">
          <i className="fas fa-exclamation-circle"></i> {error}
        </div>
      )}

      <form className="appt-form" onSubmit={onSubmit}>
        <div className="form-row">
          <div className="form-group"><label>Full Name *</label><input type="text" name="name" placeholder="Your full name" required /></div>
          <div className="form-group"><label>Phone Number *</label><input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" required /></div>
        </div>
        <div className="form-group form-group-full">
          <label>Email Address</label>
          <input type="email" name="email" placeholder="your@email.com" />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Service / Treatment *</label>
            <select name="service" required defaultValue={preService}>
              <option value="">Select Service</option>
              {SERVICES.map(s => <option key={s.slug} value={s.name}>{s.name}</option>)}
              <option value="General Consultation">General Consultation / Eye Checkup</option>
            </select>
          </div>
          <div className="form-group">
            <label>Preferred Doctor</label>
            <select name="doctor" defaultValue={doctorDefault}>
              <option value="">No Preference</option>
              {DOCTORS_LIST.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group"><label>Preferred Date *</label><input type="date" name="date" required min={minDate} /></div>
          <div className="form-group">
            <label>Preferred Time Slot</label>
            <select name="time">
              <option value="">Any Time</option>
              {TIME_SLOTS.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>
        <div className="form-group form-group-full" style={{ marginBottom: 24 }}>
          <label>Additional Notes / Symptoms</label>
          <textarea name="message" rows={4} placeholder="Describe your eye concern, current symptoms, or any special requirement (e.g., wheelchair access, interpreter needed)..."></textarea>
        </div>
        <div className="form-group form-group-full" style={{ marginBottom: 24 }}>
          <label>Patient Type</label>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 6 }}>
            {['New Patient', 'Existing Patient', 'Emergency'].map(t => (
              <label key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '.9rem', fontWeight: 400, cursor: 'pointer' }}>
                <input type="radio" name="patient_type" value={t} defaultChecked={t === 'New Patient'} /> {t}
              </label>
            ))}
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-full" disabled={busy} style={{ fontSize: '1rem', padding: '15px 32px' }}>
          {busy ? <><i className="fas fa-spinner fa-spin"></i> Submitting...</> : <><i className="fas fa-calendar-check"></i> Confirm Appointment Request</>}
        </button>
        <p style={{ fontSize: '.75rem', color: 'var(--grey-400)', textAlign: 'center', marginTop: 12, lineHeight: 1.6 }}>
          <i className="fas fa-shield-check"></i> Your data is private and secure. We will never share your information with third parties.
        </p>
      </form>
    </>
  );
}

export default function AppointmentForm() {
  return <Suspense fallback={null}><Inner /></Suspense>;
}
