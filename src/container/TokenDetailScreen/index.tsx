import React from 'react';
import { View } from 'react-native';
import { Text, Provider, Button } from 'react-native-paper';
import { NavigationScreenProp, createAppContainer } from 'react-navigation';
import { styles } from './Styles';
import { route } from '../../constants/route';
import { Layout } from '../../layout/Layout';
import { TxSummaryListHeader } from '../../route/TxSummaryListHeader';
import { WalletStore } from '../../stores/walletStore';
import { inject, observer } from 'mobx-react';

const TxSummaryListContainer = createAppContainer(TxSummaryListHeader);

interface TokenDetailScreenProps {
  navigation: NavigationScreenProp<any, any>;
  walletStore: WalletStore;
}

@inject('walletStore')
@observer
export class TokenDetailScreen extends React.Component<TokenDetailScreenProps> {
  render() {
    return (
      <Layout header={false}>
        <View style={styles.summary}>
          <Text style={styles.summaryFont}>이더리움</Text>
          <Text style={styles.summaryFont}>2,500 ETH</Text>
          <View style={styles.balance}>
            <Text style={styles.balanceFont}>165,000,000</Text>
            <Text style={styles.krwFont}>KRW</Text>
          </View>
          <Text style={styles.addressFont} onPress={this.navigateToDetailTx}>
            {this.props.walletStore.getWallet.address}
          </Text>
        </View>
        <Provider>
          <TxSummaryListContainer />
        </Provider>
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.bottomButton}
              mode="contained"
              onPress={this.navigateToDetailTx} // 테스트용
            >
              Receive
            </Button>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.bottomButton}
              mode="contained"
              onPress={this.navigateToSend} // 테스트용
            >
              Send
            </Button>
          </View>
        </View>
      </Layout>
    );
  }

  private navigateToDetailTx = () => {
    this.props.navigation.navigate(route.DETAIL_TX_ROUTE);
  };

  private navigateToSend = () => {
    this.props.navigation.navigate(route.AUTHORIZE_PINCODE_SCREEN, {
      destination: route.SELECT_ADDRESS_SCREEN,
    });
  };
}
