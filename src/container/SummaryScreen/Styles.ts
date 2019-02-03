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
    width: Dimensions.get("window").width,
    borderBottomWidth: 1,
    paddingLeft:15
  },
  listBody: {
    flex: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width
  },
  tabButton: {
    marginLeft:10,
    paddingRight:14,
    paddingLeft:14,
    paddingTop:8,
    paddingBottom:8,
    marginBottom:-23
  },
  selectedFont: {
    fontSize: 14,
    fontWeight: "900"
  },
  unselectedFont: {
    fontSize: 13.5,
    fontWeight: "100",
    color: "#4c4c4c"
  }
});
