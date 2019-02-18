import { StyleSheet } from "react-native";
import { BG_COLOR } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: BG_COLOR,
    borderRadius: 5,
    width: 270,
    height: 120, 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
  content: {
    flex: 1,
    width: 270,
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentFont: {
    fontSize: 15
  }
});