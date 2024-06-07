import { Request, Response } from 'express';
import * as userService from './user.service';

export const getUser = async (req: Request, res: Response) => {
	const { userId } = req.params;

	const user = await userService.getById(Number(userId));

	res.status(200).send(user);
};

export const createUser = async (req: Request, res: Response) => {
	const { username, address } = req.body;

	const user = await userService.create({ username, address });

	res.status(200).send(user);
};
