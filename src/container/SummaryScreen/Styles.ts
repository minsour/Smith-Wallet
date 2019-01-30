import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  leftbutton: {
    width:25,
    height:27,
    backgroundColor:"#030066",
    justifyContent: "center",
    margin: 15
  },
  rightbutton: {
    width:25,
    height:27,
    backgroundColor:"#030066",
    justifyContent: "center",
    margin: 0
  },
  summaryHeader: {
    flex: 3,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    //justifyContent: "center",
    width: Dimensions.get("window").width
  },
  summaryBody: {
    flex: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width
  }
});
