import { AsyncStorage } from 'react-native';
import { erc20Abi } from './erc20Abi';

const ethers = require('ethers');

export class AsyncStorageUtils {
  static storeMnemonic = async (newMnemonic: string) => {
    try {
      await AsyncStorage.setItem('@MyStore:key', newMnemonic);
    } catch (error) {
      console.error(
        'Error occurs during saving data in @MyStore:key :::' + error,
      );
    }
  };

  static storePin = async (pin: string) => {
    try {
      await AsyncStorage.setItem('@MyStore:pin', pin);
    } catch (error) {
      console.error(
        'Error occurs during saving pincode in @MyStore:pin :::' + error,
      );
    }
  };

  static loadMnemonic = async () => {
    try {
      const Mnemonic = await AsyncStorage.getItem('@MyStore:key');
      return Mnemonic;
    } catch (error) {
      console.error(
        'Error occurs during loading data in @MyStore:key :::' + error,
      );
    }
    return '';
  };

  // static getERC20Infos = async (userAddress: string) => {
  //   try {
  //     const { Contract } = require('ethers');
  //     const defaultProvider = new ethers.getDefaultProvider('mainnet');

  //     const tokenAddress = '0xCe5559F046d8C01192E15f55063906F8d1c14790'; //contract address
  //     const contract = new Contract(tokenAddress, erc20Abi, defaultProvider);

  //     const erc20Name = await contract.name();
  //     const erc20Symbol = await contract.symbol();
  //     const balance = await contract.balanceOf(userAddress);

  //     var tmpToken = {
  //       name: erc20Name,
  //       symbol: erc20Symbol,
  //       address: tokenAddress,
  //       totalBalance: ethers.utils.formatEther(balance),
  //     };

  //     return JSON.stringify(tmpToken);
  //   } catch (error) {
  //     console.error(
  //       'Error occurs during getting ERC20 token information :::' + error,
  //     );
  //   }
  // };

  // static getErc20TokenHistory = async (
  //   contractAddress: string,
  //   userAddress: string,
  // ) => {
  //   try {
  //     const ERC_TX_HISTORY =
  //       'https://api.etherscan.io/api?module=account&action=tokentx&page=1&offset=100&sort=desc&';
  //     const API_KEY = 'QYZRBUMFTPA75YXE3P8IWUQS8Q23R6875Y';
  //     const finalApiUrl =
  //       ERC_TX_HISTORY +
  //       'contractaddress=' +
  //       contractAddress +
  //       '&address=' +
  //       userAddress +
  //       '&apiKey=' +
  //       API_KEY;
  //     let response = await fetch(finalApiUrl);
  //     let responseJson = await response.json();
  //     return JSON.stringify(responseJson.result);
  //   } catch (error) {
  //     console.error('Error during loading ERC20 TX history:::' + error);
  //   }
  // };
}
