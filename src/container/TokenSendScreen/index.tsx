import React from 'react';
import { View } from 'react-native';
import { Text, Button, TextInput, Switch } from 'react-native-paper';
import { NavigationScreenProps } from 'react-navigation';
import { Layout } from '../../layout/Layout';
import { styles } from './Styles';

export class TokenSendScreen extends React.Component<NavigationScreenProps> {
  state = {
    //나중에 state 삭제해야함...
    amount: '',
    account: '',
    isSwitchOn: false,
  };

  render() {
    const { isSwitchOn } = this.state; //나중에 state 삭제해야함...
    return (
      <Layout
        header={true}
        headerTitle="출 금"
        headerNavigation={this.props.navigation}
      >
        <View style={styles.textInputContainer}>
          <View>
            <Text style={styles.summaryFont}>Amount</Text>
            <TextInput
              style={styles.textInput}
              label="Amount"
              value={this.state.amount}
              onChangeText={amount => this.setState({ amount })} //나중에 state 삭제해야함...
            />
          </View>
          <View>
            <Text style={styles.summaryFont}>Account</Text>
            <TextInput
              style={styles.textInput}
              label="Account"
              value={this.state.account}
              onChangeText={account => this.setState({ account })} //나중에 state 삭제해야함...
            />
          </View>
        </View>
        <View style={styles.switchContainer}>
          <View style={styles.switchLeftContainer}>
            <Text style={styles.summaryFont}>Send Fast</Text>
          </View>
          <View style={styles.switchRightContainer}>
            <Switch
              style={styles.feeSwitch}
              value={isSwitchOn}
              onValueChange={() => {
                this.setState({ isSwitchOn: !isSwitchOn }); //나중에 state 삭제해야함...
              }}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button style={styles.bottomButton} mode="contained">
            Send
          </Button>
        </View>
      </Layout>
    );
  }
}
