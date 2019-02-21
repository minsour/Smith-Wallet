import { AsyncStorage } from 'react-native';
import { erc20Abi } from './erc20Abi';
import { parse } from 'js-html-parser';

const ethers = require('ethers');

interface Token {
  name: string;
  symbol: string;
  address: string;
  totalBalance: number;
}

interface TokenHistory {
  hash: string; //transaction hash
  from: string;
  to: string;
  timeStamp: string;
  contractAddress: string;
  value: string;
}

// var tokenHistoryList: TokenHistory[] = [];
// const parseErc20TokenHistory = (response: any) => {
//   tokenHistoryList = JSON.parse(response);
//   // tokenHistoryList.push({
//   //   hash: response.hash, //transaction hash
//   //   from: response.from,
//   //   to: response.to,
//   //   timeStamp: response.timeStamp,
//   //   contractAddress: response.contractAddress,
//   //   value: response.value,
//   // });
//   console.log('tokenHistoryList:::' + tokenHistoryList[0].timeStamp);
//   // TopTokenList.push({
//   //   address: getAddress(token),
//   //   symbol: getSymbol(token),
//   //   englishName: getEnglishName(token)
//   // });
// };

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

  static getERC20Infos = async (userAddress: string) => {
    try {
      const { Contract } = require('ethers');
      const defaultProvider = new ethers.getDefaultProvider('mainnet');
      //원래는 AsyncStorage에서 불러와야함.
      //Contract Address
      const tokenAddress = '0xCe5559F046d8C01192E15f55063906F8d1c14790';
      const contract = new Contract(tokenAddress, erc20Abi, defaultProvider);

      const erc20Name = await contract.name();
      const erc20Symbol = await contract.symbol();
      const balance = await contract.balanceOf(userAddress);

      var token: Token = {
        name: erc20Name,
        symbol: erc20Symbol,
        address: tokenAddress,
        totalBalance: ethers.utils.formatEther(balance),
      };

      return JSON.stringify(token);
    } catch (error) {
      console.error(
        'Error occurs during getting ERC20 token information :::' + error,
      );
    }
  };

  /** 특정 EOA의 모든 거래 내역을 가지고 옴 **/
  // static getTxHistoryByAddress = async (address: string) => {
  //   try {
  //     const etherscanProvider = new ethers.providers.EtherscanProvider();
  //     etherscanProvider.getHistory(address).then(function(history: string) {
  //       console.log('FROM getTxHistoryByAddress' + history);
  //       //parsing 작업 추가 필요
  //       // 어케나누냐고요
  //     });
  //   } catch (error) {
  //     console.error(
  //       'Error occurs during loading transaction history from etherscanProvider:::' +
  //         error,
  //     );
  //   }
  // };
  static getErc20TokenHistory = async (
    contractAddress: string,
    userAddress: string,
  ) => {
    try {
      const ERC_TX_HISTORY =
        'https://api.etherscan.io/api?module=account&action=tokentx&page=1&offset=100&sort=desc&';
      const API_KEY = 'QYZRBUMFTPA75YXE3P8IWUQS8Q23R6875Y';
      const finalApiUrl =
        ERC_TX_HISTORY +
        'contractaddress=' +
        contractAddress +
        '&address=' +
        userAddress +
        '&apiKey=' +
        API_KEY;
      // await fetch(finalApiUrl, { method: 'GET' }).then((response: any) => {});
      let response = await fetch(finalApiUrl);
      let responseJson = await response.json();
      return JSON.stringify(responseJson.result); //responseJson.result; // object
    } catch (error) {
      console.error('Error during loading ERC20 TX history:::' + error);
    }
  };

  // static getEthereumBalance = async (address: string) => {  //Detail 페이지에는 필요 없음
  //   try {
  //     const etherscanProvider = new ethers.providers.EtherscanProvider();
  //     await etherscanProvider.getBalance(address).then((balance: string) => {
  //       let etherString = ethers.utils.formatEther(balance);
  //       console.log('Ether Balance: ' + etherString);
  //     });
  //   } catch (error) {
  //     console.error(
  //       'Error occurs during getting ethereum balance :::' + error,
  //     );
  //   }
  // };
}
