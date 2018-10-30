import React from "react";
import { View, StyleSheet, Button } from "react-native";

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Button
                    onPress={() => this.props.navigation.navigate("Hello")}
                    title={"NextNavigation"}
                />
            </View>
        );
    }
}

export default HomeScreen;