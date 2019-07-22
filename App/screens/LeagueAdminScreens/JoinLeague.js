import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import firebase from '../../../firebase';
import db from '../../.././db';

export default class JoinLeague extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: '',
      league: '',
      password: '',
      leagueExists: false,
      dbLeagueInfo: {}
    };
    this.verfiyLeagueName = this.verfiyLeagueName.bind(this);
    this.verifyPassword = this.verifyPassword.bind(this);
  }
  verifyPassword() {
    let { league, password } = this.state;
    const currLeagues = db.collection('leagues');
    const currLeagueNames = [];
    const leagueDetails = {};

    currLeagues
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          const info = doc.data();
          const lName = info.name.toLowerCase();
          currLeagueNames.push(lName);
          leagueDetails.lname = { password: info.password, id: info.id };
        });
      })
      .then(() => {
        // console.log('curr leagues', currLeagueNames);
        const leagueLC = league.toLowerCase();
        // console.log('league is now', leagueLC);
        if (currLeagueNames.indexOf(leagueLC) >= 0) {
          const leagueInfoObj = leagueDetails[leagueLC];
          this.setState({
            errorMessage: 'League Found ',
            leagueExists: true,
            dbLeagueInfo: leagueInfoObj
          });
        } else {
          this.setState({
            errorMessage:
              'League not found! Make sure you entered it correctly',
            leagueExists: false
          });
        }
      });
  }
  // verfiyLeagueName() {
  //   let { league } = this.state;
  //   const currLeagues = db.collection('leagues');
  //   const currLeagueNames = [];
  //   currLeagues
  //     .get()
  //     .then(function(querySnapshot) {
  //       querySnapshot.forEach(function(doc) {
  //         // console.log(doc.id, ' => ', doc.data());
  //         const info = doc.data();
  //         currLeagueNames.push(info.name.toLowerCase());
  //       });
  //     })
  //     .then(() => {
  //       // console.log('curr leagues', currLeagueNames);
  //       const leagueLC = league.toLowerCase();
  //       // console.log('league is now', leagueLC);
  //       if (currLeagueNames.indexOf(leagueLC) === -1) {
  //         this.setState({
  //           errorMessage: 'YAY! Name not taken. Yay! ',
  //           uniqueName: true
  //         });
  //       } else {
  //         this.setState({
  //           errorMessage: 'OOPS!! Name already taken. Try again!',
  //           uniqueName: false
  //         });
  //       }
  //     });
  // }

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
                fontSize: 20
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
