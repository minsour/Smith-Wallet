import * as React from "react";
import { Text, TouchableRipple, Button, IconButton } from "react-native-paper";
import { styles } from "./Styles";
import { View } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { store } from '../../constants/store';
import { ModalStore } from '../../stores/modalStore';
import { modal } from '../../constants/modal';
import { WalletStore } from '../../stores/walletStore';
import { walletTab } from '../../constants/walletTab';
import { TokenStore } from '../../stores/tokenStore';

interface EOAProps {
  modalStore?: ModalStore
  walletStore?: WalletStore
  tokenStore?: TokenStore
  path: number
}

@inject(store.MODAL_STORE, store.TOKEN_STORE, store.WALLET_STORE)
@observer
export class EOA extends React.Component<EOAProps> {
  render() {
    return (
      <TouchableRipple style={styles.selectedItem} onPress={() => this.clickEOA(this.props.path)}>
        <View style={styles.EOA}>
          <View style={styles.name}>
            <Text style={styles.nameFont}>
              {this.props.walletStore!.walletList.get(`${walletTab.Smith}${this.props.path}`)!.accountName}
            </Text>
            <IconButton
              icon='create'
              size={16}
              onPress={() => this.reWriteName(this.props.path)}
            />
          </View>
          <Text style={styles.addressFont}>
            {this.props.walletStore!.walletList.get(`${walletTab.Smith}${this.props.path}`)!.wallet!.address}
          </Text>
        </View>
      </TouchableRipple>
    )
  }
  
  private clickEOA = (path: number) => {
      this.props.walletStore!.setWallet(path)
      this.props.tokenStore!.updateBalanceInfo()
  }
    
  private reWriteName = (path: number) => {
      
  }

  private show = async (EOAIndex: number) => {
  }
}