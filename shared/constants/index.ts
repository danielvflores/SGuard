// Constantes compartidas entre proyectos

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    USER: '/auth/user',
  },
  GUILDS: {
    LIST: '/guilds',
    DETAIL: '/guilds/:id',
    CONFIG: '/guilds/:id/config',
  },
  MODERATION: {
    ACTIONS: '/moderation/actions',
    SANCTIONS: '/moderation/sanctions',
    CONFIG: '/moderation/config/:guildId',
  },
  USERS: {
    LIST: '/users',
    DETAIL: '/users/:id',
  },
} as const;

export const DISCORD_PERMISSIONS = {
  CREATE_INSTANT_INVITE: 1n << 0n,
  KICK_MEMBERS: 1n << 1n,
  BAN_MEMBERS: 1n << 2n,
  ADMINISTRATOR: 1n << 3n,
  MANAGE_CHANNELS: 1n << 4n,
  MANAGE_GUILD: 1n << 5n,
  ADD_REACTIONS: 1n << 6n,
  VIEW_AUDIT_LOG: 1n << 7n,
  PRIORITY_SPEAKER: 1n << 8n,
  STREAM: 1n << 9n,
  VIEW_CHANNEL: 1n << 10n,
  SEND_MESSAGES: 1n << 11n,
  SEND_TTS_MESSAGES: 1n << 12n,
  MANAGE_MESSAGES: 1n << 13n,
  EMBED_LINKS: 1n << 14n,
  ATTACH_FILES: 1n << 15n,
  READ_MESSAGE_HISTORY: 1n << 16n,
  MENTION_EVERYONE: 1n << 17n,
  USE_EXTERNAL_EMOJIS: 1n << 18n,
  VIEW_GUILD_INSIGHTS: 1n << 19n,
  CONNECT: 1n << 20n,
  SPEAK: 1n << 21n,
  MUTE_MEMBERS: 1n << 22n,
  DEAFEN_MEMBERS: 1n << 23n,
  MOVE_MEMBERS: 1n << 24n,
  USE_VAD: 1n << 25n,
  CHANGE_NICKNAME: 1n << 26n,
  MANAGE_NICKNAMES: 1n << 27n,
  MANAGE_ROLES: 1n << 28n,
  MANAGE_WEBHOOKS: 1n << 29n,
  MANAGE_EMOJIS_AND_STICKERS: 1n << 30n,
} as const;

export const MODERATION_ACTIONS = {
  WARN: 'warn',
  MUTE: 'mute',
  KICK: 'kick',
  BAN: 'ban',
  UNBAN: 'unban',
} as const;

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500,
} as const;

export const TOXICITY_THRESHOLD = 0.7;
export const SPAM_MESSAGE_LIMIT = 5;
export const SPAM_TIME_WINDOW = 10000; // 10 segundos

export const DEFAULT_MODERATION_CONFIG = {
  autoModeration: {
    enabled: true,
    spamProtection: true,
    toxicityDetection: true,
    keywordFiltering: true,
    linkFiltering: false,
  },
  sanctions: {
    warnThreshold: 3,
    muteThreshold: 2,
    kickThreshold: 3,
    banThreshold: 5,
  },
  channels: {},
} as const;