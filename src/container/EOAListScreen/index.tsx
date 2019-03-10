import React from "react";
import { NavigationScreenProp } from "react-navigation";
import { styles } from "./Styles";
import { route } from "../../constants/route";
import { Layout } from '../../layout/Layout';
import { View, ScrollView, RefreshControl } from 'react-native';
import { EOA } from '../../components/EOA';
import { WalletStore } from '../../stores/walletStore';
import { inject, observer } from 'mobx-react';
import { store } from '../../constants/store';

interface EOAListScreenProps {
  navigation: NavigationScreenProp<any, any>
  walletStore?: WalletStore
}

@inject(store.WALLET_STORE)
@observer
export class EOAListScreen extends React.Component<EOAListScreenProps> {
  render() {
    let EOAId: number = 0
    return (
      <View style={styles.container}>
        <ScrollView
          // refreshControl={
          //   <RefreshControl
          //     refreshing={this.refreshing}
          //     onRefresh={this._onRefresh}
          //   />}
        >
          {/* <EOA
            path={0}
          /> */}
          {
            this.props.walletStore!.accountPath.map(path => 
              <EOA
                key={`${EOAId++}`}
                path={path}
              />
            )
          }
        </ScrollView>
      </View>
    );
  }

  private navigateToSplash = () => {
    this.props.navigation.navigate(route.SPLASH_SCREEN)
  }
}
