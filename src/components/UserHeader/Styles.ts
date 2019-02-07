import { StyleSheet } from "react-native";
import { BG_COLOR } from "../../constants/colors";
import { DIMENSIONS_WIDTH } from '../../constants/dementions';

export const styles = StyleSheet.create({
  userHeader: {
    flex: 3,
    flexDirection: "row",
    backgroundColor: BG_COLOR,
    alignItems: "center",
    justifyContent: "center",
    width: DIMENSIONS_WIDTH
  },
  userHeaderLeft: {
    flex: 1
  },
  userHeaderTitle: {
    flex: 5,
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 50
  },
  userHeaderRight: {
    flex: 1
  },
  userBody: {
    flex: 20,
    backgroundColor: BG_COLOR,
    alignItems: "center",
    justifyContent: "center",
    width: DIMENSIONS_WIDTH
  },
  titleFont: {
    fontSize:18, 
    fontWeight:"bold"
  }
});