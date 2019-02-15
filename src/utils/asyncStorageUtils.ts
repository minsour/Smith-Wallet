import { AsyncStorage } from 'react-native';
import { erc20Abi } from './erc20Abi';
const ethers = require('ethers');

interface Token {
  //Token
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

  static getTxHistoryByAddress = async (address: string) => {
    try {
      const etherscanProvider = new ethers.providers.EtherscanProvider();
      await etherscanProvider
        .getHistory(address)
        .then(function(history: string) {
          console.log(history);
          //parsing 작업 추가 필요
        });
    } catch (error) {
      console.error(
        'Error occurs during loading transaction history :::' + error,
      );
    }
  };

  static storeErc20Token = async () => {
    //토큰 정보 가져와지는지 보려고 일단 만들어봄
    const newTokens: Array<Token> = [
      {
        name: 'FunkeyCoin',
        symbol: 'FNK',
        address: '0x06404399e748CD83F25AB163711F9F4D61cfd0e6',
        totalBalance: 0,
      },
      {
        name: 'Aha Knowledge Token',
        symbol: 'AHT',
        address: '0xCe5559F046d8C01192E15f55063906F8d1c14790',
        totalBalance: 0,
      },
    ];
    try {
      //Store Item
      await AsyncStorage.setItem('@tokens', JSON.stringify(newTokens));
    } catch (error) {
      console.error('Error occurs during saving token in @tokens :::' + error);
    }
  };

  static getErc20Token = async () => {
    try {
      const tokens = await AsyncStorage.getItem('@tokens');
      console.log(JSON.stringify(tokens));
    } catch (error) {
      console.error('Error occurs during loading token @tokens');
    }
  };

  static getERC20Infos = async (address: string) => {
    try {
      // const { Contract } = require('ethers');
      // //AHA 토큰 address - 테스트 용. 원래는 AsyncStorage를 불러와야함
      // const defaultProvider = new ethers.getDefaultProvider('mainnet');
      // const tokenAddress = '0xCe5559F046d8C01192E15f55063906F8d1c14790';
      // const contract = new Contract(tokenAddress, erc20Abi, defaultProvider);
      // const erc20Name = await contract.name();
      // const erc20Symbol = await contract.symbol();
      // const balance = await contract.balanceOf(address);
      // console.log(
      //   erc20Symbol +
      //     ':::' +
      //     erc20Name +
      //     ':::' +
      //     ethers.utils.formatEther(balance),
      // );
    } catch (error) {
      console.error(
        'Error occurs during loading balance of erc20 tokens :::' + error,
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
