import React from "react";
import { View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { UserHeader } from "../components/UserHeader";
import styles from "./Styles";

interface LayoutProps {
    header: boolean  // 없으면, 헤더가 없는 레이아웃
    headerTitle?: string;  // 없으면, 타이틀이 없는 헤더
    headerNavigation?: NavigationScreenProp<any,any>;  // 없으면, 뒤로가기 버튼이 없는 헤더
    children: JSX.Element[];
  }

export class Layout extends React.Component<LayoutProps> {
  render() {
    return (
        <View style={styles.container}>
            { this.props.header ? 
            <UserHeader 
                title={this.props.headerTitle} 
                navigation={this.props.headerNavigation} 
            /> :
            null }
            <View style={styles.userBody}>
                {this.props.children}
            </View>
        </View>
    );
  }
}
            