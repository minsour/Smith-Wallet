import React from 'react';
import { View, Clipboard, Alert } from 'react-native';
import { Text } from 'react-native-paper';
import { NavigationScreenProp } from 'react-navigation';
import { WalletStore } from '../../stores/walletStore';
import { Layout } from '../../layout/Layout';
import { inject, observer } from 'mobx-react';
import QRCode from 'react-native-qrcode';
import { store } from '../../constants/store';
import { styles } from '../TokenReceiveScreen/Styles';

interface TokenReceiveScreenProps {
  navigation: NavigationScreenProp<any, any>;
  walletStore?: WalletStore;
}

@inject(store.WALLET_STORE)
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
        <View style={styles.QRCodeContainer}>
          <QRCode
            value={this.props.walletStore!.currentWallet.walletAddress}
            size={200}
            bgColor="black"
            fgColor="white"
          />
        </View>
        <Text onPress={this.copyWalletAddress}>
          {this.props.walletStore!.currentWallet.walletAddress}
        </Text>
      </Layout>
    );
  }
  private copyWalletAddress = async () => {
    if (this.props.walletStore!.currentWallet.walletAddress) {
      await Clipboard.setString(
        this.props.walletStore!.currentWallet.walletAddress,
      );
      Alert.alert('Copied!', 'Your wallet address is copied!');
    }
  };
}
