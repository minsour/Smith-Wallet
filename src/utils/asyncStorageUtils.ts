import { AsyncStorage } from 'react-native';
import { etherscanProvider } from '../api/ethers';
// const ethers = require('ethers');

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
}
