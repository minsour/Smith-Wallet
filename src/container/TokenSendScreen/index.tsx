import React from 'react';
import { View } from 'react-native';
import { Text, Button, TextInput, Switch } from 'react-native-paper';
import { NavigationScreenProps } from 'react-navigation';
import { Layout } from '../../layout/Layout';
import { styles } from './Styles';

export class TokenSendScreen extends React.Component<NavigationScreenProps> {
  state = {
    amount: '',
    account: '',
    isSwitchOn: false,
  };
  render() {
    const { isSwitchOn } = this.state;
    return (
      <Layout
        header={true}
        headerTitle="출 금"
        headerNavigation={this.props.navigation}
      >
        <View style={styles.textInputContainer}>
          <View>
            <TextInput
              style={styles.textInput}
              label="Amount"
              value={this.state.amount}
              onChangeText={amount => this.setState({ amount })}
            />
          </View>
          <View>
            <TextInput
              style={styles.textInput}
              label="Account"
              value={this.state.account}
              onChangeText={account => this.setState({ account })}
            />
          </View>
        </View>
        <View style={styles.container}>
          <Switch
            value={isSwitchOn}
            onValueChange={() => {
              this.setState({ isSwitchOn: !isSwitchOn });
            }}
          />
        </View>
      </Layout>

      // </Layout>
    );
  }
}
