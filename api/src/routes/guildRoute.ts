import { Router } from "express";
import { guilds, guildById, guildConfig, guildLogs, updateGuildConfig, updateGuildLogs } from "../controllers/guildController";
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.get('/guilds', authMiddleware, guilds);
router.get('/guilds/:guildId', authMiddleware, guildById);
router.get('/guilds/:guildId/config', authMiddleware, guildConfig);
router.get('/guilds/:guildId/logs', authMiddleware, guildLogs);
router.put('/guilds/:guildId/config', authMiddleware, updateGuildConfig);
router.put('/guilds/:guildId/logs', authMiddleware, updateGuildLogs);

export default router;