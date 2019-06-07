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
export default class SettingsScreen extends React.Component {
  // static navigationOptions = {
  //   header: null
  // };
  state = { email: '', password: '', errorMessage: null };
  render() {
    return (
      <View style={styles.container}>
        {/* <Text>Login</Text> */}
        {/* {this.state.errorMessage && (
          <Text style={{ color: 'red' }}>{this.state.errorMessage}</Text>
        )} */}
        {/* <TextInput
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
        /> */}
        <Text
          style={{
            color: 'white',
            fontFamily: 'avenir',
            alignSelf: 'center',
            fontSize: 28
          }}
        >
          Watch Trailers
        </Text>
        <Text
          style={{
            color: 'white',
            fontFamily: 'avenir',
            alignSelf: 'center',
            fontSize: 20
          }}
        >
          image here later
        </Text>
        <View
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >
          <TouchableOpacity
            style={{
              height: 16,
              width: 16,
              borderRadius: 8,
              backgroundColor: '#942328',
              marginRight: '7%'
            }}
          />
          <TouchableOpacity
            style={{
              height: 16,
              width: 16,
              borderRadius: 8,
              backgroundColor: '#8a6c6c',
              marginRight: '7%'
            }}
          />

          <TouchableOpacity
            style={{
              height: 16,
              width: 16,
              borderRadius: 8,
              backgroundColor: '#8a6c6c'
            }}
          />
        </View>
        <TouchableOpacity
          style={{
            height: '5%',
            width: '60%',
            alignContent: 'center',
            alignSelf: 'center',

            justifyContent: 'center'
          }}
          onPress={this.handleLogin}
        >
          <LinearGradient
            colors={['#633836', '#5b2d2d', '#402423']}
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
                fontSize: 20
              }}
            >
              Login
            </Text>
          </LinearGradient>
        </TouchableOpacity>
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
                fontSize: 20
              }}
            >
              {' '}
              Sign Up{' '}
            </Text>
          </LinearGradient>
        </TouchableOpacity>

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
              borderRadius: 5,
              justifyContent: 'center'
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

        <Button
          title="go to fake sign up screen"
          // onPress={() => this.props.navigation.navigate('Signup')}
          onPress={() => this.props.navigation.navigate('fakeSignUp')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3c1715'
  },
  subscreen: {
    height: '40%',
    backgroundColor: '#6e3737'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
});
