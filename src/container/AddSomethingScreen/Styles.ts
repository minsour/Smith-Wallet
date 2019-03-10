import { StyleSheet } from "react-native";
import { BG_COLOR } from '../../constants/colors';
import { DIMENSIONS_WIDTH, DIMENSIONS_HEIGHT } from '../../constants/dementions';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: BG_COLOR,
    borderRadius: 18,
    width: DIMENSIONS_WIDTH,
    height: 150,
    marginTop: DIMENSIONS_HEIGHT - 150,
    paddingTop: 0,
    flexDirection: 'row'
  },
  content: {
    flex: 1,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  upbit: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b1b1b1',
  },
  viewContent: {
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    marginTop: -10
  },
  contentFont: {
    fontSize: 15
  },
  font: {
    fontSize: 14,
    marginTop: 3
  },
  upbitFont: {
    fontSize: 14,
    marginTop: 3,
    color: '#dcdcdc'
  }
});