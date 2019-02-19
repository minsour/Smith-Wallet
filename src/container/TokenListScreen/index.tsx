import React from "react";
import { NavigationScreenProp } from "react-navigation";
import { styles } from "./Styles";
import { route } from "../../constants/route";
import { Layout } from '../../layout/Layout';
import { ScrollView } from 'react-native';
import { RootStore } from '../../stores';
import { inject, observer } from 'mobx-react';
import { Token } from '../../components/Token';

interface TokenListScreenProps {
  navigation: NavigationScreenProp<any, any>
  rootStore?: RootStore
}

@inject('rootStore')
@observer
export class TokenListScreen extends React.Component<TokenListScreenProps> {
  render() {
    const { tokenStore } = this.props.rootStore!
    let tokenId: number = 0
    return (
      <Layout header={false}>
        <ScrollView>
            {tokenStore.selectedTokenList.map(token =>
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
