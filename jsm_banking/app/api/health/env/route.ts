import { NextRequest } from 'next/server';

const REQUIRED = [
  'NEXT_PUBLIC_APPWRITE_ENDPOINT',
  'NEXT_PUBLIC_APPWRITE_PROJECT',
  'NEXT_APPWRITE_KEY',
  'APPWRITE_DATABASE_ID',
  'APPWRITE_USER_COLLECTION_ID'
];

export async function GET(_req: NextRequest) {
  const summary = REQUIRED.map(k => ({ key: k, present: !!process.env[k] }));
  const missing = summary.filter(s => !s.present).map(s => s.key);
  return new Response(JSON.stringify({ ok: missing.length === 0, missing, summary }), {
    status: 200,
    headers: { 'content-type': 'application/json' }
  });
}
