import express, { Router } from 'express';
import { createUser, getUser } from './user.controller';

const router: Router = express.Router();

router.get('/:userId', getUser);
router.post('/create', createUser);

export default router;
