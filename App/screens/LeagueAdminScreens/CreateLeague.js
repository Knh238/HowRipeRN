import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground,
  Alert
} from 'react-native';
import { Icon, Button, Avatar } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import firebase from '../../../firebase';
import db from '../../.././db';

export default class CreateLeague extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      league: '',
      password: '',
      errorMessage: '',
      requirePassword: true,
      uniqueName: false
    };
    this.renderPasswordSetting = this.renderPasswordSetting.bind(this);
    this.setLeagueInfo = this.setLeagueInfo.bind(this);
    this.checkLeagueName = this.checkLeagueName.bind(this);
  }

  checkLeagueName() {
    let { league } = this.state;
    const currLeagues = db.collection('leagues');
    const currLeagueNames = [];
    currLeagues
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          // console.log(doc.id, ' => ', doc.data());
          const info = doc.data();
          currLeagueNames.push(info.name.toLowerCase());
        });
      })
      .then(() => {
        // console.log('curr leagues', currLeagueNames);
        const leagueLC = league.toLowerCase();
        // console.log('league is now', leagueLC);
        if (currLeagueNames.indexOf(leagueLC) === -1) {
          this.setState({
            errorMessage: 'YAY! Name not taken. Yay! ',
            uniqueName: true
          });
        } else {
          this.setState({
            errorMessage: 'OOPS!! Name already taken. Try again!',
            uniqueName: false
          });
        }
      });
  }

  setLeagueInfo() {
    const { league, password } = this.state;
    if (league === '') {
      Alert.alert('Uhoh! Your league still needs a name!');
      return;
    }
    if (password === '') {
      Alert.alert('No password entered! Password required.');
      return;
    }
    if (!this.state.uniqueName) {
      Alert.alert('Looks like this league name is taken. Try again');
      return;
    } else {
      const user = firebase.auth().currentUser;
      const currUserRef = db.collection('users').doc(user.uid);
      console.log(user.uid);
      const currLeagues = db.collection('leagues');
      let leagueID = '';

      currLeagues
        .add({ name: league, password: password })
        .then(function(doc) {
          console.log('doc id', doc.id);
          leagueID = doc.id;
        })
        .then(() => {
          currUserRef.set({ currentLeague: leagueID });
        })
        .then(() =>
          this.props.navigation.navigate('LeagueSettings', {
            name: league,
            password: password,
            leagueID: leagueID
          })
        )
        .catch(function(error) {
          console.log('Error getting cached document:', error);
        });
    }
  }

  renderPasswordSetting() {
    if (this.state.requirePassword) {
      return (
        <View
          style={{
            flex: 1,
            marginLeft: 10
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-around'
            }}
          >
            <TouchableOpacity
              onPress={() => this.setState({ requirePassword: true })}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginBottom: 5
                }}
              >
                <Icon
                  name="dot-circle-o"
                  type="font-awesome"
                  color="white"
                  size={20}
                />
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'Avenir',
                    fontSize: 18,
                    marginLeft: 10
                  }}
                >
                  Yes ?
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({ requirePassword: false })}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center'
                }}
              >
                <Icon
                  name="circle-o"
                  type="font-awesome"
                  color="white"
                  size={20}
                />
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'Avenir',
                    fontSize: 18,
                    marginLeft: 10
                  }}
                >
                  No
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="  League Pass Phrase"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
        </View>
      );
    } else {
      return (
        <View
          style={{
            flex: 1,
            marginLeft: 10,
            flexDirection: 'row',
            justifyContent: 'space-around'
          }}
        >
          <TouchableOpacity
            onPress={() => this.setState({ requirePassword: true })}
          >
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center'
              }}
            >
              <Icon
                name="circle-o"
                type="font-awesome"
                color="white"
                size={20}
              />
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Avenir',
                  fontSize: 18,
                  marginLeft: 10
                }}
              >
                Yes
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({ requirePassword: false })}
          >
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Icon
                name="dot-circle-o"
                type="font-awesome"
                color="white"
                size={20}
              />
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Avenir',
                  fontSize: 18,
                  marginLeft: 10
                }}
              >
                No
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
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
          <View style={{ flex: 1, marginTop: 160 }}>
            <LinearGradient
              colors={['#6E3737', '#5b2d2d', '#402423']}
              style={{
                height: '50%',
                marginTop: '20%',
                width: '89%',
                borderRadius: 5,
                justifyContent: 'center',
                alignSelf: 'center',
                alignContent: 'center'
              }}
            >
              <View style={{ flex: 1, flexDirection: 'row', height: 40 }}>
                <TouchableOpacity
                  style={{
                    width: '45%',
                    backgroundColor: '#8F6B6B',
                    borderTopRightRadius: 7,
                    borderBottomRightRadius: 7,
                    height: 40
                  }}
                  onPress={() =>
                    this.props.navigation.navigate('LeagueSelectionScreen')
                  }
                >
                  <Text
                    style={{
                      color: '#6E3737',
                      fontFamily: 'Avenir',
                      marginLeft: 10,
                      fontSize: 20
                    }}
                  >
                    Join a League
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: '50%',
                    height: 40
                  }}
                  onPress={() => this.props.navigation.navigate('CreateLeague')}
                >
                  <Text
                    style={{
                      color: 'white',
                      fontFamily: 'Avenir',
                      fontWeight: 'bold',
                      marginLeft: 10,
                      fontSize: 20
                    }}
                  >
                    Create a League
                  </Text>
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Avenir',
                  fontWeight: 'bold',
                  marginTop: 5,
                  marginBottom: 5,
                  fontSize: 15,
                  marginLeft: 15,
                  alignSelf: 'center'
                }}
              >
                Enter your new league's details
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Avenir',
                  fontWeight: 'bold',
                  marginTop: 5,
                  fontSize: 12,
                  marginLeft: 15
                }}
              >
                Let's pick a name for your league
              </Text>
              <TextInput
                style={styles.textInput}
                autoCapitalize="none"
                placeholder="  League Name"
                onChangeText={league => this.setState({ league })}
                value={this.state.league}
              />
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{
                    color: '#DAA520',
                    fontFamily: 'Avenir',
                    fontWeight: 'bold',
                    marginTop: 5,
                    fontSize: 12,
                    marginLeft: 25
                  }}
                >
                  League name already in use?
                </Text>
                <Button
                  type="clear"
                  // style={{ marginBottom: 50 }}
                  // onPress={() => this.props.navigation.navigate('Home')}
                  onPress={() => this.checkLeagueName()}
                  icon={
                    <Icon
                      name="question-circle"
                      type="font-awesome"
                      color="white"
                      size={20}
                    />
                  }
                />
              </View>
              {this.state.errorMessage ? (
                <Text style={{ color: 'red', marginLeft: 15 }}>
                  {this.state.errorMessage}
                </Text>
              ) : null}
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Avenir',
                  fontWeight: 'bold',
                  marginTop: 5,
                  fontSize: 12,
                  marginLeft: 15
                }}
              >
                All new members will need to enter a password to join your
                league
              </Text>

              <TextInput
                style={styles.textInput}
                autoCapitalize="none"
                placeholder="  League Pass Phrase"
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
              marginTop: 600,
              position: 'absolute'
            }}
            onPress={() => this.setLeagueInfo()}
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
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderRadius: 5,
    alignSelf: 'center',
    backgroundColor: 'white',
    // flex: 1,
    borderWidth: 1,
    marginTop: 8
  }
});
