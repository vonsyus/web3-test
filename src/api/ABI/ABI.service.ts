import { getContractABI } from '../../etherscan/api';

export const getABI = async (address: string) => {
	const ABI = await getContractABI(address);

	return ABI;
};