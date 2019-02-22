const ethers = require('ethers');
import { erc20Abi } from '../utils/erc20Abi';

const TOKEN_ADDRESS = '0xCe5559F046d8C01192E15f55063906F8d1c14790'; //테스트용

const TX_HISTORY_API_URL =
  'https://api.etherscan.io/api?module=account&action=tokentx&page=1&offset=100&sort=desc&';
const API_KEY = 'QYZRBUMFTPA75YXE3P8IWUQS8Q23R6875Y';

const getERC20Info = async (tokenAddress: string, userAddress: string) => {
  try {
    const { Contract } = require('ethers');
    const defaultProvider = new ethers.getDefaultProvider('mainnet');
    const contract = new Contract(TOKEN_ADDRESS, erc20Abi, defaultProvider);

    const erc20Name = await contract.name();
    const erc20Symbol = await contract.symbol();
    const balance = await contract.balanceOf(userAddress);

    var tmpToken = {
      name: erc20Name,
      symbol: erc20Symbol,
      address: tokenAddress,
      totalBalance: ethers.utils.formatEther(balance),
    };

    return JSON.stringify(tmpToken);
  } catch (error) {
    console.error(
      'Error occurs during getting ERC20 token information :::' + error,
    );
  }
};

const getERC20TokenHistory = async (
  contractAddress: string,
  userAddress: string,
) => {
  try {
    const finalApiUrl =
      TX_HISTORY_API_URL +
      'contractaddress=' +
      contractAddress +
      '&address=' +
      userAddress +
      '&apiKey=' +
      API_KEY;
    const response = await fetch(finalApiUrl);
    const responseJson = await response.json();
    return JSON.stringify(responseJson.result);
  } catch (error) {
    console.error('Error during loading ERC20 TX history:::' + error);
  }
};

export { getERC20Info, getERC20TokenHistory };
