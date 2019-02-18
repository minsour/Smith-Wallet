import * as React from "react";
import { Text } from "react-native-paper";
import { styles } from "./Styles";
import { View } from 'react-native';

interface NotBalanceTokenProps {
  name: string
  symbol: string
  address: string
}

export class NotBalanceToken extends React.Component<NotBalanceTokenProps> {
  render() {
    return (
        <View>
            <View style={styles.title}>
                <Text style={styles.nameFont}>
                    {this.props.name}
                </Text>
                <Text style={styles.symbolFont}>
                    {this.props.symbol}
                </Text>
            </View>
            <View>
                <Text style={styles.addressFont}>
                    {this.props.address}
                </Text>
            </View>
        </View>
    );
  }
}
