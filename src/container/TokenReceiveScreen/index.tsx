import React from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";
import styles from "./Styles";
import { UserHeader } from "../../components/UserHeader";
import UserStyle from "../../components/UserHeader/Styles";

export class TokenReceiveScreen extends React.Component<NavigationScreenProps> {
  render() {
    return (
      <View style={styles.container}>
        <UserHeader title="내 주소" leftMode="back" navigationProps={this.props.navigation}/>
        <View style={UserStyle.userBody}>
          <Text>
          Receive 스크린
          </Text>
        </View>
      </View>
    );
  }
}
