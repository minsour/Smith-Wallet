import React from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";
import styles from "./Styles";
import { UserHeader } from "../../components/UserHeader";
import UserStyle from "../../components/UserHeader/Styles";


export default class AuthorizePinCodeScreen extends React.Component<NavigationScreenProps> {
  render() {
    return (
      <View style={styles.container}>
        <UserHeader title="비밀번호 입력" leftMode="close" navigationProps={this.props.navigation}/>
        <View style={UserStyle.userBody}>
          <Text>This is Authorize PinCode Screen</Text>
          <Button
            icon="add-a-photo"
            mode="contained"
            onPress={this.navigateToDestination}
          >
            핀코드 입력 완료
          </Button>
        </View>
      </View>
    );
  }

  navigateToDestination = () => {
    // 핀코드 입력 후에는 params로 받아온 목적지로 이동
    this.props.navigation.navigate(this.props.navigation.getParam("destination"));
  };
}
