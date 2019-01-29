import { AsyncStorage } from "react-native";
import { BackUpMnemonicScreen } from "./index";
const ethers = require("ethers");

export class AsyncStorageUtils {
  static storeMnemonic = async () => {
    try {
      const newMnemonic = ethers.Wallet.createRandom().mnemonic;
      await AsyncStorage.setItem("@MyStore:key", newMnemonic);
      AsyncStorageUtils.getMnemonic();
    } catch (error) {
      console.log("Error occurs during saving data:::" + error);
    }
  };

  static getMnemonic = async () => {
    try {
      const value = await AsyncStorage.getItem("@MyStore:key");
      if (value !== null) {
        BackUpMnemonicScreen.myMnemonic = value;
      }
    } catch (error) {
      console.log("Error occurs during retriving data:::" + error);
    }
  };
}
