import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import firebase from '../../../firebase';

export default class LoginScreen extends React.Component {
  state = { email: '', password: '', errorMessage: null };

  handleLogin = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Home'))
      .catch(error => this.setState({ errorMessage: error.message }));
  };
  render() {
    return (
      <View style={styles.container}>
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
              fontFamily: 'avenir',
              fontWeight: 'bold',
              marginLeft: 15,
              marginTop: 10,
              fontSize: 20
            }}
          >
            Login
          </Text>
          {this.state.errorMessage && (
            <Text style={{ color: 'red' }}>{this.state.errorMessage}</Text>
          )}
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Email"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <TextInput
            secureTextEntry
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Password"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
          <Text
            style={{
              color: '#886a6a',
              fontFamily: 'avenir',
              marginLeft: 15,
              // alignSelf: 'center',
              fontSize: 15,
              textDecorationLine: 'underline'
            }}
          >
            Forgot Password
          </Text>
        </LinearGradient>
        <TouchableOpacity
          style={{
            height: '5%',
            width: '60%',
            alignContent: 'center',
            alignSelf: 'center',
            marginTop: 30,
            justifyContent: 'center'
          }}
          onPress={this.handleLogin}
        >
          <LinearGradient
            colors={['#902227', '#761b1f', '#5d1419']}
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
                fontFamily: 'avenir',
                paddingLeft: 5,
                fontSize: 20,
                alignSelf: 'center'
              }}
            >
              Log in
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: '6%',
            width: '60%',
            alignContent: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: 30
          }}
          onPress={this.handleLogin}
        >
          <LinearGradient
            colors={['#405993', '#263558']}
            style={{
              flex: 1,
              flexDirection: 'row',
              borderRadius: 5,
              justifyContent: 'center'
            }}
          >
            <Icon
              style={{
                marginTop: 10
              }}
              name="facebook-official"
              type="font-awesome"
              color="white"
              size={25}
            />
            <Text
              style={{
                color: 'white',
                fontFamily: 'avenir',
                marginLeft: 15,
                fontSize: 15
              }}
            >
              Log In with Facebook
            </Text>
          </LinearGradient>
        </TouchableOpacity>
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
