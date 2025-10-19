// Tipos compartidos entre API, Bot y Frontend

export interface User {
  id: string;
  username: string;
  discriminator: string;
  avatar?: string;
  email?: string;
  verified?: boolean;
}

export interface Guild {
  id: string;
  name: string;
  icon?: string;
  owner: boolean;
  permissions: string;
  features: string[];
}

export interface ModerationConfig {
  guildId: string;
  autoModeration: {
    enabled: boolean;
    spamProtection: boolean;
    toxicityDetection: boolean;
    keywordFiltering: boolean;
    linkFiltering: boolean;
  };
  sanctions: {
    warnThreshold: number;
    muteThreshold: number;
    kickThreshold: number;
    banThreshold: number;
  };
  channels: {
    modLog?: string;
    appeals?: string;
    reports?: string;
  };
}

export interface ModerationAction {
  id: string;
  guildId: string;
  userId: string;
  moderatorId: string;
  type: 'warn' | 'mute' | 'kick' | 'ban' | 'unban';
  reason: string;
  timestamp: Date;
  duration?: number; // en segundos
  active: boolean;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface DiscordOAuth2User {
  id: string;
  username: string;
  discriminator: string;
  avatar: string | null;
  verified?: boolean;
  email?: string;
  flags?: number;
  banner?: string | null;
  accent_color?: number | null;
  premium_type?: number;
  public_flags?: number;
}

export interface DiscordOAuth2Guild {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
  permissions: string;
  features: string[];
}