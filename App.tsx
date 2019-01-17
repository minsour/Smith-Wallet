import React from "react";
import { createAppContainer } from "react-navigation"; // Version can be specified in package.json
import { CreateAccountStack } from "./src/route/index";
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