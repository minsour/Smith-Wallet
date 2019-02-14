import React from "react";
import { Text, TouchableRipple } from "react-native-paper";
import { NavigationScreenProp } from 'react-navigation';
import { View } from 'react-native';
import { styles } from './Styles'
import { route } from '../../constants/route';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react/native';
import { RootStore } from '../../stores';
import { modal } from '../../constants/modal';

interface AddSomethingScreenProps {
  navigation: NavigationScreenProp<any, any>
  rootStore: RootStore
}

@inject('rootStore')
@observer
export class AddSomethingScreen extends React.Component<AddSomethingScreenProps> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableRipple style={styles.content} onPress={this.navigateToAddToken}>
          <Text>
            토큰 추가하기
          </Text>
        </TouchableRipple>
        <TouchableRipple style={styles.content} onPress={this.navigateToAddEOA}>
          <Text>
            계좌 추가하기
          </Text>
        </TouchableRipple>
      </View>
    );
  }

  private navigateToAddToken = () => {
    const { modalStore } = this.props.rootStore
    modalStore.hideModal(modal.addModal)
    this.props.navigation.navigate(route.ADD_TOKEN)
  }
  private navigateToAddEOA = () => {
    const { modalStore } = this.props.rootStore
    modalStore.hideModal(modal.addModal)
    this.props.navigation.navigate(route.ADD_EOA)
  }
}
