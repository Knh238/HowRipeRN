import React, { Component } from 'react';
import {
  Alert,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Icon, Button, Avatar } from 'react-native-elements';
import LeaderBoard from './LeaderBoard';
import CurrentVideos from './CurrentVideos';
import createUser from '../../Store/actions/login';
import { connect } from 'react-redux';
import firebase from '../../.././firebase';
import db from '../../.././db';

function testDB() {
  firebase.auth().onAuthStateChanged(user => {
    if (user != null) {
      Alert.alert('this is state in home screen', user.uid);
      db.collection('users')
        .add({
          first: user.uid,
          last: user.email,
          born: 1815
        })
        .then(function(docRef) {
          console.log('Document written with ID: ', docRef.id);
        })
        .catch(function(error) {
          console.error('Error adding document: ', error);
        });
    }
  });
 }

 testDB();

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  this.state = {
   currentUser: null
  }
  }

  componentDidMount() {
    // const currentUser = firebase.auth().currentUser
    const user = {
      name: 'Abby',
      email: 'abby@abby.com'
    }
    this.setState({ user })

      // this.props.createUser(user)
      // db.collection('users')
      // .add({
      //   first: 'gfdfgsdfgdsfd',
      //   last: '456fdgdgfd',
      //   born: 1815
      // })
      // .then(function(docRef) {
      //   console.log('Document written with ID: ', docRef.id);
      // })


}

  static navigationOptions = ({ navigation }) => {

    return {
      title: 'How Ripe',
      headerStyle: {
        backgroundColor: '#6e3737',
        borderBottomWidth: 0
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Avenir',
        fontWeight: 'bold'
      },
      headerLeft: (
        <Button
          type="clear"
          onPress={() => navigation.goBack()}
          icon={<Icon name="menu" type="material" color="white" size={30} />}
        />
      ),
      headerRight: (
        <Avatar
          size="medium"
          source={{ uri: 'https://loremflickr.com/320/240' }}
          rounded
          title="MT"
          containerStyle={{ flex: 2, marginRight: 5, marginTop: 12 }}
          onPress={() => console.log('Works!')}
          activeOpacity={0.7}
        />
      )
    };
  };

  render() {
    StatusBar.setBarStyle('light-content', true);
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <CurrentVideos />
        </View>
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = (dispatch, user) => {
  return {
    createUser: () => {
      dispatch(createUser(user));
  }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(HomeScreen);

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
