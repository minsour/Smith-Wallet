import { StyleSheet } from "react-native";
import { BG_COLOR } from '../../constants/colors';
import { DIMENSIONS_WIDTH } from '../../constants/dementions';

export const styles = StyleSheet.create({
  pickedItem: {
    width: DIMENSIONS_WIDTH - 38,
    backgroundColor: "#dadada",
    elevation: 1,
    padding: 3,
    margin: 5,
    borderRadius: 2,
    height: 60
  },
  dropedItem: {
    width: DIMENSIONS_WIDTH - 38,
    elevation: 1,
    backgroundColor: "#fff",
    padding: 3,
    margin: 5,
    borderRadius: 2,
    height: 60
  },
  balanceToken: {
    backgroundColor: "#fff",
    padding: 3,
    margin: 5,
    borderRadius: 2,
    height: 70
  },
  title: {
    flexDirection: 'row'
  },
  nameFont: {
    fontSize: 17,
    margin:3
  },
  symbolFont: {
    fontSize: 16,
    alignSelf: "flex-end",
    color: "#4c4c4c",
    marginLeft: 5
  },
  addressFont: {
    color: "#4c4c4c",
    margin: 3
  },
  balance: {
    fontSize: 16
  }
});