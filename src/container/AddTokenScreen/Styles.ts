import { StyleSheet, Dimensions } from "react-native";
import { BG_COLOR } from '../../constants/colors';
import { DIMENSIONS_WIDTH } from '../../constants/dementions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  Button: {
    width:250,
    height:40,
    backgroundColor:"#030066",
    margin:15
  },
  searchBarContainer: {
    flex: 1,
    backgroundColor: BG_COLOR,
    width: DIMENSIONS_WIDTH,
    alignItems: "center",
    justifyContent: "center",
  },
  searchBar: {
    backgroundColor: "#fff",
    width: DIMENSIONS_WIDTH - 20,
    height: 50,
    elevation: 0,
    borderRadius: 30,
    padding: 10
  },
  list: {
    flex:10,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: BG_COLOR,
    width: DIMENSIONS_WIDTH - 5,
    alignItems: "center",
  },
  listItem: {
    width: DIMENSIONS_WIDTH - 38,
    elevation: 1,
    backgroundColor: "#fff",
    padding: 3,
    margin: 5,
    borderRadius: 2
  }
});