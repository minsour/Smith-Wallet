import { AsyncStorage } from "react-native";

export class AsyncStorageUtils {
  static storeMnemonic = async (newMnemonic: string) => {
    try {
      await AsyncStorage.setItem("@MyStore:key", newMnemonic);
    } catch (error) {
      console.log("Error occurs during saving data:::" + error);
    }
  };
}
