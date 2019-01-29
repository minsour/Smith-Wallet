import React from "react";
import { View } from "react-native";
import styles from "./Styles";

export class UserHeader extends React.Component {
  render() {
    return (
        <View style={styles.userHeader}>
            {this.props.children}
        </View>
    );
  }
}