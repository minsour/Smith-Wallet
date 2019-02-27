import { StyleSheet } from "react-native";
import { BG_COLOR } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_COLOR,
    paddingTop: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  Button: {
    width: 250,
    height: 40,
    backgroundColor: '#030066',
    margin: 15,
  },
});
