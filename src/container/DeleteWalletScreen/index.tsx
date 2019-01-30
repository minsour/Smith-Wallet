import React from "react";
import { Text, Button } from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";
import { styles } from "./Styles";
import { route } from "../../constants/route";
import { Layout } from '../../layout/Layout';

export class DeleteWalletScreen extends React.Component<NavigationScreenProps> {
  render() {
    return (
      <Layout header={true} headerTitle="지갑 삭제" headerNavigation={this.props.navigation}>
        <Text>
        지갑 삭제 스크린
        </Text>
        <Button
        style={styles.Button}
        mode="contained"
        onPress={this.navigateToSplash} // 테스트용
        >
        지갑 삭제
        </Button>
    </Layout>
    );
  }

  private navigateToSplash = () => {
    this.props.navigation.navigate(route.SPLASH_SCREEN)
  }
}
