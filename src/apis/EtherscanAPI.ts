import { ethers, utils } from 'ethers';
import { erc20Abi } from '../utils/erc20Abi';

const TX_HISTORY_API_URL =
  'https://api.etherscan.io/api?module=account&action=tokentx&page=1&offset=100&sort=desc&';
const API_KEY = 'QYZRBUMFTPA75YXE3P8IWUQS8Q23R6875Y';
const provider = ethers.getDefaultProvider(); //메인넷

const getERC20Info = async (tokenAddress: string, userAddress: string) => {
  try {
    const { Contract } = require('ethers');
    const contract = new Contract(tokenAddress, erc20Abi, provider);

    const erc20Name = await contract.name();
    const erc20Symbol = await contract.symbol();
    const balance = await contract.balanceOf(userAddress);

    console.log('erc20Name:::' + erc20Name);
    console.log('erc20Symbol:::' + erc20Symbol);
    console.log('erc20Balance:::' + balance);

    var tmpToken = {
      balance: ethers.utils.formatEther(balance),
    };

    return JSON.stringify(tmpToken);
  } catch (error) {
    console.error(
      'Error occurs during getting ERC20 token information :::' + error,
    );
  }
};

const getEtherInfo = async (userAddress: string) => {
  const ethBalance = await provider.getBalance(userAddress);
  var tmpEther = {
    balance: ethers.utils.formatEther(ethBalance),
  };
  return JSON.stringify(tmpEther);
};

const getERC20TokenHistory = async (
  contractAddress: string,
  userAddress?: string,
) => {
  try {
    console.log('userADdress@etherscanAPI: ' + userAddress);
    const finalApiUrl =
      TX_HISTORY_API_URL + //메인넷
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

const getEtherHistory = async (userAddress?: string) => {
  try {
    const finalApiUrl =
      'http://api-ropsten.etherscan.io/api?module=account&action=txlist' + //테스트넷
      '&address=' +
      userAddress +
      '&startblock=0&endblock=99999999&sort=asc&apikey=' +
      API_KEY;
    console.log(finalApiUrl);
    const response = await fetch(finalApiUrl);
    const responseJson = await response.json();
    return JSON.stringify(responseJson.result);
  } catch (error) {
    console.error('Error during loading Ethereum history:::' + error);
  }
};

const getTxReceipt = async (txHash: string) => {
  // try {
  //   const defaultProvider = new ethers.getDefaultProvider('mainnet');
  //   defaultProvider.getTransactionReceipt(txHash).then((txReceipt: any) => {
  //     console.log('TXRECEIPT' + JSON.stringify(txReceipt));
  //   });
  // } catch (error) {
  //   console.error('Error during loading TX receipt:::' + error);
  // }
};

export {
  getERC20Info,
  getERC20TokenHistory,
  getTxReceipt,
  getEtherInfo,
  getEtherHistory,
};
