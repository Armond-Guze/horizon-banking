import { NextRequest } from 'next/server';
import { signIn } from '@/lib/actions/user.actions';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const user = await signIn(body);
    return new Response(JSON.stringify({ ok: true, user }), { status: 200, headers: { 'content-type': 'application/json' } });
  } catch (err: any) {
    const message = err?.message || 'Sign in failed';
    return new Response(JSON.stringify({ ok: false, error: message }), { status: 401, headers: { 'content-type': 'application/json' } });
  }
}
