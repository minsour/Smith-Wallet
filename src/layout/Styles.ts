import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  userBody: {
    flex: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width
  }
});