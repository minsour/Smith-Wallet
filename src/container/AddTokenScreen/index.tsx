import React from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";
import styles from "./Styles";
import { UserHeader } from "../../components/UserHeader";
import UserStyle from "../../components/UserHeader/Styles";

export class AddTokenScreen extends React.Component<NavigationScreenProps> {
  render() {
    return (
      <View style={styles.container}>
        <UserHeader title="토큰 추가" leftMode="back" navigationProps={this.props.navigation}/>
        <View style={UserStyle.userBody}>
            <Text>
            토큰 추가 스크린
            </Text>
        </View>
      </View>
    );
  }
}
