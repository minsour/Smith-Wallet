import React from "react";
import { Text, TouchableRipple } from "react-native-paper";
import { NavigationScreenProp } from 'react-navigation';
import { StackActions, NavigationActions } from 'react-navigation';
import { View } from 'react-native';
import { styles } from './Styles'
import { route } from '../../constants/route';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react/native';
import { modal } from '../../constants/modal';
import { ModalStore } from '../../stores/modalStore';
import { store } from '../../constants/store';
import { WalletStore } from '../../stores/walletStore';
import { walletTab } from '../../constants/walletTab';

interface AddSomethingScreenProps {
  navigation: NavigationScreenProp<any, any>
  modalStore?: ModalStore
  walletStore?: WalletStore
}

@inject(store.MODAL_STORE, store.WALLET_STORE)
@observer
export class AddSomethingScreen extends React.Component<AddSomethingScreenProps> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableRipple style={styles.content} onPress={this.navigateToAddToken}>
          <Text>
            토큰 추가
          </Text>
        </TouchableRipple>
        <TouchableRipple style={styles.content} onPress={this.navigateToAddEOA}>
          <Text>
            계좌 추가
          </Text>
        </TouchableRipple>
        <TouchableRipple style={styles.content} onPress={this.navigateToImportMnemonic}>
          <Text>
            지갑 추가
          </Text>
        </TouchableRipple>
        <TouchableRipple style={styles.content} onPress={this.navigateToImportUPbit}>
          <Text>
            업비트 연동
          </Text>
        </TouchableRipple>
      </View>
    );
  }

  private navigateToAddToken = () => {
    this.props.modalStore!.hideModal(modal.ADD_MODAL)
    this.props.navigation.navigate(route.ADD_TOKEN)
  }
  private navigateToAddEOA = () => {
    this.props.modalStore!.hideModal(modal.ADD_MODAL)
    this.props.navigation.navigate(route.ADD_EOA)
  }
  private navigateToImportMnemonic = async () => {
    this.props.modalStore!.hideModal(modal.ADD_MODAL)
    this.props.navigation.navigate(route.AUTHORIZE_PINCODE_SCREEN, {
      destination: route.ENTER_MNEMONIC_SCREEN
    });
  }
  private navigateToImportUPbit = () => {
    this.props.modalStore!.hideModal(modal.ADD_MODAL)
    this.props.navigation.navigate(route.AUTHORIZE_PINCODE_SCREEN, {
      destination: route.ENTER_UPBIT_KEY_SCREEN
    });
  }
}
