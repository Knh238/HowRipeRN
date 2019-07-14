import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  Image,
  ImageBackground
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Icon, Button } from 'react-native-elements';
import firebase from '../../../firebase';
import db from '../../.././db';

export default class ChooseIcon extends React.Component {
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
          style={{ marginBottom: 50 }}
          onPress={() => this.props.navigation.navigate('Home')}
          icon={
            <Icon
              name="chevron-circle-left"
              type="font-awesome"
              color="white"
              size={30}
            />
          }
        />
      )
    };
  };
  constructor(props) {
    super(props);
    this.state = { selectedIcon: '', userName: '' };
    this.submitInfo = this.submitInfo.bind(this);
  }

  submitInfo() {
    const self = this;
    firebase.auth().onAuthStateChanged(user => {
      if (user != null) {
        db.collection('users')
          .doc(user.uid)
          .update({
            icon: self.state.selectedIcon,
            userName: self.state.userName
          })
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
          {this.state.errorMessage && (
            <Text style={{ color: 'red' }}>{this.state.errorMessage}</Text>
          )}
          <View style={{ flex: 1, marginTop: 120 }}>
            <LinearGradient
              colors={['#6E3737', '#5b2d2d', '#402423']}
              style={{
                height: '40%',
                marginTop: '10%',
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
                    fontFamily: 'Avenir',
                    fontWeight: '800',
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
                  placeholder="  Username"
                  onChangeText={userName => this.setState({ userName })}
                  value={this.state.userName}
                />
                <Text
                  style={{
                    color: '#A39595',
                    fontFamily: 'Avenir',
                    fontWeight: '500',
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
                <TouchableOpacity
                  onPress={() => this.setState({ selectedIcon: 'red' })}
                >
                  <Image
                    source={require('HowRipeMobile/imageAssets/redReel.png')}
                    style={{
                      width: 40,
                      height: 40,
                      alignSelf: 'center'
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.setState({ selectedIcon: 'yellow' })}
                >
                  <Image
                    source={require('HowRipeMobile/imageAssets/yellowReel.png')}
                    style={{
                      width: 40,
                      height: 40,
                      alignSelf: 'center'
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.setState({ selectedIcon: 'green' })}
                >
                  <Image
                    source={require('HowRipeMobile/imageAssets/greenReel.png')}
                    style={{
                      width: 40,
                      height: 40,
                      alignSelf: 'center'
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.setState({ selectedIcon: 'purple' })}
                >
                  <Image
                    source={require('HowRipeMobile/imageAssets/purpleReel.png')}
                    style={{
                      width: 40,
                      height: 40,
                      alignSelf: 'center'
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.setState({ selectedIcon: 'blue' })}
                >
                  <Image
                    source={require('HowRipeMobile/imageAssets/blueReel.png')}
                    style={{
                      width: 40,
                      height: 40,
                      alignSelf: 'center'
                    }}
                  />
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={() => this.selectIcon('red')}> */}
                <Icon
                  name="play-arrow"
                  type="materialIcons"
                  color={'#8F6B6B'}
                  size={38}
                  // style={{ height: 16, width: 16 }}
                />
                {/* </TouchableOpacity> */}
              </View>
              <View style={{ display: 'flex', flex: 1, marginTop: 10 }}>
                <Text
                  style={{
                    color: '#8F6B6B',
                    fontFamily: 'Avenir',
                    marginLeft: 15,
                    marginTop: 5,
                    fontSize: 14,
                    fontWeight: '500',
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
              height: 35,
              width: 222,
              alignContent: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
              marginTop: 450,
              position: 'absolute'
            }}
            onPress={this.submitInfo}
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
                  fontSize: 20,
                  alignSelf: 'center'
                }}
              >
                Next
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
