'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';

interface Guild {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
  permissions: string;
}

interface ModerationConfig {
  level: 'light' | 'medium' | 'strict';
  customSettings?: Record<string, any>;
}

export default function DashboardPage() {
  const { user, token, logout } = useAuth();
  const [guilds, setGuilds] = useState<Guild[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedGuild, setSelectedGuild] = useState<Guild | null>(null);
  const [moderationConfig, setModerationConfig] = useState<ModerationConfig | null>(null);

  useEffect(() => {
    if (token) {
      fetchGuilds();
    }
  }, [token]);

  const fetchGuilds = async () => {
    try {
      const tokenData = JSON.parse(token || '{}');
      const response = await fetch('https://discord.com/api/users/@me/guilds', {
        headers: {
          'Authorization': `Bearer ${tokenData.access_token}`,
        },
      });

      if (response.ok) {
        const guildsData = await response.json();
        // Filtrar solo guilds donde el usuario es admin o owner
        const adminGuilds = guildsData.filter((guild: Guild) => {
          const permissions = parseInt(guild.permissions);
          return guild.owner || (permissions & 0x8) === 0x8; // ADMINISTRATOR permission
        });
        setGuilds(adminGuilds);
      }
    } catch (error) {
      console.error('Error fetching guilds:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchModerationConfig = async (guildId: string) => {
    try {
      const response = await fetch(`http://localhost:3001/api/${guildId}/moderation`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bot ${process.env.NEXT_PUBLIC_BOT_TOKEN || ''}`,
        },
      });

      if (response.ok) {
        const config = await response.json();
        setModerationConfig(config);
      } else {
        setModerationConfig({ level: 'medium' }); // Default config
      }
    } catch (error) {
      console.error('Error fetching moderation config:', error);
      setModerationConfig({ level: 'medium' });
    }
  };

  const updateModerationConfig = async (guildId: string, newConfig: ModerationConfig) => {
    try {
      const response = await fetch(`http://localhost:3001/api/${guildId}/moderation`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bot ${process.env.NEXT_PUBLIC_BOT_TOKEN || ''}`,
        },
        body: JSON.stringify(newConfig),
      });

      if (response.ok) {
        setModerationConfig(newConfig);
        alert('Configuración actualizada correctamente');
      } else {
        alert('Error actualizando configuración');
      }
    } catch (error) {
      console.error('Error updating moderation config:', error);
      alert('Error actualizando configuración');
    }
  };

  const selectGuild = (guild: Guild) => {
    setSelectedGuild(guild);
    fetchModerationConfig(guild.id);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              {user?.avatar ? (
                <img
                  className="h-10 w-10 rounded-full"
                  src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
                  alt={user.username}
                />
              ) : (
                <div className="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {user?.username?.[0]?.toUpperCase()}
                  </span>
                </div>
              )}
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-sm text-gray-600">Bienvenido, {user?.username}</p>
              </div>
            </div>
            <button
              onClick={logout}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Lista de Servidores */}
            <div className="lg:col-span-1">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                    Tus Servidores
                  </h3>
                  <div className="space-y-3">
                    {guilds.length === 0 ? (
                      <p className="text-gray-500 text-sm">
                        No tienes permisos de administrador en ningún servidor.
                      </p>
                    ) : (
                      guilds.map((guild) => (
                        <button
                          key={guild.id}
                          onClick={() => selectGuild(guild)}
                          className={`w-full flex items-center space-x-3 p-3 rounded-lg border-2 transition-colors ${
                            selectedGuild?.id === guild.id
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          {guild.icon ? (
                            <img
                              className="h-8 w-8 rounded-full"
                              src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`}
                              alt={guild.name}
                            />
                          ) : (
                            <div className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center">
                              <span className="text-white text-xs font-semibold">
                                {guild.name[0]}
                              </span>
                            </div>
                          )}
                          <div className="flex-1 text-left">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {guild.name}
                            </p>
                            {guild.owner && (
                              <p className="text-xs text-blue-600">Propietario</p>
                            )}
                          </div>
                        </button>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Panel de Configuración */}
            <div className="lg:col-span-2">
              {selectedGuild ? (
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center space-x-3 mb-6">
                      {selectedGuild.icon ? (
                        <img
                          className="h-12 w-12 rounded-full"
                          src={`https://cdn.discordapp.com/icons/${selectedGuild.id}/${selectedGuild.icon}.png`}
                          alt={selectedGuild.name}
                        />
                      ) : (
                        <div className="h-12 w-12 rounded-full bg-gray-400 flex items-center justify-center">
                          <span className="text-white font-semibold">
                            {selectedGuild.name[0]}
                          </span>
                        </div>
                      )}
                      <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          {selectedGuild.name}
                        </h3>
                        <p className="text-sm text-gray-600">Configuración de Moderación</p>
                      </div>
                    </div>

                    {moderationConfig && (
                      <div className="space-y-6">
                        <div>
                          <label className="text-base font-medium text-gray-900">
                            Nivel de Moderación
                          </label>
                          <p className="text-sm leading-5 text-gray-500">
                            Selecciona qué tan estricta debe ser la moderación automática
                          </p>
                          <fieldset className="mt-4">
                            <legend className="sr-only">Niveles de moderación</legend>
                            <div className="space-y-4">
                              {[
                                { value: 'light', label: 'Ligera', description: 'Solo contenido extremadamente tóxico' },
                                { value: 'medium', label: 'Media', description: 'Contenido moderadamente tóxico y extremo' },
                                { value: 'strict', label: 'Estricta', description: 'Cualquier contenido potencialmente tóxico' },
                              ].map((option) => (
                                <div key={option.value} className="flex items-center">
                                  <input
                                    id={option.value}
                                    name="moderation-level"
                                    type="radio"
                                    checked={moderationConfig.level === option.value}
                                    onChange={() => {
                                      const newConfig = { ...moderationConfig, level: option.value as any };
                                      updateModerationConfig(selectedGuild.id, newConfig);
                                    }}
                                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                                  />
                                  <label htmlFor={option.value} className="ml-3 block">
                                    <span className="text-sm font-medium text-gray-700">
                                      {option.label}
                                    </span>
                                    <span className="text-sm text-gray-500 block">
                                      {option.description}
                                    </span>
                                  </label>
                                </div>
                              ))}
                            </div>
                          </fieldset>
                        </div>

                        <div className="border-t border-gray-200 pt-6">
                          <h4 className="text-sm font-medium text-gray-900 mb-4">
                            Estado del Bot
                          </h4>
                          <div className="flex items-center space-x-2">
                            <div className="h-2 w-2 bg-green-400 rounded-full"></div>
                            <span className="text-sm text-gray-600">Bot activo y funcionando</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                    <h3 className="mt-2 text-sm font-medium text-gray-900">
                      Selecciona un servidor
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Elige un servidor de la lista para configurar la moderación automática.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}