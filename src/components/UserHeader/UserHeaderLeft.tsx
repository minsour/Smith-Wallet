import React from "react";
import { View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { IconButton } from "react-native-paper";
import styles from "./Styles";

interface UserHeaderLeftProps {
    navigation?: NavigationScreenProp<any, any>;
}

export class UserHeaderLeft extends React.Component<UserHeaderLeftProps> {
  
  headerLeft() {
    const leftButton = () => this.props.navigation!.pop()
    
    // UserHeader에 navigation을 넘겨줬으면 버튼 표시
    if(this.props.navigation) {
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