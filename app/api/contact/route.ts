import { NextResponse } from 'next/server';
import { appendEntry, clean } from '@/lib/store';

export async function POST(req: Request) {
  let b: Record<string, unknown> = {};
  try { b = await req.json(); } catch { /* ignore */ }
  const name = clean(b.name), phone = clean(b.phone), email = clean(b.email), message = clean(b.message);
  if (!name || !phone || !email || !message) {
    return NextResponse.json({ ok: false, message: 'Please fill in all required fields.' }, { status: 400 });
  }
  try {
    await appendEntry('contacts', { name, phone, email, message, timestamp: new Date().toISOString(), status: 'new' });
    return NextResponse.json({ ok: true, message: `Thank you, ${name}! Your message has been received. We will get back to you within 24 hours.` });
  } catch {
    return NextResponse.json({ ok: false, message: 'There was an issue saving your message. Please call us directly at +91 70435 99108.' }, { status: 500 });
  }
}
