import prisma from '../../db';

export const getById = async (id: number) => {
	const user = await prisma.user.findUnique({ where: { id } });

	return user;
};

export const create = async ({ username, address }: { username: string; address: string }) => {
	const user = await prisma.user.create({
		data: {
			username,
			address
		},
	});

	return user
};
