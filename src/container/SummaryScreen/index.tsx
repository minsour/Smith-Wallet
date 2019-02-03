import React from "react";
import { View, Text } from "react-native";
import { TouchableRipple } from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";
import { Layout } from '../../layout/Layout';
import { styles } from "./Styles";
import { TokenListScreen } from '../TokenListScreen';
import { EOAListScreen } from '../EOAListScreen';

export class SummaryScreen extends React.Component<NavigationScreenProps> {
  state = {
    token: true
  }

  renderToken = () => this.setState({ token: true })
  renderEOA = () => this.setState({ token: false })

  render() {
    return (
      <Layout header={false}>
        <View style={styles.summary}>
        </View>
        <View style={styles.list}>
          <View style={styles.listTab}>
            <TouchableRipple
              style={styles.tabButton}
              onPress={this.renderToken}
            >
              <Text style={this.state.token ? styles.selectedFont : styles.unselectedFont}>
              토 큰
              </Text>
            </TouchableRipple>
            <TouchableRipple
              style={styles.tabButton}
              onPress={this.renderEOA}
            >
              <Text style={this.state.token ? styles.unselectedFont : styles.selectedFont}>
              계 좌
              </Text>
            </TouchableRipple>
          </View>
          <View style={styles.listBody}>
            { this.state.token ?
              <TokenListScreen navigation={this.props.navigation} /> :
              <EOAListScreen navigation={this.props.navigation} />
            }
          </View>
        </View>
      </Layout>
    );
  }
}
