import * as React from "react";
import { Text } from "react-native-paper";
import { styles } from "./Styles";
import { View } from 'react-native';

interface BalanceTokenProps {
  name: string
  symbol: string
  balance: number
}

export class BalanceToken extends React.Component<BalanceTokenProps> {
  render() {
    return (
      <View>
        <Text style={styles.nameFont}>
          {this.props.name}
        </Text>
        <Text style={styles.balance}>
          {this.props.balance} {this.props.symbol}
        </Text>
      </View>
    );
  }
}
