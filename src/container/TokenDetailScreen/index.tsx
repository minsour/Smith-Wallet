import React from 'react';
import { View } from 'react-native';
import { Text, Provider } from 'react-native-paper';
import { NavigationScreenProp, createAppContainer } from 'react-navigation';
import { styles } from './Styles';
import { route } from '../../constants/route';
import { Layout } from '../../layout/Layout';
import { TxSummaryListHeader } from '../../route/TxSummaryListHeader';

const TxSummaryListContainer = createAppContainer(TxSummaryListHeader);

interface TokenDetailScreenProps {
  navigation: NavigationScreenProp<any, any>;
}

export class TokenDetailScreen extends React.Component<TokenDetailScreenProps> {
  render() {
    return (
      <Layout header={false}>
        <View style={styles.summary}>
          <Text style={styles.summaryFont}>이더리움</Text>
          <View style={styles.balance}>
            <Text style={styles.balanceFont}>789,000</Text>
            <Text style={styles.krwFont}>KRW</Text>
          </View>
          {/* <Text style={styles.addressFont}>{this.props.walletStore.getWallet.address}</Text> */}
          <Text style={styles.addressFont}>address...</Text>
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
