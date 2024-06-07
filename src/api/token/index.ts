import express, { Router } from 'express';
import { getTokenById } from './token.controller';

const router: Router = express.Router();

router.get('/:tokenId', getTokenById);

export default router;
