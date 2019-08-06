import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { Icon, Button, Avatar } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import firebase from '../../../firebase';
import db from '../../.././db';
import { connect } from 'react-redux';

class JoinLeague extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessageLeague: '',
      errorMessagePassword: '',
      league: '',
      password: '',
      leagueExists: false,
      dbLeagueInfo: {}
    };
    this.verifyLeague = this.verifyLeague.bind(this);
    this.verifyPassword = this.verifyPassword.bind(this);
    this.submitRegistration = this.submitRegistration.bind(this);
    this.addLeagueToUser = this.addLeagueToUser.bind(this);
  }

  verifyLeague() {
    let { league, password } = this.state;
    const leagueDetails = {};
    const currLeagueNames = this.props.leagueList;
    league = league.toLowerCase();
    const leagueLC = league.toLowerCase();
    if (currLeagueNames.indexOf(league) >= 0) {
      const leagueInfoObj = leagueDetails[league];
      this.setState({
        errorMessageLeague: 'League Found ',
        leagueExists: true,
        dbLeagueInfo: leagueInfoObj
      });
      this.verifyPassword();
    }
    if (currLeagueNames.indexOf(league) === -1) {
      this.setState({
        errorMessageLeague:
          'League not found! Make sure you entered it correctly',
        leagueExists: false
      });
    }
  }

  verifyPassword() {
    //check right here i think?
    let { league, password } = this.state;
    if (this.state.dbLeagueInfo.password === password) {
      this.setState({
        errorMessagePassword: 'Correct password!'
      });
      this.addLeagueToUser();
    } else {
      this.setState({
        errorMessagePassword: 'Incorrect password.Try again!'
      });
      Alert.alert('Incorrect password!Try again.');
      return;
    }
  }
  addLeagueToUser() {
    const leagueID = this.state.dbLeagueInfo.id;
    const currLeagues = db
      .collection('leagues')
      .doc(this.state.dbLeagueInfo.id);
    const user = firebase.auth().currentUser;
    const players = { displayName: 'Kristin', userID: user.uid };
    const currUserRef = db.collection('users').doc(user.uid);
    currLeagues
      .update({ players: firebase.firestore.FieldValue.arrayUnion(players) })
      .then(function(doc) {
        console.log('added user to the league!');
      })
      .then(() => {
        currUserRef.update({ currentLeague: leagueID });
      })
      .then(() => this.props.navigation.navigate('Home'))
      .catch(function(error) {
        console.log('Error getting cached document:', error);
      });
  }

  async submitRegistration() {
    let { league, password } = this.state;
    const currLeagues = db.collection('leagues');

    await this.verifyLeague();
    if (this.state.leagueExists) {
      this.verifyPassword();
    } else {
      return;
    }
  }

  render() {
    return (
      // <KeyboardAvoidingView enabled>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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
                  height: '40%',
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
                    style={{ height: 40, width: '50%' }}
                    onPress={() =>
                      this.props.navigation.navigate('CreateLeague')
                    }
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
                      Join a League
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#886a6a',
                      borderTopLeftRadius: 7,
                      borderBottomLeftRadius: 7,
                      width: '50%',
                      height: 40
                    }}
                    onPress={() =>
                      this.props.navigation.navigate('CreateLeague')
                    }
                  >
                    <Text
                      style={{
                        color: '#673a38',
                        fontFamily: 'Avenir',
                        marginLeft: 10,
                        fontSize: 20
                      }}
                    >
                      Create a League
                    </Text>
                  </TouchableOpacity>
                </View>
                {this.state.errorMessageLeague ? (
                  <Text style={{ color: 'red' }}>
                    {this.state.errorMessageLeague}
                  </Text>
                ) : null}
                <KeyboardAvoidingView enabled behavior="padding">
                  <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="  League Name"
                    onChangeText={league => this.setState({ league })}
                    value={this.state.league}
                  />
                </KeyboardAvoidingView>
                {this.state.errorMessagePassword ? (
                  <Text style={{ color: 'red' }}>
                    {this.state.errorMessagePassword}
                  </Text>
                ) : null}
                <KeyboardAvoidingView enabled behavior="padding">
                  <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="  League Pass Phrase"
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                  />
                </KeyboardAvoidingView>
              </LinearGradient>
            </View>

            <TouchableOpacity
              style={{
                height: '5%',
                width: '60%',
                alignContent: 'center',
                alignSelf: 'center',
                marginTop: 500,
                position: 'absolute'
              }}
              onPress={() => this.submitRegistration()}
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
                  Join
                </Text>
              </LinearGradient>
            </TouchableOpacity>
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
          </ImageBackground>
        </TouchableWithoutFeedback>
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
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10
  }
});

const mapStateToProps = state => {
  return {
    ...state,
    league: state.league,
    leagueList: state.league.allLeagues
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logUserIn: () => {
      dispatch(logUserIn());
    }
  };
};

const LeagueSelectionScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(JoinLeague);

export default LeagueSelectionScreen;
