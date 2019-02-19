import { AsyncStorage } from 'react-native';
import { erc20Abi } from './erc20Abi';

const ethers = require('ethers');

interface Token {
  name: string;
  symbol: string;
  address: string;
  totalBalance: number;
}

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

  // static storeErc20TokenForTest = async () => {
  //   //토큰 정보 가져와지는지 보려고 일단 만들어봄
  //   let newToken: Token = {
  //     name: 'Aha Knowledge Token',
  //     symbol: 'AHT',
  //     address: '0xCe5559F046d8C01192E15f55063906F8d1c14790',
  //     totalBalance: 0,
  //   };
  //   try {
  //     await AsyncStorage.setItem('@erc20Tokens', JSON.stringify(newToken));
  //   } catch (error) {
  //     console.error('Error occurs during saving token @erc20Tokens');
  //   }
  // };

  // static getErc20Token = async () => {
  //   try {
  //     const tokens = await AsyncStorage.getItem('@erc20Tokens');
  //     console.log('GET ERC20 TOKEN:::' + JSON.stringify(tokens));
  //   } catch (error) {
  //     console.error('Error occurs during loading token @erc20Tokens');
  //   }
  // };

  static getERC20Infos = async (userAddress: string) => {
    try {
      const { Contract } = require('ethers');
      const defaultProvider = new ethers.getDefaultProvider('mainnet');
      const tokenAddress = '0xCe5559F046d8C01192E15f55063906F8d1c14790'; //AsyncStorage에서 불러와야함
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
      // tokenStore.setAddress(tokenAddress);
      // tokenStore.setName(erc20Name);
      // tokenStore.setSymbol(erc20Symbol);
      // tokenStore.setTotalBalance(balance);

      // console.log('TokenStore: ' + tokenStore.getToken.name);
      return JSON.stringify(token);
    } catch (error) {
      console.error(
        'Error occurs during loading balance of erc20 tokens :::' + error,
      );
    }
  };
  /** 특정 EOA의 모든 거래 내역을 가지고 옴 **/
  static getTxHistoryByAddress = async (address: string) => {
    try {
      const etherscanProvider = new ethers.providers.EtherscanProvider();
      // etherscanProvider.getHistory(address).then((history: any) => {
      //   history.forEach((tx: any) => {
      //     console.log(tx);
      //   });
      // });

      etherscanProvider.getHistory(address).then(function(history: string) {
        console.log(history);
        //parsing 작업 추가 필요
      });
    } catch (error) {
      console.error(
        'Error occurs during loading transaction history :::' + error,
      );
    }
  };

  static getEthereumBalance = async (address: string) => {
    try {
      const etherscanProvider = new ethers.providers.EtherscanProvider();
      await etherscanProvider.getBalance(address).then((balance: string) => {
        let etherString = ethers.utils.formatEther(balance);
        console.log('Ether Balance: ' + etherString);
      });
    } catch (error) {
      console.error(
        'Error occurs during loading transaction history :::' + error,
      );
    }
  };
}
