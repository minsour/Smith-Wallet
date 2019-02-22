import React from 'react';
import { Text, ScrollView } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { Layout } from '../../layout/Layout';
import { List } from 'react-native-paper';
import { WalletStore } from '../../stores/walletStore';
import { inject, observer } from 'mobx-react';
import { TokenInfoStore } from '../../stores/tokenInfoStore';
import { SEND_ICON_COLOR, RECEIVE_ICON_COLOR } from '../../constants/colors';
import { SEND_ICON, RECEIVE_ICON } from '../../constants/icons';
import { styles } from './Styles';
import { getERC20TokenHistory } from '../../apis/EtherscanAPI';

const moment = require('moment');
const ethers = require('ethers');

interface TxSummaryListScreenProps {
  navigation: NavigationScreenProp<any, any>;
  walletStore: WalletStore;
  tokenInfoStore: TokenInfoStore;
}

interface TokenHistory {
  hash: string; //transaction hash
  from: string;
  to: string;
  timeStamp: string;
  contractAddress: string;
  value: string;
}
var keyIndex: number = 0;

// 임시로 하드코딩한 값
var contractAddress = '0xCe5559F046d8C01192E15f55063906F8d1c14790';
var userAddress = '0x6b59210ade46b62b25e82e95ab390a7ccadd4c3a';

@inject('walletStore')
@inject('tokenInfoStore')
@observer
export class TxSummaryListScreen extends React.Component<
  TxSummaryListScreenProps
> {
  componentDidMount() {
    getERC20TokenHistory(contractAddress, userAddress).then(
      (responseJson: TokenHistory | any) => {
        this.props.tokenInfoStore.tokenHistoryList = JSON.parse(responseJson);
      },
    );
  }
  render() {
    const { tokenInfoStore } = this.props;
    return (
      <Layout header={false}>
        <List.Section style={styles.listSectionContainer}>
          <ScrollView>
            {tokenInfoStore.tokenHistoryList.map(token => (
              <List.Item
                key={`${keyIndex++}`}
                title={token.to}
                description={this.convertTimestamp(token.timeStamp)}
                left={() => (
                  <List.Icon
                    icon={this.classifySendReceive(token.from, userAddress)}
                    color={
                      token.from === userAddress
                        ? SEND_ICON_COLOR
                        : RECEIVE_ICON_COLOR
                    }
                  />
                )}
                right={() => (
                  <Text>
                    {this.convertValue(token.value)} {token.tokenSymbol}
                  </Text>
                )}
              />
            ))}
          </ScrollView>
        </List.Section>
      </Layout>
    );
  }
  private convertTimestamp = (timeStamp: string) => {
    //UNIX timestamp -> 일반 Date로 쉽게 변환하기 위해 moment.js 모듈 사용
    var result = moment.unix(parseInt(timeStamp));
    return result.format('YYYY-MM-DD HH:mm:ss');
  };
  private convertValue = (value: string) => {
    return ethers.utils.formatEther(value);
  };
  private classifySendReceive = (from: string, myAddress: string) => {
    if (from === myAddress) {
      return SEND_ICON;
    } else {
      return RECEIVE_ICON;
    }
  };
}
