import React from "react";
import { View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { Text, IconButton } from "react-native-paper";
import styles from "./Styles";

interface UserHeaderLeftProps {
    navigation: NavigationScreenProp<any, any>;
}

export class UserHeaderLeft extends React.Component<UserHeaderLeftProps> {
  
  headerLeft = () => {
    const leftButton = () => this.props.navigation.pop()
    
    if(this.props.children == "back") {
    // leftMode가 "back"이면 화살표 버튼 표시
      return (
        <IconButton
          icon="arrow-back"
          size={20}
          onPress={leftButton}
        />
      );
    }
    else if(this.props.children == "close") {
    // "close"면 X버튼 표시
      return (
        <IconButton
          icon="close"
          size={20}
          onPress={leftButton}
        />
      );
    }
    // 디폴트 및 그 외에는 표시 안함
    return ;
  }

  render() {
    return (
        <View style={styles.userHeaderLeft}>
            {this.headerLeft()}
        </View>
    );
  }
}