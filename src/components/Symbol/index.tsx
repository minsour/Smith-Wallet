import React from 'react'
import { Text, Chip, IconButton } from "react-native-paper";
import { styles } from "./Styles";
import { View } from 'react-native';
import { observable, action } from 'mobx';
import { inject, observer } from 'mobx-react/native';
import { TokenStore } from '../../stores/tokenStore';
import { store } from '../../constants/store';
import { ModalStore } from '../../stores/modalStore';
import { modal } from '../../constants/modal';

interface TokenType {
  symbol: string
  koreanName: string
  marketCode: string
  address: string
  abi?: string
  balance?: number
  isPicked?: boolean
}

interface SymbolProps {
  token: TokenType
  tokenStore?: TokenStore
  modalStore?: ModalStore
}

@inject(store.TOKEN_STORE, store.MODAL_STORE)
@observer
export class Symbol extends React.Component<SymbolProps> {
  @action private dropToken = () => {
    this.props.tokenStore!.dropOffToken(this.props.token)
    this.props.token.isPicked = false
    this.props.modalStore!.showModal(modal.IS_PICKED)
  }

  render() {
    return (
      //Chip.js 가서 text랑 icon 위치 변경
      <Chip
        icon='close'
        onPress={this.dropToken}
        style={styles.chipContainer}
      >
        {this.props.token.symbol}
      </Chip>
    );
  }
}
