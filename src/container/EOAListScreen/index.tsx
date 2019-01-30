import React from "react";
import { Text, Button } from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";
import styles from "./Styles";
import { route } from "../../constants/route";
import { Layout } from '../../layout/Layout';

export class EOAListScreen extends React.Component<NavigationScreenProps> {
  render() {
    return (
      <Layout header={false}>
        <Text>
          EOA 리스트 스크린
        </Text>
        <Button
          style={styles.Button}
          mode="contained"
          onPress={this.navigateToSplash} // 테스트용
        >
          추가
        </Button>
      </Layout>
    );
  }

  navigateToSplash = () => {
    this.props.navigation.navigate(route.SPLASH_SCREEN)
  }
}
