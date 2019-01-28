import { createSwitchNavigator } from "react-navigation";
import { TxRoute } from './TxRoute';
import { DetailRoute } from './DetailRoute';
import { AddTokenScreen } from '../container/AddTokenScreen';
import { AddressListScreen } from '../container/AddressListScreen';
import { ManageAppRoute } from './ManageAppRoute';

export const DetailOrMenuRoute = createSwitchNavigator ({
    SummaryTx: TxRoute,
    Detail: DetailRoute,
    AddToken: AddTokenScreen,
    AddressList: AddressListScreen,
    ManageApp: ManageAppRoute
  }
);