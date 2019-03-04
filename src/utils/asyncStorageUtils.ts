import { AsyncStorage } from 'react-native';
import { etherscanProvider } from '../apis/ethers';

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

  static loadPin = async () => {
    try {
      const pin = await AsyncStorage.getItem('@MyStore:pin');
      console.log('loadPIN:::' + pin);
      return pin;
    } catch (error) {
      console.error(
        'Error occurs during loading pincode in @MyStore:pin :::' + error,
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
}
