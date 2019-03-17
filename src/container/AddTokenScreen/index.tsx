import React from "react";
import { Text, Searchbar, Button } from "react-native-paper";
import { Layout } from '../../layout/Layout';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react/native';
import { styles } from "./Styles";
import { View, ScrollView } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { Token } from '../../components/Token';
import { modal } from '../../constants/modal';
import { TokenStore } from '../../stores/tokenStore';
import { ModalStore } from '../../stores/modalStore';
import { store } from '../../constants/store';
import { WalletStore } from '../../stores/walletStore';
import { Symbol } from '../../components/Symbol';
import { route } from '../../constants/route';
import { AsyncStorageUtils } from '../../utils/asyncStorageUtils';

interface AddTokenScreenProps {
  tokenStore?: TokenStore
  modalStore?: ModalStore
  walletStore?: WalletStore
  navigation: NavigationScreenProp<any,any>
}

@inject(store.TOKEN_STORE, store.MODAL_STORE, store.WALLET_STORE)
@observer
export class AddTokenScreen extends React.Component<AddTokenScreenProps> {
  render() {
    let tokenId: number = 0
    return (
      <Layout header={true} headerTitle="토큰 추가" headerNavigation={this.props.navigation} search={true}>
        <View style={this.props.modalStore!.visible[modal.ADD_TOKEN] ? styles.symbolContainer : styles.temp}>
          <ScrollView horizontal={true}>
            <View style={styles.symbolScrollContainer}>
              {this.props.tokenStore!.willBeAddedTokenList.map(token =>
                <Symbol token={token} />)
              }
            </View>
          </ScrollView>
        </View>
        <View style={styles.list}>
          <ScrollView>
            {this.props.tokenStore!.searchedTokenList.map(token =>
              <Token
                key={`${tokenId++}`}
                token={token}
              />)
            }
          </ScrollView>
        </View>
        {this.props.modalStore!.visible[modal.ADD_TOKEN] &&
          <Button
            style={styles.addButton}
            onPress={this.setlectToken}
          >
            <Text style={styles.buttonFont}>
              추 가
            </Text>
          </Button>
        }
      </Layout>
    );
  }

  private setlectToken = async () => {
    this.props.tokenStore!.selectToken()
    this.props.modalStore!.visible[modal.ADD_TOKEN] = false
    this.props.tokenStore!.updateBalanceInfo()
    await AsyncStorageUtils.storeTokenStorage(this.props.tokenStore!.tokenStorage)
    this.props.navigation.navigate(route.MAIN_SCREEN)
  }
}
