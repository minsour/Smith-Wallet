import React from "react";
import { Text, Searchbar, Button } from "react-native-paper";
import { Layout } from '../../layout/Layout';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react/native';
import { styles } from "./Styles";
import { View, ScrollView } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { RootStore } from '../../stores';
import { Token } from '../../components/Token';
import { Symbol } from '../../components/Symbol';
import { ModalLayout } from '../../layout/ModalLayout';
import { modal } from '../../constants/modal';
import { route } from '../../constants/route';

interface AddTokenScreenProps {
  rootStore: RootStore
  navigation: NavigationScreenProp<any,any>
}

@inject('rootStore')
@observer
export class AddTokenScreen extends React.Component<AddTokenScreenProps> {
  render() {
    const { tokenStore, modalStore } = this.props.rootStore
    let tokenId: number = 0
    return (
      <Layout header={true} headerTitle="토큰 추가" headerNavigation={this.props.navigation}>
        <View style={styles.searchBarContainer}>
          <Searchbar
            placeholder="검색하기"
            onChangeText={()=>{}}
            value={""}
            style={styles.searchBar}
          />
        </View>
        <View style={styles.list}>
          <ScrollView>
            {tokenStore.searchedTokenList.map(token =>
              <Token
                key={`${tokenId++}`}
                name={token.koreanName}
                symbol={token.symbol}
                address={token.address}
                token={token}
              />)
            }
          </ScrollView>
        </View>
        {modalStore.visible[modal.addToken] &&
            <Button
              style={styles.addButton}
              onPress={this.setlectToken}
            >
              <Text style={styles.buttonFont}>
                추 가
              </Text>
            </Button>
          }
      </Layout>
    );
  }
  private setlectToken = () => {
    const { tokenStore, modalStore } = this.props.rootStore
    tokenStore.selectToken()
    modalStore.visible[modal.addToken] = false
    this.props.navigation.navigate(route.MAIN_SCREEN)
  }
}
