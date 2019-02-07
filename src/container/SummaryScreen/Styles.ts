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
    backgroundColor: "#f8f9ff",
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    paddingTop: 10
  },
  list: {
    flex: 7,
    width: Dimensions.get("window").width
  },
  listTab: {
    flex: 3,
    flexDirection: "row",
    backgroundColor: "#f8f9ff",
    alignItems: "center",
    width: Dimensions.get("window").width,
    borderBottomWidth: 1,
    borderColor: "#858585"
  },
  listBody: {
    flex: 20,
    backgroundColor: "#f8f9ff",
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
  },
  summaryFont: {
    fontSize: 22,
    marginBottom: 14
  },
  balance: {
    flexDirection: "row",
    marginBottom: 12
  },
  balanceFont: {
    fontSize: 28,
    marginRight: 2
  },
  krwFont: {
    fontSize: 14,
    alignSelf: "flex-end",
    marginLeft: 3,
    marginBottom: 3
  },
  addressFont: {
    fontSize: 13
  }
});
