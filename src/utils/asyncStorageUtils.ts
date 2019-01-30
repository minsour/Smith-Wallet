import { AsyncStorage } from "react-native";

export class AsyncStorageUtils {
  static storeMnemonic = async (newMnemonic: string) => {
    try {
      await AsyncStorage.setItem("@MyStore:key", newMnemonic);
    } catch (error) {
      console.error(
        "Error occurs during saving data in @MyStore:key:::" + error
      );
    }
  };
}
