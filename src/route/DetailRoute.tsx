// src/route
import { createStackNavigator } from "react-navigation";
import { TxRoute } from './TxRoute';
import { TokenDetailScreen } from '../container/TokenDetailScreen';

export const DetailRoute = createStackNavigator(
    {
        TokenDetail: TokenDetailScreen,
        DetailTx: TxRoute
    },
    {
        headerMode: "none"
    }
);