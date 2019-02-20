import React from "react";
import { NavigationScreenProp } from "react-navigation";
import { styles } from "./Styles";
import { route } from "../../constants/route";
import { Layout } from '../../layout/Layout';
import { ScrollView } from 'react-native';
import { inject, observer } from 'mobx-react';
import { Token } from '../../components/Token';
import { TokenStore } from '../../stores/tokenStore';
import { store } from '../../constants/store';

interface TokenListScreenProps {
  navigation: NavigationScreenProp<any, any>
  tokenStore?: TokenStore
}

@inject(store.tokenStore)
@observer
export class TokenListScreen extends React.Component<TokenListScreenProps> {
  render() {
    let tokenId: number = 0
    return (
      <Layout header={false}>
        <ScrollView>
            {this.props.tokenStore!.selectedTokenList.map(token =>
              <Token
                key={`${tokenId++}`}
                balance={12300}
                name={token.koreanName}
                symbol={token.symbol}
                address={token.address}
                token={token}
              />)
            }
          </ScrollView>
      </Layout>
    );
  }

  private navigateToDetailTx = () => {
    this.props.navigation.navigate(route.DETAIL_TX_ROUTE)
  }

  private navigateToSend = () => {
    this.props.navigation.navigate(route.AUTHORIZE_PINCODE_SCREEN, {
        destination: route.SELECT_ADDRESS_SCREEN
    })
  }
}
