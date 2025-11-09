import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Rutas que requieren autenticación
  const protectedRoutes = ['/dashboard'];
  
  // Rutas públicas que no requieren autenticación
  const publicRoutes = ['/login', '/auth/callback', '/'];

  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));
  const isPublicRoute = publicRoutes.includes(pathname) || pathname.startsWith('/auth/');

  // Si es una ruta protegida, verificar autenticación
  if (isProtectedRoute) {
    // En el middleware no podemos acceder a localStorage directamente
    // Pero podemos verificar si hay cookies o headers de autenticación
    const authCookie = request.cookies.get('discord_token');
    
    if (!authCookie) {
      // Redirigir a login si no está autenticado
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Si está autenticado y trata de acceder a login, redirigir a dashboard
  if (pathname === '/login') {
    const authCookie = request.cookies.get('discord_token');
    if (authCookie) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
};