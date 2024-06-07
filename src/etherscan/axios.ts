import axios from 'axios';

const etherscanBaseUrl = 'https://api.etherscan.io/api'

const instance = axios.create({
	baseURL: etherscanBaseUrl,
})

export default instance