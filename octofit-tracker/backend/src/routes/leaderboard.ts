import { Router } from 'express';
import { LeaderboardEntry } from '../models/leaderboard.js';

const router = Router();

router.get('/', async (_request, response) => {
  const leaderboard = await LeaderboardEntry.find().populate('user', 'username displayName').populate('team', 'name color').sort({ rank: 1 }).lean();
  response.json(leaderboard);
});

export default router;