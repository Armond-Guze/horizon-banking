import { NextRequest } from 'next/server';
import { signUp } from '@/lib/actions/user.actions';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const newUser = await signUp(body);
    return new Response(JSON.stringify({ ok: true, user: newUser }), { status: 200, headers: { 'content-type': 'application/json' } });
  } catch (err: any) {
    const message = err?.message || 'Signup failed';
    return new Response(JSON.stringify({ ok: false, error: message }), { status: 400, headers: { 'content-type': 'application/json' } });
  }
}
