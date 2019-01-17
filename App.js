import React from "react";
import { Button, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation"; // Version can be specified in package.json
import { CreateAccountStack, RootRoute } from "./src/route/index";
import { Provider as PaperProvider } from "react-native-paper";

const AppContainer = createAppContainer(CreateAccountStack);

export default class App extends React.Component {
  render() {
    return (
      <PaperProvider>
        <AppContainer />
      </PaperProvider>
    );
  }
}
