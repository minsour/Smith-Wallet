import { StyleSheet } from "react-native";
import { BG_COLOR } from '../../constants/colors';
import { DIMENSIONS_WIDTH } from '../../constants/dementions';

export const styles = StyleSheet.create({
  chipContainer: {
    backgroundColor: '#fff',
    width: 80,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
    borderRadius: 14,
    margin: 3
  },
  chipItem: {
    flexDirection: 'row'
  }
});