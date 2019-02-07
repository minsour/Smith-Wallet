import React from "react";
import { Text, Button } from "react-native-paper";
import { NavigationScreenProp } from "react-navigation";
import { styles } from "./Styles";
import { route } from "../../constants/route";
import { Layout } from '../../layout/Layout';

interface EOAListScreenProps {
    navigation: NavigationScreenProp<any,any>
}

export class EOAListScreen extends React.Component<EOAListScreenProps> {
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

  private navigateToSplash = () => {
    this.props.navigation.navigate(route.SPLASH_SCREEN)
  }
}
