import React from "react";
import { View } from "react-native";
import { route } from "../../constants/route";
import {
  Button,
  Text,
  Dialog,
  Portal,
  Paragraph,
  Title,
  TextInput
} from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";
import styles from "./Styles";
import { observer } from "mobx-react/native";
import { observable } from "mobx";
import { AsyncStorageUtils } from "./asyncStorageUtils";

@observer
export class BackUpMnemonicScreen extends React.Component<
  NavigationScreenProps
> {
  @observable static visible: boolean = true;
  @observable static myMnemonic: string = "";

  render() {
    return (
      <View style={styles.container}>
        <Portal>
          <Dialog
            visible={BackUpMnemonicScreen.visible}
            onDismiss={this.hideDialog}
          >
            <Dialog.Title>Mnemonic Backup</Dialog.Title>
            <Dialog.Content>
              <Paragraph>
                Before using wallet, please backup your mnemonic
              </Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={this.hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
        <Title>Mnemonic Backup</Title>
        <Text>Please backup your Mnemonic before using the wallet</Text>
        <TextInput
          style={styles.mnemonicContainer}
          mode={"outlined"}
          multiline={true}
          value={BackUpMnemonicScreen.myMnemonic}
        />
        <Button
          style={styles.createButton}
          mode="contained"
          onPress={this.navigateToNextPage}
        >
          Done
        </Button>
      </View>
    );
  }

  hideDialog = () => {
    AsyncStorageUtils.storeMnemonic();
    this.visible = false;
  };

  navigateToNextPage = () => {
    this.props.navigation.navigate(route.SPLASH_SCREEN);
  };
}
