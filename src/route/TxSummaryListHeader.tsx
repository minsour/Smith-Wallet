import { createMaterialTopTabNavigator } from 'react-navigation';
import { TxSummaryListScreen } from '../container/TxSummaryListScreen';
import { SendTxSummaryListScreen } from '../container/SendTxSummaryListScreen';
import { ReceiveTxSummaryListScreen } from '../container/ReceiveTxSummaryListScreen';
import { BG_COLOR } from '../constants/colors';
import { DIMENSIONS_WIDTH } from '../constants/dementions';

export const TxSummaryListHeader = createMaterialTopTabNavigator(
  {
    All: TxSummaryListScreen,
    Send: SendTxSummaryListScreen,
    Receive: ReceiveTxSummaryListScreen,
  },
  {
    initialRouteName: 'All',
    tabBarOptions: {
      tabStyle: {},
      labelStyle: {
        color: '#000000',
      },
      indicatorStyle: {
        backgroundColor: '#4c4c4c',
      },
      style: {
        width: DIMENSIONS_WIDTH,
        height: 50,
        backgroundColor: BG_COLOR,
      },
    },
  },
);
