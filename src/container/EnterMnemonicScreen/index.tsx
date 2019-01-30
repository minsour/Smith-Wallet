import React from "react";
import { View } from "react-native";
import { route } from "../../constants/route";
import { Button, Text, Title, TextInput } from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";
import styles from "./Styles";
import { AsyncStorageUtils } from "../../utils/asyncStorageUtils";
import { observer } from "mobx-react/native";
import { observable } from "mobx";
import { UserHeader } from "../../components/UserHeader";
import UserStyle from "../../components/UserHeader/Styles";

@observer
export class EnterMnemonicScreen extends React.Component<
  NavigationScreenProps
> {
  @observable myMnemonic: string = "";

  render() {
    return (
      <View style={styles.container}>
        <UserHeader title="니모닉 입력" />
        <View style={UserStyle.userBody}>
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
      </View>
    );
  }

  private enteredMnemonic = (newMnemonic: string) => {
    this.myMnemonic = newMnemonic;
  };

  private navigateToNextPage = () => {
    this.props.navigation.navigate(route.SUMMARY_SCREEN);
  };
}
