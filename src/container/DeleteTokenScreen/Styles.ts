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
  },
  symbolContainer: {
    width: DIMENSIONS_WIDTH - 40,
    height: 54,
    paddingTop: 7,
    backgroundColor: BG_COLOR
  },
  symbolScrollContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  temp: {
    height: 0
  },
  addButton: {
    backgroundColor: "#030066",
    borderRadius: 0,
    width: DIMENSIONS_WIDTH,
    height: 55,
    marginTop: -20,
    marginBottom:-3,
    justifyContent: 'center'
  },
  buttonFont: {
    color: "#fff",
    fontSize: 17,
  }
});