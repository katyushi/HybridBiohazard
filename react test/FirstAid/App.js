import React, { Component } from 'react';
import { 
  Text,
  View,
  Button,
  Alert
 } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, world!</Text>
        <Button 
          title="press me"
          color="#D69A6B"
          onPress={() =>Alert.alert('send help please')}/>
      </View>
    );
  }
}
