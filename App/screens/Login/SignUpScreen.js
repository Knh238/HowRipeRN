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
import { connect } from 'react-redux';
import { createUser } from '../../Store/actions/login';
import firebase from '../../../firebase';

class SignUp extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: '',
      lastName: '',
      firstName: ''
    };
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleSignUp() {
    if (this.state.firstName === '') {
      Alert.alert('First Name is required');
      return;
    }
    if (this.state.lastName === '') {
      Alert.alert('Uhoh! Must enter a last name or initial');
      return;
    }
    if (this.state.password === '') {
      Alert.alert('Password is a required for login.');
      return;
    }
    if (this.state.email === '') {
      Alert.alert(
        'Yeah, we really do need your email. In case your forget your password!'
      );
      return;
    } else {
      const { email, password, firstName, lastName } = this.state;
      const displayName = firstName + ' ' + lastName;
      const userInfo = { email, password, displayName, firstName, lastName };
      //ToDo: error handle for when the user is already in the db
      const self = this;
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(this.props.createUser(userInfo))
        .then(this.props.navigation.navigate('Home'));
    }
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
          <View style={{ flex: 1, marginTop: 100 }}>
            <LinearGradient
              colors={['#633836', '#5b2d2d', '#402423']}
              style={{
                height: '50%',
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
                placeholder="  First Name"
                onChangeText={firstName => this.setState({ firstName })}
                value={this.state.firstName}
              />
              <TextInput
                style={styles.textInput}
                autoCapitalize="none"
                placeholder="  Last Name"
                onChangeText={lastName => this.setState({ lastName })}
                value={this.state.lastName}
              />
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
const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createUser: userInfo => {
      dispatch(createUser(userInfo));
    }
  };
};

const SignUpScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);

export default SignUpScreen;
