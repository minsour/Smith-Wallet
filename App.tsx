import React from "react";
import { createAppContainer } from "react-navigation"; // Version can be specified in package.json
import { RootRoute } from "./src/route/index";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "mobx-react";
import { RootStore } from './src/stores';

const AppContainer = createAppContainer(RootRoute);
const rootStore = new RootStore()

export default class App extends React.Component {
  render() {
    return (
      <PaperProvider>
        <Provider {...rootStore}>
        <AppContainer />
        </Provider>
      </PaperProvider>
    );
  }
}