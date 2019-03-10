import React from "react";
import { View, Text } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { UserHeader } from "../components/UserHeader";
import { styles } from "./Styles";
import { ModalStore } from '../stores/modalStore';
import { inject, observer } from 'mobx-react';
import { store } from '../constants/store';
import { modal } from '../constants/modal';
import { Searchbar, TouchableRipple } from 'react-native-paper';
import { observable } from 'mobx';
import { TokenStore } from '../stores/tokenStore';

interface LayoutProps {
  header: boolean  // false면, 헤더가 없는 레이아웃
  headerTitle?: string;  // 없으면, 타이틀이 없는 헤더
  headerNavigation?: NavigationScreenProp<any,any>;  // 없으면, 뒤로가기 버튼이 없는 헤더
  children: JSX.Element[] | JSX.Element;
  search?: boolean
  modalStore?: ModalStore
  tokenStore?: TokenStore
}

@inject(store.MODAL_STORE, store.TOKEN_STORE)
@observer
export class Layout extends React.Component<LayoutProps> {
  @observable searchText: string = ""
  render() {
    return (
      <View style={styles.container}>
        {this.props.header ? (
          this.props.modalStore!.visible[modal.SEARCH] ? (
            <View style={styles.searchBarContainer}>
              <Searchbar
                placeholder="어떤 토큰을 찾으시나요?"
                onChangeText={(searchText) => this.searchToken(searchText)}
                value={this.searchText}
                style={styles.searchBar}
              />
              <TouchableRipple style={styles.searchBarRight} onPress={this.clickCancle}>
                <Text style={styles.searchRightFont}>취소</Text>
              </TouchableRipple>
            </View>) : (
            <UserHeader 
              title={this.props.headerTitle} 
              navigation={this.props.headerNavigation} 
              search={this.props.search}
            />
          )
        ) :
        null }
        <View style={styles.userBody}>
          {this.props.children}
        </View>
      </View>
    );
  }
  
  private clickCancle = () => {
    this.searchText = ''
    this.searchToken(this.searchText)
    this.props.modalStore!.hideModal(modal.SEARCH)
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
            