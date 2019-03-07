import React from 'react';
import { Text } from 'react-native-paper';
import { NavigationScreenProp } from 'react-navigation';
import { WalletStore } from '../../stores/walletStore';
import { Layout } from '../../layout/Layout';
import { inject, observer } from 'mobx-react';
import QRCode from 'react-native-qrcode';
import { store } from '../../constants/store';
import { getAccountInfo } from '../../apis/ethers';

interface TokenReceiveScreenProps {
  navigation: NavigationScreenProp<any, any>;
  walletStore: WalletStore;
}
var usrAddress = '';

@inject(store.WALLET_STORE)
@observer
export class TokenReceiveScreen extends React.Component<
  TokenReceiveScreenProps
> {
  componentDidMount() {
    usrAddress = getAccountInfo(this.props.walletStore!.getMnemonic, 0).address;
  }
  render() {
    return (
      <Layout
        header={true}
        headerTitle="입금 주소"
        headerNavigation={this.props.navigation}
      >
        <QRCode value={usrAddress} size={200} bgColor="black" fgColor="white" />
        <Text>{usrAddress}</Text>
      </Layout>
    );
  }
}
