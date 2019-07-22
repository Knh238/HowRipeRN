import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  Alert,
  ImageBackground
} from 'react-native';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';

import firebase from '../../../firebase';
import db from '../../.././db';

export default class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', errorMessage: '' };
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleSignUp() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(this.createUser());
  }
  createUser() {
    const self = this;
    firebase.auth().onAuthStateChanged(user => {
      if (user != null) {
        const currTime = Date.now();
        const currentTime = moment(currTime).format('MMMM Do YYYY, h:mm:ss a');
        const newUser = {
          uid: user.uid,
          email: user.email,
          icon: 'red',
          lastLoginAt: currentTime,
          userName: '',
          displayName: ''
        };
        db.collection('users')
          .doc(user.uid)
          .set(newUser)
          .then(function(docRef) {
            self.props.navigation.navigate('Home');
          })
          .catch(function(error) {
            self.setState({ errorMessage: error.message });
          });
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('HowRipeMobile/imageAssets/SplatterBackground.png')}
          style={{
            width: '100%',
            height: '100%'
          }}
          overflow="hidden"
          resizeMode="contain"
        >
          <View style={{ flex: 1, marginTop: 180 }}>
            <LinearGradient
              colors={['#633836', '#5b2d2d', '#402423']}
              style={{
                height: '30%',
                marginTop: '20%',
                width: '85%',
                borderRadius: 5,
                justifyContent: 'center',
                alignSelf: 'center',
                alignContent: 'center'
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Avenir',
                  fontWeight: 'bold',
                  marginLeft: 15,
                  fontSize: 20
                }}
              >
                Sign up
              </Text>
              {this.state.errorMessage ? (
                <Text style={{ color: 'red' }}>{this.state.errorMessage}</Text>
              ) : null}
              <TextInput
                style={styles.textInput}
                autoCapitalize="none"
                placeholder="  Email"
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
              />
              <TextInput
                secureTextEntry
                style={styles.textInput}
                autoCapitalize="none"
                placeholder="  Password"
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
              />
            </LinearGradient>
          </View>

          <TouchableOpacity
            style={{
              height: '5%',
              width: '60%',
              alignContent: 'center',
              alignSelf: 'center',
              marginTop: 500,
              position: 'absolute',
              justifyContent: 'center'
            }}
            onPress={this.handleSignUp}
          >
            <LinearGradient
              colors={['#A11123', '#761b1f', '#5d1419']}
              style={{
                flex: 1,
                flexDirection: 'row',
                borderRadius: 5,
                justifyContent: 'center'
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Avenir',
                  paddingLeft: 5,
                  fontSize: 18,
                  fontWeight: '500',
                  alignSelf: 'center'
                }}
              >
                Sign Up
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3c1715',
    alignContent: 'center'
  },
  subscreen: {
    height: '40%',
    backgroundColor: '#6e3737'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderRadius: 5,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    marginTop: 8
  }
});
