import React from 'react';
import { View } from 'react-native';
import { Text, Provider } from 'react-native-paper';
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
          <Text style={styles.summaryFont}>룸네트워크</Text>
          <Text style={styles.summaryFont}>2,500LOOM</Text>
          <View style={styles.balance}>
            <Text style={styles.balanceFont}>165,000</Text>
            <Text style={styles.krwFont}>KRW</Text>
          </View>
          <Text style={styles.addressFont}>
            {this.props.walletStore.getWallet.address}
          </Text>
        </View>
        <Provider>
          <TxSummaryListContainer />
        </Provider>
      </Layout>
    );
  }

  // private navigateToDetailTx = () => {
  //   this.props.navigation.navigate(route.DETAIL_TX_ROUTE);
  // };

  // private navigateToSend = () => {
  //   this.props.navigation.navigate(route.AUTHORIZE_PINCODE_SCREEN, {
  //     destination: route.SELECT_ADDRESS_SCREEN,
  //   });
  // };
}
