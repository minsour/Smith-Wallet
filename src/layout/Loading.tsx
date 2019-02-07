import * as React from "react";
import { View, Text } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { styles } from "./Styles";

interface LoadingProps {
    children: string
}

export class Loading extends React.Component<LoadingProps> {
    render() {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator animating={true} size="large" color="#39369C" />
                <Text style={styles.description}>
                    {this.props.children}
                </Text>
            </View>
        );
    }
}
