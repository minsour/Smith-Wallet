import { StyleSheet } from "react-native";
import { BG_COLOR } from '../../constants/colors';
import { DIMENSIONS_WIDTH, DIMENSIONS_HEIGHT } from '../../constants/dementions';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: BG_COLOR,
    borderRadius: 7,
    width: DIMENSIONS_WIDTH,
    height: 180,
    marginTop: DIMENSIONS_HEIGHT - 180,
    padding: 5,
    flexDirection: 'row'
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  contentFont: {
    fontSize: 15
  }
});