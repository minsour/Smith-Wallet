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
    children: JSX.Element[];
  }

export class UserHeader extends React.Component<UserHeaderProps> {
  render() {
    return (
        <View>
            <View style={styles.userHeader}>
                <UserHeaderLeft>{this.props.navigation}</UserHeaderLeft>
                <UserHeaderTitle>{this.props.title}</UserHeaderTitle>
                <UserHeaderRight />
            </View>
            <View style={styles.userBody}>
                {this.props.children}
            </View>
        </View>
    );
  }
}