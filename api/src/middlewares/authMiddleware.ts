import { Request, Response, NextFunction } from 'express';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ error: 'No token provided' });


  if (authHeader.startsWith('Bot ')) {
    const token = authHeader.replace('Bot ', '');
    if (token !== process.env.BOT_TOKEN) {
      return res.status(401).json({ error: 'Invalid bot token' });
    }
    (req as any).bot = true;
    return next();
  }

  if (authHeader.startsWith('Bearer ')) {
    const token = authHeader.replace('Bearer ', '');
    const discordRes = await fetch('https://discord.com/api/users/@me', {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (!discordRes.ok) return res.status(401).json({ error: 'Invalid token' });

    const user = await discordRes.json();
    (req as any).user = user;
    return next();
  }

  return res.status(401).json({ error: 'Invalid authorization header' });
};