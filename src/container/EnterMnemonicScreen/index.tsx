import React from "react";
import { View } from "react-native";
import { route } from "../../constants/route";
import { Button, Text, Title, TextInput } from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";
import styles from "./Styles";
import AsyncStorageUtils from "../BackUpMnemonicScreen/asyncStorageUtils";
import { observer } from "mobx-react/native";
import { observable } from "mobx";

@observer
export default class EnterMnemonicScreen extends React.Component<
  NavigationScreenProps
> {
  @observable myMnemonic: string = "";

  render() {
    return (
      <View style={styles.container}>
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
      </View>
    );
  }

  enteredMnemonic = (newMnemonic: string) => {
    this.myMnemonic = newMnemonic;
  };

  navigateToNextPage = () => {
    this.props.navigation.navigate(route.SUMMARY_SCREEN);
  };
}
