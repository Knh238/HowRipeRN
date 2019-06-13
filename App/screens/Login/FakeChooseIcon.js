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
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements';
export default class FakeChooseIcon extends React.Component {
  state = { email: '', password: '', errorMessage: null };
  render() {
    return (
      <View style={styles.container}>
        {/* {this.state.errorMessage && (
          <Text style={{ color: 'red' }}>{this.state.errorMessage}</Text>
        )} */}
        <View style={{ flex: 1 }}>
          <LinearGradient
            colors={['#633836', '#5b2d2d', '#402423']}
            style={{
              height: '40%',
              marginTop: '20%',
              width: '90%',
              borderRadius: 5,
              justifyContent: 'center',
              alignSelf: 'center',
              alignContent: 'center'
            }}
          >
            <View>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'avenir',
                  fontWeight: 'bold',
                  marginTop: 10,
                  marginLeft: 15,
                  fontSize: 20
                }}
              >
                Profile
              </Text>
              <TextInput
                style={styles.textInput}
                autoCapitalize="none"
                placeholder="Username"
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
              />
              <Text
                style={{
                  color: '#a19595',
                  fontFamily: 'avenir',
                  fontWeight: 'bold',
                  marginTop: 5,
                  marginLeft: 15,
                  fontSize: 18
                }}
              >
                Choose User Icon
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flex: 1,
                marginTop: 10,
                marginLeft: 10,
                flexDirection: 'row',
                justifyContent: 'space-around'
              }}
            >
              {/* <TouchableOpacity
            style={{
              height: 16,
              width: 16,
              borderRadius: 8,
              backgroundColor: '#942328',
              marginRight: '7%'
            }}
          /> */}
              <Image
                source={require('HowRipeMobile/imageAssets/redReel.png')}
                style={{
                  width: 40,
                  height: 40,
                  alignSelf: 'center'
                  // marginTop: 50
                }}
              />
              <Image
                source={require('HowRipeMobile/imageAssets/yellowReel.png')}
                style={{
                  width: 40,
                  height: 40,
                  alignSelf: 'center'
                  // marginTop: 50
                }}
              />
              <Image
                source={require('HowRipeMobile/imageAssets/greenReel.png')}
                style={{
                  width: 40,
                  height: 40,
                  alignSelf: 'center'
                  // marginTop: 50
                }}
              />
              <Image
                source={require('HowRipeMobile/imageAssets/purpleReel.png')}
                style={{
                  width: 40,
                  height: 40,
                  alignSelf: 'center'
                  // marginTop: 50
                }}
              />
              <Image
                source={require('HowRipeMobile/imageAssets/blueReel.png')}
                style={{
                  width: 40,
                  height: 40,
                  alignSelf: 'center'
                  // marginTop: 50
                }}
              />
              <Icon
                name="play-arrow"
                type="materialIcons"
                color="white"
                size={38}
              />
            </View>
            <View style={{ display: 'flex', flex: 1, marginTop: 10 }}>
              <Text
                style={{
                  color: '#886a6a',
                  fontFamily: 'avenir',
                  marginLeft: 15,
                  marginTop: 5,
                  fontSize: 15,
                  textDecorationLine: 'underline'
                }}
              >
                Browse Photos
              </Text>
            </View>
          </LinearGradient>
        </View>
        <TouchableOpacity
          style={{
            height: '5%',
            width: '60%',
            alignContent: 'center',
            alignSelf: 'center',
            marginTop: 0,
            justifyContent: 'center'
          }}
          onPress={this.handleLogin}
        >
          <LinearGradient
            colors={['#902227', '#761b1f', '#5d1419']}
            style={{
              // flex: 1,
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
              Next
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <Button
          title="enroll in a league"
          // onPress={() => this.props.navigation.navigate('Signup')}
          onPress={() =>
            this.props.navigation.navigate('LeagueSelectionScreen')
          }
        />
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
