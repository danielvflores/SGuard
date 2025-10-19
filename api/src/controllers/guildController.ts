import { Request, Response } from 'express';

export const guilds = (req: Request, res: Response) => {
  const guildList = [
    { id: '123456789', name: 'Guild 1', icon: 'icon_url' },
    { id: '987654321', name: 'Guild 2', icon: 'icon_url' }
  ];
  res.json(guildList);
};

export const guildById = (req: Request, res: Response) => {
  const { guildId } = req.params;
  const guild = {
    id: guildId,
    name: `Guild ${guildId}`,
    icon: 'icon_url',
    memberCount: 100,
    ownerId: '987654321'
  };
  res.json(guild);
};

const guildConfigs: Record<string, { prefix: string; moderationLevel: string; logChannel: string }> = {};
const guildLogsData: Record<string, string> = {};

export const guildConfig = (req: Request, res: Response) => {
  const { guildId } = req.params;
  if (!guildConfigs[guildId]) {
    guildConfigs[guildId] = {
      prefix: '!',
      moderationLevel: 'medium',
      logChannel: 'logs'
    };
  }
  res.json({ settings: guildConfigs[guildId] });
};


export const guildLogs = (req: Request, res: Response) => {
  const { guildId } = req.params;
  if (!guildLogsData[guildId]) {
    guildLogsData[guildId] = 'logs';
  }
  res.json({ logChannel: guildLogsData[guildId] });
};


export const updateGuildConfig = (req: Request, res: Response) => {
  const { guildId } = req.params;
  const { settings } = req.body;
  if (settings && typeof settings === 'object') {
    guildConfigs[guildId] = settings;
    res.json({ success: true, settings });
  } else {
    res.status(400).json({ error: 'Invalid settings', code: 400 });
  }
};


export const updateGuildLogs = (req: Request, res: Response) => {
  const { guildId } = req.params;
  const { logChannel } = req.body;
  if (typeof logChannel === 'string') {
    guildLogsData[guildId] = logChannel;
    res.json({ success: true, logChannel });
  } else {
    res.status(400).json({ error: 'Invalid logChannel', code: 400 });
  }
};