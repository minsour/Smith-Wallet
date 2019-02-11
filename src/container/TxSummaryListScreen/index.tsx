import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { Layout } from '../../layout/Layout';
import { List } from 'react-native-paper';
import { WalletStore } from '../../stores/walletStore';

const ethers = require('ethers');

interface TxSummaryListScreenProps {
  navigation: NavigationScreenProp<any, any>;
  walletStore: WalletStore;
}

export class TxSummaryListScreen extends React.Component<
  TxSummaryListScreenProps
> {
  render() {
    // console.log(this.props.walletStore.getAddress);
    let etherscanProvider = new ethers.providers.EtherscanProvider();
    let address = '0xc858df16fb030c529c8b43469c42f354f98a8d57';
    etherscanProvider.getHistory(address).then(function(history: string) {
      console.log(history);
    });

    return (
      <Layout header={false}>
        <List.Section width="100%">
          <List.Item
            title="0xc858df16fb030c529c8b43469c42f354f98a8d57"
            description="01/10/2019 14:59:00"
            left={() => <List.Icon icon="file-download" />}
            right={() => <Text>-0.3 ETH</Text>}
          />
          <List.Item
            title="0x2Cc08D64C38FA547ecEe4B15Ef8238A5912B2206"
            description="01/13/2019 14:59:00"
            left={() => <List.Icon icon="file-upload" />}
            right={() => <Text>+4 ETH</Text>}
          />
        </List.Section>
      </Layout>
    );
  }
}
