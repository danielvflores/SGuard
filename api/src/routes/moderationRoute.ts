
import { Router } from 'express';
import { getModerationLevel, updateModerationLevel } from '../controllers/moderationController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.get('/:guildId/moderation', authMiddleware, getModerationLevel);
router.put('/:guildId/moderation', authMiddleware, updateModerationLevel);

export default router;