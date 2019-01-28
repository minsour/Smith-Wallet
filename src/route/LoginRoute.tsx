// src/route
import { createStackNavigator } from "react-navigation";
import { CreateOrImportRoute } from "./CreateOrImportRoute";
import InitialScreen from '../container/InitialScreen';

export const LoginRoute = createStackNavigator({
    Initial: InitialScreen,
    CreateOrImport: CreateOrImportRoute  // CreateScreen 또는 ImportScreen 으로 이동
  },
  {
    headerMode: "none"
  }
);