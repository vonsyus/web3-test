import prisma from '../../db';

export const getAll = async () => {
	const listTokens = await prisma.token.findMany();

	return listTokens;
};

export const getById = async (id: number) => {
	const token = await prisma.token.findUnique({ where: { id } });

	return token;
};

export const create = async ({
	tokenType,
	name,
	description,
	contractId,
	ownerId,
}: {
	tokenType: string;
	name: string;
	description: string;
	contractId: number;
	ownerId: number;
}) => {
	const token = await prisma.token.create({
		data: {
			name,
			description,
			tokenType,
			contract: {
				connect: {
					id: contractId,
				},
			},
			owner: {
				connect: {
					id: ownerId,
				},
			},
		},
	});

	return token;
};
