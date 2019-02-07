// src/route
import { createMaterialTopTabNavigator } from "react-navigation";
import { Dimensions } from 'react-native';
import { AddTokenScreen } from '../container/AddTokenScreen';
import { AddEOAScreen } from '../container/AddEOAScreen';
import { BG_COLOR } from "../constants/colors";

export const AddSomethingRoute = createMaterialTopTabNavigator (
    {
        토큰: AddTokenScreen,
        계좌: AddEOAScreen
    },
    {
        initialRouteName: "토큰",
        tabBarOptions: {
            tabStyle: {
                
            },
            labelStyle: {
                color: "#000000"
            },
            indicatorStyle: {
                backgroundColor: "#4c4c4c"
            },
            style:{
              width: Dimensions.get("window").width,
              height: 50,
              backgroundColor: BG_COLOR,
              marginTop: -20
            }
        }
    }
);

