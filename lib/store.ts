import { promises as fs } from 'fs';
import path from 'path';

// Saves submissions to /data/*.json (same idea as the PHP version).
// NOTE: serverless hosts (e.g. Vercel) have a read-only filesystem - swap this for a DB/email service there.
export async function appendEntry(file: 'appointments' | 'contacts', entry: Record<string, unknown>) {
  const dir = path.join(process.cwd(), 'data');
  await fs.mkdir(dir, { recursive: true });
  const f = path.join(dir, `${file}.json`);
  let existing: unknown[] = [];
  try { existing = JSON.parse(await fs.readFile(f, 'utf8')) || []; } catch { existing = []; }
  existing.push(entry);
  await fs.writeFile(f, JSON.stringify(existing, null, 2), 'utf8');
}

export const clean = (v: unknown) => String(v ?? '').trim().replace(/[<>]/g, '');
