import { StyleSheet } from "react-native";
import { BG_COLOR } from "../constants/colors";
import { DIMENSIONS_HEIGHT, DIMENSIONS_WIDTH } from "../constants/dementions";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_COLOR,
    alignItems: "center",
    justifyContent: "center",
    width: DIMENSIONS_WIDTH,
    height: DIMENSIONS_HEIGHT
  },
  userBody: {
    flex: 20,
    backgroundColor: BG_COLOR,
    alignItems: "center",
    justifyContent: "center",
    width: DIMENSIONS_WIDTH
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
    width: DIMENSIONS_WIDTH,
    height: DIMENSIONS_HEIGHT
  },
  description: {
    marginTop: 16,
    color: "#fff",
    fontSize: 16
  }
});