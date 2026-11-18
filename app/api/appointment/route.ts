import { NextResponse } from 'next/server';
import { appendEntry, clean } from '@/lib/store';

export async function POST(req: Request) {
  let b: Record<string, unknown> = {};
  try { b = await req.json(); } catch { /* ignore */ }
  const name = clean(b.name), phone = clean(b.phone), service = clean(b.service), date = clean(b.date);
  if (!name || !phone || !service || !date) {
    return NextResponse.json({ ok: false, message: 'Please fill in all required fields (Name, Phone, Service, Date).' }, { status: 400 });
  }
  try {
    await appendEntry('appointments', {
      name, phone, email: clean(b.email), service, date,
      time: clean(b.time), doctor: clean(b.doctor), patient_type: clean(b.patient_type),
      message: clean(b.message), source: clean(b.source) || 'appointment-page',
      timestamp: new Date().toISOString(), status: 'pending',
    });
    return NextResponse.json({ ok: true, message: `Thank you ${name}! Your appointment request has been received. We will call you within 2–4 hours to confirm.` });
  } catch {
    return NextResponse.json({ ok: false, message: 'There was an issue saving your request. Please call +91 70435 99108 directly.' }, { status: 500 });
  }
}
