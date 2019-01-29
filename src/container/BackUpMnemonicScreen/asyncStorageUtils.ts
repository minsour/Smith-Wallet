import { AsyncStorage } from "react-native";
import BackUpMnemonicScreen from "./index";
const ethers = require("ethers");

export default class AsyncStorageUtils {
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
      const savedMnemonic = await AsyncStorage.getItem("@MyStore:key");
      if (savedMnemonic !== null) {
        BackUpMnemonicScreen.myMnemonic = savedMnemonic;
      }
    } catch (error) {
      console.log("Error occurs during retriving data:::" + error);
    }
  };
}
