import { Router, Request, Response } from 'express';

const router = Router();


let healthStatus = 'ok';

router.get('/health', (req: Request, res: Response) => {
  res.json({ status: healthStatus, uptime: process.uptime(), version: 'v1.0.0' });
});

router.put('/health', (req: Request, res: Response) => {
  const { status } = req.body;
  if (typeof status === 'string') {
    healthStatus = status;
    res.json({ success: true, status });
  } else {
    res.status(400).json({ error: 'Invalid status', code: 400 });
  }
});

export default router;
