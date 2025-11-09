'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function CallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleCallback = async () => {
      const error = searchParams.get('error');
      const userParam = searchParams.get('user');
      const tokenParam = searchParams.get('token');

      if (error) {
        console.error('OAuth2 error:', error);
        const details = searchParams.get('details');
        if (details) {
          console.error('Error details:', details);
        }
        router.push(`/login?error=${error}`);
        return;
      }

      if (!userParam || !tokenParam) {
        console.error('Missing user or token data');
        router.push('/login?error=missing_data');
        return;
      }

      try {
        // Decodificar los datos recibidos de la API
        const user = JSON.parse(decodeURIComponent(userParam));
        const token = JSON.parse(decodeURIComponent(tokenParam));
        
        if (user && token) {
          // Guardar datos de autenticación
          localStorage.setItem('discord_user', JSON.stringify(user));
          localStorage.setItem('discord_token', JSON.stringify(token));
          
          // Establecer cookie para middleware
          document.cookie = `discord_token=${JSON.stringify(token)}; path=/; max-age=${7 * 24 * 60 * 60}`; // 7 días
          
          // Redirigir al dashboard
          router.push('/dashboard');
        } else {
          throw new Error('Invalid user or token data');
        }
      } catch (error) {
        console.error('Callback error:', error);
        router.push('/login?error=callback_failed');
      }
    };

    handleCallback();
  }, [searchParams, router]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <h2 className="mt-4 text-xl font-semibold text-gray-900">
          Completando autenticación...
        </h2>
        <p className="mt-2 text-gray-600">
          Te redirigiremos al dashboard en un momento
        </p>
      </div>
    </div>
  );
}