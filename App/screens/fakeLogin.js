import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export default class fakeSignUp extends React.Component {
  state = { email: '', password: '', errorMessage: null };
  render() {
    return (
      <View style={styles.container}>
        {/* {this.state.errorMessage && (
          <Text style={{ color: 'red' }}>{this.state.errorMessage}</Text>
        )} */}
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
              paddingLeft: 5,
              fontSize: 20,
              alignSelf: 'center'
            }}
          >
            Sign up{' '}
          </Text>
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
              Sign Up
            </Text>
          </LinearGradient>
        </TouchableOpacity>{' '}
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
            colors={['#405993', '#405993']}
            style={{
              flex: 1,
              flexDirection: 'row',
              borderRadius: 10
            }}
          >
            <Text
              style={{
                color: 'white',
                fontFamily: 'avenir',
                paddingLeft: 5,
                fontSize: 15,
                alignSelf: 'center'
              }}
            >
              Login with Facebook
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
