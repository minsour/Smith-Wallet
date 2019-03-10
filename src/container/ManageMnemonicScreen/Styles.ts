import { StyleSheet } from "react-native";
import { BG_COLOR } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  createButton: {
    width: 250,
    height: 40,
    backgroundColor: "#030066",
    margin: 15
  },
  mnemonicContainer: {
    flex: 0.3,
    flexDirection: "column",
    width: "90%",
    height: "30%",
    margin: 10,
    backgroundColor: BG_COLOR
  }
});
