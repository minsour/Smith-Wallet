import React from "react";
import { Text, TouchableRipple, IconButton } from "react-native-paper";
import { NavigationScreenProp } from 'react-navigation';
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
          <View style={styles.viewContent}>
            <IconButton style={styles.icon} size={38} icon='playlist-add'/>
            <Text style={styles.font}>
              토큰 추가
            </Text>
          </View>
        </TouchableRipple>
        <TouchableRipple style={styles.content} onPress={this.navigateToAddEOA}>
          <View style={styles.viewContent}>
            <IconButton style={styles.icon} size={38} icon='folder-open'/>
            <Text style={styles.font}>
              계좌 추가
            </Text>
          </View>
        </TouchableRipple>
        {this.props.walletStore!.walletList.get(walletTab.UPbit) ?
          <View style={styles.content}>
            <View style={styles.viewContent}>
              <IconButton style={styles.icon} color='#dcdcdc' size={38} icon='vertical-align-bottom' />
              <Text style={styles.upbitFont}>
                업비트 연동
              </Text>
            </View>
          </View> :
          <TouchableRipple style={styles.content} onPress={this.navigateToImportUPbit}>
            <View style={styles.viewContent}>
              <IconButton style={styles.icon} size={38} icon='vertical-align-bottom'/>
              <Text style={styles.font}>
                업비트 연동
              </Text>
            </View>
          </TouchableRipple>
        }
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

  private navigateToImportUPbit = () => {
    this.props.modalStore!.hideModal(modal.ADD_MODAL)
    this.props.navigation.navigate(route.AUTHORIZE_PINCODE_SCREEN, {
      destination: route.ENTER_UPBIT_KEY_SCREEN
    });
  }
}
