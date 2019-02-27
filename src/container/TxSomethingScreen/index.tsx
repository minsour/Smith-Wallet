import React from "react";
import { Text, TouchableRipple } from "react-native-paper";
import { NavigationScreenProp } from 'react-navigation';
import { View } from 'react-native';
import { styles } from './Styles'
import { route } from '../../constants/route';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react/native';
import { modal } from '../../constants/modal';
import { ModalStore } from '../../stores/modalStore';
import { store } from '../../constants/store';
import { TokenStore } from '../../stores/tokenStore';

interface TxSomethingScreenProps {
  navigation: NavigationScreenProp<any, any>
  modalStore?: ModalStore
  tokenStore?: TokenStore
}

@inject(store.MODAL_STORE, store.TOKEN_STORE)
@observer
export class TxSomethingScreen extends React.Component<TxSomethingScreenProps> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableRipple style={styles.content} onPress={this.navigateToTokenReceive}>
          <Text>
            받기
          </Text>
        </TouchableRipple>
        <TouchableRipple style={styles.content} onPress={this.navigateToTokenSend}>
          <Text>
            보내기
          </Text>
        </TouchableRipple>
        {}
      </View>
    );
  }

  private navigateToTokenReceive = () => {
    this.props.modalStore!.hideModal(modal.TX_MODAL)
    this.props.navigation.navigate(route.TOKEN_SEND_SCREEN)
  }

  private navigateToTokenSend = async () => {
    await this.props.modalStore!.showModal(modal.LOADING)
    await this.props.modalStore!.hideModal(modal.TX_MODAL)
    await this.props.tokenStore!.balanceOf(this.props.tokenStore!.clickedToken)
    await this.props.modalStore!.hideModal(modal.LOADING)
    this.props.navigation.navigate(route.TOKEN_SEND_SCREEN)
  }
}
