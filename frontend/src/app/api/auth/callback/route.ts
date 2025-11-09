import { NextRequest, NextResponse } from 'next/server';
import querystring from 'querystring';

const CLIENT_ID = process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID || '1400545272572149902';
const CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET || 'fa-0-i0L7bRKu06PSuSPFE7Wly_kViPG';
const REDIRECT_URI = process.env.NEXT_PUBLIC_DISCORD_REDIRECT_URI || 'http://localhost:3001/api/auth/callback';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const error = searchParams.get('error');

  if (error) {
    return NextResponse.redirect(new URL(`/login?error=${error}`, request.url));
  }

  if (!code) {
    return NextResponse.redirect(new URL('/login?error=no_code', request.url));
  }

  try {
    // Intercambiar código por token
    const tokenRes = await fetch('https://discord.com/api/oauth2/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: querystring.stringify({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: 'authorization_code',
        code,
        redirect_uri: REDIRECT_URI,
        scope: 'identify guilds'
      })
    });
    
    const tokenData = await tokenRes.json();
    if (!tokenData.access_token) {
      return NextResponse.redirect(new URL(`/login?error=no_token`, request.url));
    }

    // Obtener datos del usuario
    const userRes = await fetch('https://discord.com/api/users/@me', {
      headers: { Authorization: `Bearer ${tokenData.access_token}` }
    });
    const userData = await userRes.json();

    // Codificar los datos para pasarlos como query params
    const userDataEncoded = encodeURIComponent(JSON.stringify(userData));
    const tokenDataEncoded = encodeURIComponent(JSON.stringify(tokenData));

    // Redirigir al callback del frontend
    return NextResponse.redirect(new URL(`/auth/callback?user=${userDataEncoded}&token=${tokenDataEncoded}`, request.url));
  } catch (err: any) {
    console.error('OAuth2 error:', err);
    return NextResponse.redirect(new URL(`/login?error=callback_failed`, request.url));
  }
}