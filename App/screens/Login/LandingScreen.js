import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  Image,
  ImageBackground
} from 'react-native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import firebase from '../../.././firebase';
import { connect } from 'react-redux';

import { createUser, logUserIn } from '../../Store/actions/login';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      userName: '',
      authenticated: false,
      scrollIcon: 'redReel',
      scrollText: 'Watch Trailers',
      currentSelection: 1
    };
    this.renderIcon = this.renderIcon.bind(this);
    this.renderScrollDots = this.renderScrollDots.bind(this);
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user != null) {
        this.props.logUserIn();
        this.props.navigation.navigate('Home');
      }
    });
  }

  renderText() {
    if (this.state.scrollIcon === 'predictIcon') {
      return (
        <Text
          style={{
            color: 'white',
            fontFamily: 'Avenir',
            alignSelf: 'center',
            justifyContent: 'center',
            fontSize: 24,
            marginTop: '35%',
            fontWeight: '500'
          }}
        >
          {this.state.scrollText}
        </Text>
      );
    } else {
      return (
        <Text
          style={{
            color: 'white',
            fontFamily: 'Avenir',
            alignSelf: 'center',
            fontSize: 28,
            marginTop: '35%',
            fontWeight: '500'
          }}
        >
          {this.state.scrollText}
        </Text>
      );
    }
  }
  renderIcon() {
    if (this.state.scrollIcon === 'redReel') {
      return (
        <Image
          source={require(`HowRipeMobile/imageAssets/redReel.png`)}
          style={{
            width: 175,
            height: 175,
            alignSelf: 'center',
            marginTop: 30
          }}
        />
      );
    }
    if (this.state.scrollIcon === 'predictIcon') {
      return (
        <Image
          source={require(`HowRipeMobile/imageAssets/predictIcon.png`)}
          style={{
            width: 200,
            height: 175,
            alignSelf: 'center',
            marginTop: 10
          }}
          resizeMode="contain"
        />
      );
    }
    if (this.state.scrollIcon === 'earnPointsIcon') {
      return (
        <Image
          source={require(`HowRipeMobile/imageAssets/earnPointsIcon.png`)}
          style={{
            width: 210,
            height: 210,
            alignSelf: 'center',
            marginTop: 5
          }}
          resizeMode="contain"
        />
      );
    }
  }

  renderScrollDots() {
    if (this.state.scrollIcon === 'redReel') {
      return (
        <View
          style={{
            display: 'flex',
            flex: 1,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >
          <TouchableOpacity
            style={{
              height: 16,
              width: 16,
              borderRadius: 8,
              backgroundColor: '#A11123',
              marginRight: '7%'
            }}
            onPress={() =>
              this.setState({
                scrollIcon: 'redReel',
                scrollText: 'Watch Trailers'
              })
            }
          />
          <TouchableOpacity
            style={{
              height: 16,
              width: 16,
              borderRadius: 8,
              backgroundColor: '#8a6c6c',
              marginRight: '7%'
            }}
            onPress={() =>
              this.setState({
                scrollIcon: 'predictIcon',
                scrollText: "Predict each movie's Rotten Tomatoes Score"
              })
            }
          />
          <TouchableOpacity
            style={{
              height: 16,
              width: 16,
              borderRadius: 8,
              backgroundColor: '#8a6c6c'
            }}
            onPress={() =>
              this.setState({
                scrollIcon: 'earnPointsIcon',
                scrollText: 'Earn Points'
              })
            }
          />
        </View>
      );
    }
    if (this.state.scrollIcon === 'predictIcon') {
      return (
        <View
          style={{
            display: 'flex',
            flex: 1,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >
          <TouchableOpacity
            style={{
              height: 16,
              width: 16,
              borderRadius: 8,
              backgroundColor: '#8a6c6c',
              marginRight: '7%'
            }}
            onPress={() =>
              this.setState({
                scrollIcon: 'redReel',
                scrollText: 'Watch Trailers'
              })
            }
          />
          <TouchableOpacity
            style={{
              height: 16,
              width: 16,
              borderRadius: 8,
              backgroundColor: '#A11123',
              marginRight: '7%'
            }}
            onPress={() =>
              this.setState({
                scrollIcon: 'predictIcon',
                scrollText: "Predict each movie's Rotten Tomatoes Score"
              })
            }
          />
          <TouchableOpacity
            style={{
              height: 16,
              width: 16,
              borderRadius: 8,
              backgroundColor: '#8a6c6c'
            }}
            onPress={() =>
              this.setState({
                scrollIcon: 'earnPointsIcon',
                scrollText: 'Earn Points'
              })
            }
          />
        </View>
      );
    }
    if (this.state.scrollIcon === 'earnPointsIcon') {
      return (
        <View
          style={{
            display: 'flex',
            flex: 1,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >
          <TouchableOpacity
            style={{
              height: 16,
              width: 16,
              borderRadius: 8,
              backgroundColor: '#8a6c6c',
              marginRight: '7%'
            }}
            onPress={() =>
              this.setState({
                scrollIcon: 'redReel',
                scrollText: 'Watch Trailers'
              })
            }
          />
          <TouchableOpacity
            style={{
              height: 16,
              width: 16,
              borderRadius: 8,
              backgroundColor: '#8a6c6c',
              marginRight: '7%'
            }}
            onPress={() =>
              this.setState({
                scrollIcon: 'predictIcon',
                scrollText: "Predict each movie's Rotten Tomatoes Score"
              })
            }
          />

          <TouchableOpacity
            style={{
              height: 16,
              width: 16,
              borderRadius: 8,
              backgroundColor: '#A11123'
            }}
            onPress={() =>
              this.setState({
                scrollIcon: 'earnPointsIcon',
                scrollText: 'Earn Points'
              })
            }
          />
        </View>
      );
    }
  }

  // doesUserExist(user) {
  //   const userRef = db.collection('users').doc(user.uid);
  //   return userRef.get().then(function(dbUser) {
  //     if (dbUser.exists) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   });
  // }
  // componentDidMount() {
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user != null) {
  //       doesUserExist(user).then(exists => {
  //         if (exists) {
  //           store.dispatch(logUserIn(user));
  //         } else {
  //           this.setState({
  //             ...this.state,
  //             initialized: true,
  //             errorMessage: null
  //           });
  //           this.props.navigation.navigate('InviteCodePage');
  //         }
  //       });
  //     } else {
  //       this.setState({ ...this.state, initialized: true });
  //     }
  //   });
  // }

  // componentDidUpdate(prevProps) {
  //   if (!prevProps.authenticated && this.props.authenticated) {
  //     this.setState({ ...this.state, authenticated: true });
  //     this.props.navigation.navigate('MainScreen');
  //   }
  // }
  render() {
    const scrollIcon = this.state.scrollIcon;
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
          <View style={{ flex: 1 }}>
            {this.renderText()}
            {this.renderIcon()}
            {this.renderScrollDots()}
          </View>

          <TouchableOpacity
            style={{
              height: '5%',
              width: '70%',
              alignContent: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
              marginTop: 450,
              position: 'absolute'
            }}
            onPress={() => this.props.navigation.navigate('SignUp')}
          >
            <LinearGradient
              colors={['#A11123', '#761b1f', '#5d1419']}
              style={{
                flex: 1,
                borderRadius: 5,
                justifyContent: 'center'
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  marginTop: 5,
                  justifyContent: 'center',
                  alignContent: 'center'
                }}
              >
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'Avenir',
                    paddingLeft: 5,
                    fontSize: 18,
                    fontWeight: '500'
                  }}
                >
                  Sign Up
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: '5%',
              width: '70%',
              alignContent: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
              marginTop: 510,
              position: 'absolute'
            }}
            onPress={() => this.props.navigation.navigate('Login')}
          >
            <LinearGradient
              colors={['#6E3737', '#5b2d2d', '#402423']}
              style={{
                flex: 1,
                borderRadius: 5,
                justifyContent: 'center'
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  marginTop: 5,
                  justifyContent: 'center',
                  alignContent: 'center'
                }}
              >
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'Avenir',
                    paddingLeft: 5,
                    fontSize: 18,
                    fontWeight: '500'
                  }}
                >
                  Login
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: '5%',
              width: '70%',
              alignContent: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
              marginTop: 570,
              position: 'absolute'
            }}
            onPress={this.handleLogin}
          >
            <LinearGradient
              colors={['#3B5998', '#263558']}
              style={{
                flex: 1,
                borderRadius: 5
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  marginTop: 5,
                  justifyContent: 'center',
                  alignContent: 'center'
                }}
              >
                <Icon
                  name="facebook-official"
                  type="font-awesome"
                  color="white"
                  size={25}
                />
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'Avenir',
                    paddingLeft: 5,
                    fontSize: 14,
                    fontWeight: '500',
                    alignSelf: 'center'
                  }}
                >
                  Login with Facebook
                </Text>
              </View>
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
const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logUserIn: () => {
      dispatch(logUserIn());
    }
  };
};

const LandingScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);

export default LandingScreen;
