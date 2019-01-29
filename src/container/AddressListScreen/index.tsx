import React from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";
import styles from "./Styles";
import { route } from "../../constants/route";
import { UserHeader } from "../../components/UserHeader/index";
import { UserHeaderLeft } from '../../components/UserHeader/UserHeaderLeft';
import { UserHeaderTitle } from '../../components/UserHeader/UserHeaderTitle';
import { UserHeaderRight } from '../../components/UserHeader/UserHeaderRight';
import UserStyle from "../../components/UserHeader/Styles";

export class AddressListScreen extends React.Component<NavigationScreenProps> {
  render() {
    return (
      <View style={styles.container}>
        <UserHeader>
            <UserHeaderLeft navigation={this.props.navigation}>back</UserHeaderLeft>
            <UserHeaderTitle>친구 목록</UserHeaderTitle>
            <UserHeaderRight />
        </UserHeader>
        
        <View style={UserStyle.userBody}>
            <Text>
            주소록 스크린
            </Text>
            <Button
            style={styles.Button}
            mode="contained"
            onPress={this.navigateToAuthorizePin} // 테스트용
            >
            친구 추가
            </Button>
        </View>
      </View>
    );
  }

  navigateToAuthorizePin = () => {
    this.props.navigation.navigate(route.AUTHORIZE_PINCODE_SCREEN, {
      destination: route.INITIAL_SCREEN
    })
  }
}
