import { StyleSheet } from 'react-native';
import { BG_COLOR } from '../../constants/colors';
import { DIMENSIONS_WIDTH } from '../../constants/dementions';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  summaryContainer: {
    flex: 1,
    backgroundColor: BG_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    width: DIMENSIONS_WIDTH,
    paddingTop: 10,
  },
  summaryFont: {
    fontSize: 20,
    marginBottom: 14,
  },
  addressFont: {
    fontSize: 13,
  },
  bottomButton: {
    backgroundColor: '#030066',
    margin: 15,
    display: 'flex',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
