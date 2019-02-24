import React from "react";
import { Text, Searchbar, Button } from "react-native-paper";
import { Layout } from '../../layout/Layout';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react/native';
import { styles } from "./Styles";
import { View, ScrollView } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { Token } from '../../components/Token';
import { modal } from '../../constants/modal';
import { route } from '../../constants/route';
import { TokenStore } from '../../stores/tokenStore';
import { ModalStore } from '../../stores/modalStore';
import { store } from '../../constants/store';
import { observable } from 'mobx';

interface AddTokenScreenProps {
  tokenStore?: TokenStore
  modalStore?: ModalStore
  navigation: NavigationScreenProp<any,any>
}

@inject(store.TOKEN_STORE, store.MODAL_STORE)
@observer
export class AddTokenScreen extends React.Component<AddTokenScreenProps> {
  @observable searchText: string = ""
  render() {
    let tokenId: number = 0
    return (
      <Layout header={true} headerTitle="토큰 추가" headerNavigation={this.props.navigation}>
        <View style={styles.searchBarContainer}>
          <Searchbar
            placeholder="검색하기"
            onChangeText={(searchText)=> this.searchToken(searchText)}
            value={this.searchText}
            style={styles.searchBar}
          />
        </View>
        <View style={styles.list}>
          <ScrollView>
            {this.props.tokenStore!.searchedTokenList.map(token =>
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
        {this.props.modalStore!.visible[modal.ADD_TOKEN] &&
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
    this.props.tokenStore!.selectToken()
    this.props.modalStore!.visible[modal.ADD_TOKEN] = false
    this.props.navigation.navigate(route.MAIN_SCREEN)
  }

  private searchToken = (searchText: string) => {
    // searchBar 동기화
    this.searchText = searchText
    // searchText가 토큰명 or 토큰심볼(대문자 or 소문자)에 포함되는 토큰들
    this.props.tokenStore!.searchedTokenList =
      this.props.tokenStore!.ercTokenList
      .filter( token => token.koreanName.indexOf(searchText) !== -1
        || token.symbol.indexOf(searchText) !== -1
        || token.symbol.toLocaleLowerCase().indexOf(searchText) !== -1 )
  }
}
