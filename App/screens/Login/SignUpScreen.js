import React, { Component } from 'react';
import {
  Card,
  Button,
  FormLabel,
  FormInput,
  Icon,
  Avatar
} from 'react-native-elements';
import { View, Keyboard } from 'react-native';
import firebase from 'HowRipeMobile/firebase';
import { LoginButton } from 'react-native-fbsdk';

export default class SignUpScreen extends Component {
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
  constructor() {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(nav) {
    const email = this.state.email.toLowerCase();
    const pass = this.state.pass;
    const displayName = this.state.name;
    if (email && pass) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, pass)
        .catch(function(error) {
          console.error(error);
        });
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          const uid = user.uid;
          firebase
            .database()
            .ref('users/' + uid)
            .set({
              displayName,
              email
            });
        }
      });
    }
    this.setState = { email: '', pass: '' };
    Keyboard.dismiss();
    nav.navigate('Login');
  }

  render() {
    const nav = this.props.navigation;
    return (
      <View
        style={{
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center'
        }}
      >
        {/* <Card
          title="Sign up as a new user"
          style={{ justifyContent: 'center', alignContent: 'center' }}
        >
          <FormLabel>Name</FormLabel>
          <FormInput
            onChangeText={name => this.setState({ name })}
            inputStyle={{ width: undefined }}
          />

          <FormLabel>E-mail</FormLabel>
          <FormInput onChangeText={email => this.setState({ email })} />

          <FormLabel>Password</FormLabel>
          <FormInput
            onChangeText={pass => this.setState({ pass })}
            inputStyle={{ width: undefined }}
            secureTextEntry
          /> */}
        <LoginButton
          publishPermissions={['email']}
          onLoginFinished={(error, result) => {
            if (error) {
              alert('Login failed with error: ' + error.message);
            } else if (result.isCancelled) {
              alert('Login was cancelled');
            } else {
              alert(
                'Login was successful with permissions: ' +
                  result.grantedPermissions
              );
            }
          }}
          onLogoutFinished={() => alert('User logged out')}
        />

        {/* <Button
            title="SIGN UP"
            buttonStyle={{
              width: '100%',
              height: 45,
              borderRadius: 5,
              marginTop: 10
            }}
            onPress={() => this.handleSubmit(nav)}
          />
          <Button
            title="BACK TO LOGIN"
            buttonStyle={{
              width: '100%',
              height: 45,
              borderRadius: 5,
              marginTop: 10
            }}
            onPress={() => nav.navigate('Login')}
          /> */}
        {/* </Card> */}
      </View>
    );
  }
}
