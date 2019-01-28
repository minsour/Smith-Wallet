// src/route
import { createSwitchNavigator } from "react-navigation";
import { TokenReceiveScreen } from '../container/TokenReceiveScreen';
import { TxSendRoute } from './TxSendRoute';

export const TxRoute = createSwitchNavigator ({
    TokenReceive: TokenReceiveScreen,
    TxSend: TxSendRoute
  }
);