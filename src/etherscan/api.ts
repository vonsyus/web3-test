import dotenv from 'dotenv';
import axios from './axios'

dotenv.config();

export const getContractABI = async (address: string) => {
	const abiData = await axios.get(`?module=contract&action=getabi&address=${address}&apikey=${process.env.ETHERSCAN_API_TOKEN}`);

	return abiData
}