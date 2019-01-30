import React from "react";
import { View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { UserHeaderLeft } from "./UserHeaderLeft";
import { UserHeaderTitle } from "./UserHeaderTitle";
import { UserHeaderRight } from "./UserHeaderRight";
import styles from "./Styles";

interface UserHeaderProps {
    title?: string;
    navigation?: NavigationScreenProp<any,any>;
  }

export class UserHeader extends React.Component<UserHeaderProps> {
  render() {
    return (
        <View style={styles.userHeader}>
            <UserHeaderLeft navigation={this.props.navigation} />
            <UserHeaderTitle>{this.props.title} </UserHeaderTitle>
            <UserHeaderRight />
        </View>
    );
  }
}