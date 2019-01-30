import React from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";
import styles from "./Styles";
import { UserHeader } from "../../components/UserHeader";
import UserStyle from "../../components/UserHeader/Styles";

export class BackUpQRScreen extends React.Component<NavigationScreenProps> {
  render() {
    return (
      <View style={styles.container}>
        <UserHeader title="내 QR 코드" leftMode="back" navigationProps={this.props.navigation}/>
        <View style={UserStyle.userBody}>
            <Text>
                QR 코드 백업 스크린
            </Text>
        </View>
      </View>
    );
  }
}
