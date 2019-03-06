import { createSwitchNavigator } from "react-navigation";
import { TxRoute } from './TxRoute';
import { DetailRoute } from './DetailRoute';
import { AddressListScreen } from '../container/AddressListScreen';
import { ManageAppRoute } from './ManageAppRoute';
import { AddSomethingRoute } from './AddSomethingRoute';
import { ImportUPbitKeyRoute } from './ImportUPbitKeyRoute';

export const DetailOrMenuRoute = createSwitchNavigator ({
  SummaryTx: TxRoute,
  Detail: DetailRoute,
  AddSomething: AddSomethingRoute,
  AddressList: AddressListScreen,
  ManageApp: ManageAppRoute,
  ImportUPbit: ImportUPbitKeyRoute
});