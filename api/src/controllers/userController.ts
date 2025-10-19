import { Request, Response } from "express";

export const getMe = (req: Request, res: Response) => {
  const userId = "123456789";
  const username = "UserTestController.ts";
  const discriminator = "0001";
  const avatarUrl = "avatar_url";

  const user = { id: userId, username, discriminator, avatar: avatarUrl };
  res.json(user);
};