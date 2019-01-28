import React from "react";
import { View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { Text, IconButton } from "react-native-paper";
import styles from "./Styles";

interface UserHeaderProps {
  leftMode?: string;
  title: string;
  navigationProps?: NavigationScreenProp<any,any>;
  otherDestination?: string;
}

export class UserHeader extends React.Component<UserHeaderProps> {
  backButton = () => {
    if(this.props.otherDestination) {
    // otherDestination을 설정했으면 그 곳으로 이동
      this.props.navigationProps!.navigate(this.props.otherDestination)
    }
    else {
    // 설정하지 않았으면 pop()
      this.props.navigationProps!.pop()
    }
  }
  
  headerLeft = () => {
    if(this.props.leftMode == "back") {
    // leftMode가 "back"이면 화살표 버튼 표시
      return (
        <IconButton
          icon="arrow-back"
          size={20}
          onPress={this.backButton}
        />
      );
    }
    else if(this.props.leftMode == "close") {
    // "close"면 X버튼 표시
      return (
        <IconButton
          icon="close"
          size={20}
          onPress={this.backButton}
        />
      );
    }
    // 디폴트 및 그 외에는 표시 안함
    return ;
  }

  render() {
    return (
      <View style={styles.userHeader}>
        <View style={styles.userHeaderLeft}>
          {this.headerLeft()}
        </View>
        <View style={styles.userHeaderTitle}>
          <Text style={styles.titleFont}>
            {this.props.title}
          </Text>
        </View>
        <View style={styles.userHeaderRight}>
        </View>
      </View>
    );
  }
}