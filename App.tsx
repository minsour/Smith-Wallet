import React from "react";
import { createAppContainer } from "react-navigation"; // Version can be specified in package.json
import { RootRoute } from "./src/route/index";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "mobx-react";
import { WalletStore } from './src/stores/walletStore';

const AppContainer = createAppContainer(RootRoute);
const walletStore = new WalletStore();

export default class App extends React.Component {
  render() {
    return (
      <PaperProvider>
        <Provider walletStore={walletStore}>
        <AppContainer />
        </Provider>
      </PaperProvider>
    );
  }
}