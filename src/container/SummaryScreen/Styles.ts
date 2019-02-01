import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  summary: {
    flex: 2,
    width: Dimensions.get("window").width
  },
  list: {
    flex: 7,
    width: Dimensions.get("window").width
  },
  listTab: {
    flex: 3,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    width: Dimensions.get("window").width
  },
  listBody: {
    flex: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width
  },
  tabButton: {
    backgroundColor: "#fff",
    elevation:0
  },
  buttonFont: {
    color: "#000000"
  }
});
