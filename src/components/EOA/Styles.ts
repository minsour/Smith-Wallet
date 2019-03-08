import { StyleSheet } from "react-native";
import { BG_COLOR } from '../../constants/colors';
import { DIMENSIONS_WIDTH } from '../../constants/dementions';

export const styles = StyleSheet.create({
  pickedItem: {
    width: DIMENSIONS_WIDTH - 38,
    justifyContent: 'center',
    backgroundColor: "#dadada",
    padding: 20,
    height: 45,
    margin: 4,
    borderColor: "#eaeaea",
    borderWidth: 1,
    borderRadius: 2
  },
  dropedItem: {
    width: DIMENSIONS_WIDTH - 38,
    justifyContent: 'center',
    backgroundColor: "#fff",
    padding: 20,
    height: 45,
    margin: 4,
    borderColor: "#eaeaea",
    borderWidth: 1,
    borderRadius: 2
  },
  selectedItem: {
    width: DIMENSIONS_WIDTH - 20,
    justifyContent: 'center',
    backgroundColor: "#fff",
    paddingLeft: 24,
    paddingRight: 24,
    height: 88,
    marginTop: 3,
    marginBottom: 3,
    borderColor: "#eaeaea",
    borderWidth: 1
  },
  EOA: {
    justifyContent: 'center',
  },
  name: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 34,
    marginTop: -7
  },
  nameFont: {
    fontSize: 18,
    marginTop: 1
  },
  addressFont: {
    color: "#4c4c4c",
    fontSize: 14,
  },
  button: {
    width:70,
    height:62,
    backgroundColor:"#002187",
    justifyContent: 'center'
  },
});