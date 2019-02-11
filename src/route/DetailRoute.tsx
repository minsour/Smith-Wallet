// src/route
import { createStackNavigator } from 'react-navigation';
import { TxRoute } from './TxRoute';
import { TokenDetailScreen } from '../container/TokenDetailScreen';
import { TxSummaryListHeaderScreen } from '../container/TxSummaryListHeaderScreen';
export const DetailRoute = createStackNavigator(
  {
    TokenDetail: TokenDetailScreen,
    TxSummaryListHeader: TxSummaryListHeaderScreen,
    DetailTx: TxRoute,
  },
  {
    headerMode: 'none',
  },
);
