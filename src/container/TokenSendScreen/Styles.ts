import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  listSectionContainer: {
    width: '100%',
    margin: 10,
    marginLeft: -10,
  },
  textInputContainer: {
    // flex: 0.5,
    width: '100%',
    flexDirection: 'column',
  },
  switchContainer: {
    flexDirection: 'row',
  },
  switchLeftContainer: {
    width: '80%',
    alignSelf: 'flex-start',
  },
  switchRightContainer: {
    width: '20%',
    alignSelf: 'flex-end',
  },
  textInput: {
    margin: 15,
  },
  bottomButton: {
    // width: '100%',
    // backgroundColor: '#030066',
    // display: 'flex',
    width: '100%',
    height: 40,
    backgroundColor: '#030066',
    margin: 15,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 15,
  },
  summaryFont: {
    fontSize: 20,
    margin: 15,
    marginBottom: -5,
  },
  feeSwitch: {
    marginTop: 15,
  },
});
