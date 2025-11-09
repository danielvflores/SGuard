import fetch from "node-fetch";
import type { Message } from "discord.js";
import { selectSanction } from "./modActions.js";
import { shouldTakeAction } from "./shouldTakeAction.js";

const API_BASE_URL = process.env.API_BASE_URL;

interface ModerationConfig {
  level: "light" | "medium" | "strict";
  customSettings?: Record<string, any>;
}

const getModerationLevel = async (guildId: string): Promise<ModerationConfig> => {
  try {
    const response = await fetch(`${API_BASE_URL}/${guildId}/moderation`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bot ${process.env.BOT_TOKEN}`
      }
    });
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    
    const data = await response.json() as ModerationConfig;
    return data;
  } catch (error) {
    return { level: "medium" };
  }
};


export const handleToxicMessage = async (message: Message, score: number): Promise<void> => {
  if (!message.guild) return;
  
  const config = await getModerationLevel(message.guild.id);
  const decision = shouldTakeAction(score, config.level);

  if (decision.shouldAct && decision.action) {
    try {
      await decision.action(message);
    } catch (error) {
      console.error(`[AutoMod] Error ejecutando acción:`, error);
    }
  }
};