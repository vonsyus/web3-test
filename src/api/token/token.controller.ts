import { Request, Response } from 'express';
import * as tokenService from './token.service';
import { create } from './token.service';

export const getAllTokens = async (req: Request, res: Response) => {
	const tokens = await tokenService.getAll();

	res.status(200).send(tokens);
};

export const getTokenById = async (req: Request, res: Response) => {
	const { tokenId } = req.params;

	const token = await tokenService.getById(Number(tokenId));

	res.status(200).send(token);
};

export const createToken = async (req: Request, res: Response) => {
	const { tokenType, name, description, contractId, ownerId } = req.body;

	const token = await create({ tokenType, name, description, contractId, ownerId });

	res.status(200).send(token)
};
