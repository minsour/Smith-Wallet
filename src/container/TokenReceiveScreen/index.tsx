import React from 'react';
import { Text } from 'react-native-paper';
import { NavigationScreenProp } from 'react-navigation';
import { WalletStore } from '../../stores/walletStore';
import { Layout } from '../../layout/Layout';
import { inject, observer } from 'mobx-react';
import QRCode from 'react-native-qrcode';

interface TokenReceiveScreenProps {
  navigation: NavigationScreenProp<any, any>;
  walletStore: WalletStore;
}

@inject('walletStore')
@observer
export class TokenReceiveScreen extends React.Component<
  TokenReceiveScreenProps
> {
  render() {
    return (
      <Layout
        header={true}
        headerTitle="입금 주소"
        headerNavigation={this.props.navigation}
      >
        <QRCode
          // value={this.props.walletStore.getWallet.address}
          value="address(If I successfully load EOA, this appears without any errors)"
          size={200}
          bgColor="black"
          fgColor="white"
        />
        <Text>{this.props.walletStore.getWallet.address}</Text>
      </Layout>
    );
  }
}
