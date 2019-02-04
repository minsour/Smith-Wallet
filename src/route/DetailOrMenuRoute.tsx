import { createSwitchNavigator } from "react-navigation";
import { TxRoute } from './TxRoute';
import { DetailRoute } from './DetailRoute';
import { AddressListScreen } from '../container/AddressListScreen';
import { ManageAppRoute } from './ManageAppRoute';
import { AddSomethingScreen } from '../container/AddSomethingScreen';

export const DetailOrMenuRoute = createSwitchNavigator ({
    SummaryTx: TxRoute,
    Detail: DetailRoute,
    AddSomething: AddSomethingScreen,
    AddressList: AddressListScreen,
    ManageApp: ManageAppRoute
  }
);