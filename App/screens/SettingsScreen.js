import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json'
  };

  render() {
    return (
      <View style={{ backgroundColor: 'purple' }}>
        <Text style={{ color: 'white' }}> nothing yet </Text>
      </View>
    );
  }
}
