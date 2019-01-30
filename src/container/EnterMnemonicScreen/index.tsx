import React from "react";
import { route } from "../../constants/route";
import { Button, Text, Title, TextInput } from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";
import styles from "./Styles";
import { AsyncStorageUtils } from "../../utils/asyncStorageUtils";
import { observer } from "mobx-react/native";
import { observable } from "mobx";
import { Layout } from '../../layout/Layout';

@observer
export class EnterMnemonicScreen extends React.Component<
  NavigationScreenProps
> {
  @observable myMnemonic: string = "";

  render() {
    return (
      <Layout header={true} headerTitle="Mnemonic 입력">
        <Title>Mnemonic Recovery</Title>
        <Text>Please enter ther correct Mnemonic of your wallet</Text>
        <TextInput
          style={styles.mnemonicContainer}
          mode={"outlined"}
          multiline={true}
          onChangeText={newMnemonic => this.enteredMnemonic(newMnemonic)}
        />
        <Button
          style={styles.createButton}
          mode="contained"
          onPress={() => {
            AsyncStorageUtils.storeMnemonic(this.myMnemonic);
            this.navigateToNextPage();
          }}
        >
          Recover Wallet
        </Button>
      </Layout>
    );
  }

  private enteredMnemonic = (newMnemonic: string) => {
    this.myMnemonic = newMnemonic;
  };

  private navigateToNextPage = () => {
    this.props.navigation.navigate(route.SUMMARY_SCREEN);
  };
}
