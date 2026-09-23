import { Router } from 'express';
import { Team } from '../models/team.js';

const router = Router();

router.get('/', async (_request, response) => {
  const teams = await Team.find().populate('captain', 'username displayName').populate('members', 'username displayName').sort({ totalPoints: -1 }).lean();
  response.json(teams);
});

export default router;