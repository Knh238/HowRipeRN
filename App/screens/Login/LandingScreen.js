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
export default class LandingScreen extends React.Component {
  // static navigationOptions = {
  //   header: null
  // };
  state = { email: '', password: '', errorMessage: null };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'avenir',
              alignSelf: 'center',
              fontSize: 28,
              marginTop: 50
            }}
          >
            Watch Trailers
          </Text>

          <Image
            source={require('HowRipeMobile/imageAssets/redReel.png')}
            style={{
              width: 180,
              height: 180,
              alignSelf: 'center',
              marginTop: 50
            }}
          />
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
            colors={['#902227', '#761b1f', '#5d1419']}
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
                  fontFamily: 'avenir',
                  paddingLeft: 5,
                  fontSize: 20
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
            colors={['#633836', '#5b2d2d', '#402423']}
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
                  fontFamily: 'avenir',
                  paddingLeft: 5,
                  fontSize: 20
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
            colors={['#405993', '#263558']}
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
                  fontFamily: 'avenir',
                  paddingLeft: 5,
                  fontSize: 15,
                  alignSelf: 'center'
                }}
              >
                Login with Facebook
              </Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: '5%',
            width: '60%',
            alignContent: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: 650,
            position: 'absolute',
            borderWidth: 1,
            borderColor: 'white'
          }}
          onPress={() =>
            this.props.navigation.navigate('LeagueSelectionScreen')
          }
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
            sign up for a league
          </Text>
        </TouchableOpacity>
        {/* <Button
          title="sign up for a league"
          style={{
            marginTop: 50,
            position: 'absolute',
            height: '5%',
            width: '60%',
            alignContent: 'center',
            alignSelf: 'center'
          }}
          onPress={() =>
            this.props.navigation.navigate('LeagueSelectionScreen')
          }
        /> */}
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
