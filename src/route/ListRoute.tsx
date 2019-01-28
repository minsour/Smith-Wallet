// src/route
import { createMaterialTopTabNavigator } from "react-navigation";
import { TokenListScreen } from '../container/TokenListScreen';
import { EOAListScreen } from '../container/EOAListScreen';

export const ListRoute = createMaterialTopTabNavigator (
    {
        TokenList: TokenListScreen,
        EOAList: EOAListScreen
    },
    {
        tabBarOptions: {
            //showLabel: false,
            style:{
              height:0
            }
        }
    }
);