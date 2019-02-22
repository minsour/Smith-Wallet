import React from 'react';
import { createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import { RootRoute } from './src/route/index';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'mobx-react';
import { WalletStore } from './src/stores/walletStore';
import { TokenInfoStore } from './src/stores/tokenInfoStore';

const AppContainer = createAppContainer(RootRoute);
const walletStore = new WalletStore();
const tokenInfoStore = new TokenInfoStore();

export default class App extends React.Component {
  render() {
    return (
      <PaperProvider>
        <Provider walletStore={walletStore} tokenInfoStore={tokenInfoStore}>
          <AppContainer />
        </Provider>
      </PaperProvider>
    );
  }
}
