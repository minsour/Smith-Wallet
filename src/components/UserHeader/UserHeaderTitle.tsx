import React from "react";
import { View, Text } from "react-native";
import { styles } from "./Styles";

export class UserHeaderTitle extends React.Component {

  render() {
    return (
        <View style={styles.userHeaderTitle}>
            <Text style={styles.titleFont}>
                {this.props.children}
            </Text>
        </View>
    );
  }
}