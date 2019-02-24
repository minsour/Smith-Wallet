import { createSwitchNavigator } from "react-navigation";
import { AddTokenScreen } from '../container/AddTokenScreen';
import { AddEOAScreen } from '../container/AddEOAScreen';

export const AddSomethingRoute = createSwitchNavigator (
    {
        AddToken: AddTokenScreen,
        AddEOA: AddEOAScreen
    }
);

