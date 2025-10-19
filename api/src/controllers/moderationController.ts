
import { Request, Response } from 'express';

let moderationData = {
  level: 'medium',
  customSettings: {}
};

export const getModerationLevel = (req: Request, res: Response) => {
  res.json(moderationData);
};

export const updateModerationLevel = (req: Request, res: Response) => {
  const { level, customSettings } = req.body;
  moderationData = { level, customSettings };
  res.json({ success: true, level });
};