import React from "react";
import { View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { Text, IconButton } from "react-native-paper";
import styles from "./Styles";

interface UserHeaderLeftProps {
    children?: NavigationScreenProp<any, any>;
}

export class UserHeaderLeft extends React.Component<UserHeaderLeftProps> {
  
  headerLeft() {
    const leftButton = () => this.props.children!.pop()
    
    // UserHeader에 navigation을 넘겨줬으면 버튼 표시
    if(this.props.children) {
        return (
            <IconButton
            icon="arrow-back"
            size={20}
            onPress={leftButton}
            />
        );
    }
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