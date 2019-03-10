import { createSwitchNavigator } from "react-navigation";
import { TxRoute } from './TxRoute';
import { DetailRoute } from './DetailRoute';
import { ManageAppRoute } from './ManageAppRoute';
import { AddSomethingRoute } from './AddSomethingRoute';
import { ImportUPbitKeyRoute } from './ImportUPbitKeyRoute';
import { DeleteTokenScreen } from '../container/DeleteTokenScreen';

export const DetailOrMenuRoute = createSwitchNavigator ({
  SummaryTx: TxRoute,
  Detail: DetailRoute,
  AddSomething: AddSomethingRoute,
  DeleteToken: DeleteTokenScreen,
  ManageApp: ManageAppRoute,
  ImportUPbit: ImportUPbitKeyRoute
});