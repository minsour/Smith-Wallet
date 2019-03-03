import { StyleSheet } from 'react-native';
import { DIMENSIONS_WIDTH } from '../../constants/dementions';

export const styles = StyleSheet.create({
  // container: {
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  // },
  container: {
    // flex: 0.5,
    width: DIMENSIONS_WIDTH,
    alignItems: 'center'
  },
  bodyContainer: {
    flex: 5,
    width: DIMENSIONS_WIDTH,
    alignItems: 'center'
  },
  inputContainer: {
    width: DIMENSIONS_WIDTH - 40,
    height: 180,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderColor: "#eaeaea",
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputContainer: {
    width: DIMENSIONS_WIDTH - 100
  },
  bottomContainer: {
    flex: 3,
    width: DIMENSIONS_WIDTH,
    alignItems: 'center',
  },
  amountInput: {
    margin: 15,
    backgroundColor: "#fff",
    width: DIMENSIONS_WIDTH - 80,
  },
  accountInput: {
    margin: 15,
    backgroundColor: "#fff",
    width: DIMENSIONS_WIDTH - 80,
    marginBottom: -3,
    marginTop: -5
  },
  button: {
    backgroundColor: "#030066",
    borderRadius: 0,
    width: DIMENSIONS_WIDTH,
    height: 55,
    marginTop: -20,
    marginBottom:-3,
    justifyContent: 'center'
  },
  buttonFont: {
    color: "#fff",
    fontSize: 17,
  },
  notButton: {
    backgroundColor: "#d5d5d5",
    borderRadius: 0,
    width: DIMENSIONS_WIDTH,
    height: 55,
    marginTop: -20,
    marginBottom:-3,
    justifyContent: 'center'
  },
  notButtonFont: {
    fontSize: 17,
    color: "#626262"
  },
  label: {
    fontSize: 14,
    color: "#a6a6a6",
    marginLeft: 12,
    marginBottom:-13
  },
  summaryFont: {
    fontSize: 20,
    margin: 15,
    marginBottom: -5,
  },
  feeSwitch: {
    marginTop: 15,
  },
  subscription: {
    marginTop: 18,
    width: DIMENSIONS_WIDTH - 60,
    borderBottomColor: "#4c4c4c",
    borderBottomWidth: 1,
    paddingLeft: 10,
    paddingRight: 10
  },
  total: {
    flexDirection: 'row',
  },
  totalText: {
    fontSize: 14,
    width: 100,
    marginRight: DIMENSIONS_WIDTH - 360
  },
  totalNumber: {
    fontSize: 14,
    width: 150,
    textAlign: 'right',
    paddingRight: 5
  },
  totalSymbol: {
    fontSize: 14,
    width: 40,
    color: "#4c4c4c"
  },
  transfer: {
    flexDirection: 'row',
    marginTop: 4,
  },
  transferText: {
    fontSize: 14,
    width: 100,
    marginRight: DIMENSIONS_WIDTH - 360
  },
  transferNumber: {
    fontSize: 14,
    width: 150,
    textAlign: 'right',
    paddingRight: 5
  },
  transferSymbol: {
    fontSize: 14,
    width: 40,
    color: "#4c4c4c"
  },
  gasfee: {
    flexDirection: 'row',
    marginTop: 4,
  },
  gasfeeText: {
    fontSize: 14,
    width: 100,
    marginRight: DIMENSIONS_WIDTH - 360
  },
  gasfeeNumber: {
    fontSize: 14,
    width: 150,
    textAlign: 'right',
    paddingRight: 5
  },
  gasfeeSymbol: {
    fontSize: 14,
    width: 40,
    color: "#4c4c4c"
  },
  balance: {
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 12
  },
  balanceText: {
    fontSize: 14,
    width: 100,
    marginRight: DIMENSIONS_WIDTH - 360
  },
  balanceNumber: {
    fontSize: 14,
    width: 150,
    textAlign: 'right',
    paddingRight: 5
  },
  balanceSymbol: {
    fontSize: 14,
    width: 40,
    color: "#4c4c4c"
  }
});