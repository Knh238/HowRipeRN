/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
// import AppNavigator from './App/navigation/AppNavigator';
import AppNavigator from './App/navigation/AppNavigator';
import store from './App/Store'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink'
  },
  app: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
