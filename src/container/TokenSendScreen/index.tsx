import React from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";
import styles from "./Styles";
import { UserHeader } from "../../components/UserHeader";
import UserStyle from "../../components/UserHeader/Styles";

export class TokenSendScreen extends React.Component<NavigationScreenProps> {
  render() {
    return (
      <View style={styles.container}>
        <UserHeader title="토큰 전송" leftMode="back" navigationProps={this.props.navigation}/>
        <View style={UserStyle.userBody}>
            <Text>
            Send 스크린
            </Text>
        </View>
      </View>
    );
  }
}
