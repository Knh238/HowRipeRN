import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Alert
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Icon, Button, Avatar } from 'react-native-elements';

import firebase from '../../.././firebase';
import db from '../../.././db';

export default class UserDetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: null, userName: '' };
    // this.submitInfo = this.submitInfo.bind(this);
  }
  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });
    console.log('this is state in home screen', this.currentUser);
  }

  render() {
    StatusBar.setBarStyle('light-content', true);
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#6e3737' }}>
        <View style={{ flex: 1 }}>
          <Text> user details go here </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6e3737'
  },
  subscreen: {
    height: '40%',
    backgroundColor: '#6e3737'
  }
});
