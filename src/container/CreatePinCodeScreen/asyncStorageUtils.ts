import { AsyncStorage } from "react-native";
export default class AsyncStorageUtils {
  static storePin = async (pin: string) => {
    try {
      await AsyncStorage.setItem("@MyStore:pin", pin);
    } catch (error) {
      console.log("Error occurs during saving pincode:::" + error);
    }
  };
}
