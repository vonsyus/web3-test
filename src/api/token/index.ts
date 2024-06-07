import express, { Router } from 'express';
import { createToken, getAllTokens, getTokenById } from './token.controller';

const router: Router = express.Router();

router.get('/', getAllTokens);
router.get('/:tokenId', getTokenById);
router.post('/create', createToken);

export default router;
