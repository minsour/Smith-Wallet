import { AsyncStorage } from 'react-native';
import AES from 'crypto-js/aes';
import CryptoJS from 'crypto-js';

export class AsyncStorageUtils {
  static encrypt = (message:string):string => {
    return AES.encrypt(message, "qlalfqjsgh is anjsemf").toString()
  }

  static decrypt = (encryptedMessage:string):string => {
    return AES.decrypt(encryptedMessage, "qlalfqjsgh is anjsemf").toString(CryptoJS.enc.Utf8)
  }
  // static storeMnemonic = async (newMnemonic: string) => {
  //   let encryptedMnemonic:string = AsyncStorageUtils.encrypt(newMnemonic)
  //   console.log(`encryptedMnemonic = ${encryptedMnemonic}`)
  //   try {
  //     await AsyncStorage.setItem('@MyStore:key', encryptedMnemonic);
  //   } catch (error) {
  //     console.error(
  //       'Error occurs during saving data in @MyStore:key :::' + error,
  //     );
  //   }
  // };
  static storeTokenStorage = async (tokenStorage: any) => {
    try {
      await AsyncStorage.setItem('@MyStore:token', JSON.stringify(tokenStorage));
    } catch (error) {
      console.error(
        'Error occurs during saving data in @MyStore:token :::' + error,
      );
    }
  };

  static storeWalletStorage = async (walletStorage: any) => {
    try {
      console.log('storeWalletStorage')
      await AsyncStorage.setItem('@MyStore:wallet', JSON.stringify(walletStorage));
    } catch (error) {
      console.error(
        'Error occurs during saving data in @MyStore:wallet :::' + error,
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

  static loadTokenStorage = async () => {
    let tokenStorage
    try {
      await AsyncStorage.getItem('@MyStore:token').then(stringTokenStorage => {
        tokenStorage = JSON.parse(stringTokenStorage)
      });
    } catch (error) {
      console.error(
        'Error occurs during loading data in @MyStore:token :::' + error,
      );
    }
    return tokenStorage
  };
  
  static loadWalletStorage = async () => {
    let walletStorage
    try {
      await AsyncStorage.getItem('@MyStore:wallet').then(stringWalletStorage => {
        walletStorage = JSON.parse(stringWalletStorage)
        console.log(stringWalletStorage)
        console.log(walletStorage)
      });
    } catch (error) {
      console.error(
        'Error occurs during loading data in @MyStore:wallet :::' + error,
      );
    }
    return walletStorage
  };

  static removePin = async () => {
    try {
      await AsyncStorage.removeItem('@MyStore:pin')
    } catch (error) {
      console.error(
        'Error occurs during removing data in @MyStore:pin :::' + error,
      );
    }
  }

  static removeTokenStorage = async () => {
    try {
      await AsyncStorage.removeItem('@MyStore:token')
    } catch (error) {
      console.error(
        'Error occurs during removing data in @MyStore:token :::' + error,
      );
    }
  }

  static removeWalletStorage = async () => {
    try {
      await AsyncStorage.removeItem('@MyStore:wallet')
    } catch (error) {
      console.error(
        'Error occurs during removing data in @MyStore:wallet :::' + error,
      );
    }
  }
}
