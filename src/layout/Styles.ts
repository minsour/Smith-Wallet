import { StyleSheet, Dimensions } from "react-native";
import { BG_COLOR } from "../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_COLOR,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  userBody: {
    flex: 20,
    backgroundColor: BG_COLOR,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  description: {
    marginTop: 16,
    color: "#fff",
    fontSize: 16
  }
});