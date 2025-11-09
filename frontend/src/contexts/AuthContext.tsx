'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

interface DiscordUser {
  id: string;
  username: string;
  discriminator: string;
  avatar: string | null;
  verified?: boolean;
  email?: string;
}

interface AuthContextType {
  user: DiscordUser | null;
  token: string | null;
  login: () => void;
  logout: () => void;
  isLoading: boolean;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<DiscordUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const isAuthenticated = !!user && !!token;

  useEffect(() => {
    // Verificar si hay datos de autenticación en localStorage
    const savedUser = localStorage.getItem('discord_user');
    const savedToken = localStorage.getItem('discord_token');
    
    if (savedUser && savedToken) {
      try {
        setUser(JSON.parse(savedUser));
        setToken(savedToken);
        
        // También establecer una cookie para el middleware
        document.cookie = `discord_token=${savedToken}; path=/; max-age=${7 * 24 * 60 * 60}`; // 7 días
      } catch (error) {
        console.error('Error parsing saved auth data:', error);
        localStorage.removeItem('discord_user');
        localStorage.removeItem('discord_token');
        document.cookie = 'discord_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
      }
    }
    
    setIsLoading(false);
  }, []);

  const login = () => {
    // Redirigir a la API OAuth2
    window.location.href = 'http://localhost:3001/api/auth/discord';
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('discord_user');
    localStorage.removeItem('discord_token');
    // Eliminar cookie
    document.cookie = 'discord_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
  };

  const value: AuthContextType = {
    user,
    token,
    login,
    logout,
    isLoading,
    isAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};