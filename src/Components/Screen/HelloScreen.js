import React from "react";
import {
  View,
  Keyboard,
  Button,
  TouchableWithoutFeedback,
  TextInput,
  Text
} from "react-native";

class HelloScreen extends React.Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{ flex: 1 }}>
          <View style={{ height: "40%" }}>
            <Text>{"Press another area call Keyboard.dismiss(), then press Back hardware Android"}</Text>
            <TextInput placeholder={"Test"} autoFocus />
          </View>
          <Button
            onPress={() => this.props.navigation.goBack(null)}
            title={"Back"}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default HelloScreen;
