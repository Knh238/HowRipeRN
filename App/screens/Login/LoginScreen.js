import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  StatusBar
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Icon, Button, Avatar, Input } from 'react-native-elements';

import { Card, Text, CardItem, Left, Right, Body } from 'native-base';
import firebase from 'HowRipeMobile/firebase';

export default class LoginScreen extends React.Component {
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
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      modalOpen: false,
      errorMessage: null,
      initialized: false,
      inviteCode: ''
    };
    // this.closeModal = this.closeModal.bind(this);
    this.submitInput = this.submitInput.bind(this);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user != null) {
        doesUserExist(user).then(exists => {
          if (exists) {
            store.dispatch(logUserIn(user));
          } else {
            this.setState({
              ...this.state,
              initialized: true,
              errorMessage: null
            });
            this.props.navigation.navigate('InviteCodePage');
          }
        });
      } else {
        this.setState({ ...this.state, initialized: true });
      }
    });
  }
  async submitInput() {
    const inviteRef = db.collection('codes').doc(this.state.inviteCode);
    const user = firebase.auth().currentUser;
    const dbCode = inviteRef.get();

    if (dbCode.exists) {
      await inviteRef.update({
        usersUsed: firebase.firestore.FieldValue.arrayUnion(user.uid)
      });
      this.setState({ ...this.state, modalOpen: false });
      store.dispatch(createUser(user));
    } else {
      this.setState({
        ...this.state,
        errorMessage: 'Wrong invite code. Please try again.'
      });
    }
  }

  render() {
    StatusBar.setBarStyle('light-content', true);
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: '#6e3737' }}>
          <Text
            style={{
              color: 'white',
              fontSize: 35,
              fontFamily: 'avenir',
              fontWeight: 'bold',
              alignSelf: 'center'
            }}
          >
            Login
          </Text>
          <Input
            inputStyle={{
              width: 80,
              fontSize: 20,
              fontWeight: 'bold',
              color: '#910f1f'
            }}
            label="email"
            inputContainerStyle={{
              width: 90,
              marginTop: 20,
              alignSelf: 'center',
              borderColor: '#910f1f',
              borderWidth: 1,
              backgroundColor: 'white'
            }}
          />
          <Input
            inputStyle={{
              width: 80,
              fontSize: 20,
              fontWeight: 'bold',
              color: '#910f1f'
            }}
            inputContainerStyle={{
              width: 90,
              marginTop: 20,
              alignSelf: 'center',
              borderColor: '#910f1f',
              borderWidth: 1,
              backgroundColor: 'white'
            }}
          />

          <Button
            buttonStyle={{
              backgroundColor: '#910f1f',
              alignSelf: 'center',
              marginTop: 10,
              width: 120,
              borderRadius: 5
            }}
            title="Sign in with Facebook"
            titleStyle={{ fontFamily: 'avenir', fontWeight: 'bold' }}
            onPress={() => this.props.navigation.navigate('Home')}
            // onPress={() => this.facebookLogin()}
            leftIcon={
              <Icon
                name="facebook-with-circle"
                type="Entypo"
                style={{ color: 'white', fontSize: 30 }}
              />
            }
          />
          <Button
            buttonStyle={{
              backgroundColor: '#910f1f',
              alignSelf: 'center',
              marginTop: 10,
              width: 120,
              borderRadius: 5
            }}
            title="Login"
            titleStyle={{ fontFamily: 'avenir', fontWeight: 'bold' }}
            onPress={() => this.props.navigation.navigate('Home')}
          />

          <Button
            buttonStyle={{
              backgroundColor: '#910f1f',
              alignSelf: 'center',
              marginTop: 10,
              width: 120,
              borderRadius: 5
            }}
            title="Sign up"
            titleStyle={{ fontFamily: 'avenir', fontWeight: 'bold' }}
            onPress={() => this.props.navigation.navigate('Home')}
          />
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
