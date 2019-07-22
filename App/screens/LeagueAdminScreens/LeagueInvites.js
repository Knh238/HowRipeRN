import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  ImageBackground,
  Picker,
  Linking
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import { Icon } from 'react-native-elements';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label
} from 'native-base';

export default class LeagueInvites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
      leagueID: '',
      errorMessage: '',
      upcomingRounds: [],
      selectedStartDate: '',
      sendEmailTo: '',
      sendTextTo: ''
    };
    this.sendEmailInvite = this.sendEmailInvite.bind(this);
    this.sendTextInvite = this.sendTextInvite.bind(this);
  }

  componentWillMount() {
    const paramsPassed = this.props.navigation.state.params;
    const {
      name,
      password,
      leagueID,
      selectedStartDate
    } = this.props.navigation.state.params;
    this.setState({
      name,
      password,
      leagueID,
      selectedStartDate
    });
  }

  sendEmailInvite() {
    const friendToEmail = this.state.sendEmailTo;
    const leagueName = this.state.name;
    const leaguePassword = this.state.password;
    Linking.openURL(
      'mailto:' +
        friendToEmail +
        '?cc=&subject=Join my league on HowRipe!&body="Love movies? join me in a game of HowRipe. League Name: ' +
        leagueName +
        'League Password: ' +
        leaguePassword
    );
    this.setState({ sendEmailTo: '' });
  }
  sendTextInvite() {
    const friendToText = this.state.sendTextTo;
    const leagueName = this.state.name;
    const leaguePassword = this.state.password;
    Linking.openURL(
      'sms:' +
        friendToText +
        '&body=join the league! league name: ' +
        leagueName +
        'password: ' +
        leaguePassword
    );
    this.setState({ sendTextTo: '' });
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
          <View
            style={{
              flex: 1,
              marginTop: 100,
              maxHeight: 450,
              minHeight: 300
            }}
          >
            <LinearGradient
              colors={['#633836', '#5b2d2d', '#402423']}
              style={{
                flex: 1,
                width: '85%',
                borderRadius: 5,
                alignSelf: 'center',
                alignContent: 'center'
              }}
            >
              <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
                <View
                  style={{
                    flexDirection: 'row',
                    borderBottomWidth: 2,
                    borderColor: 'white',
                    alignContent: 'center',
                    justifyContent: 'center',
                    height: 50
                  }}
                >
                  <Text
                    style={{
                      color: 'white',
                      fontFamily: 'Avenir',
                      fontWeight: 'bold',
                      alignSelf: 'center',
                      fontSize: 20
                    }}
                  >
                    League Settings
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    marginLeft: 10,
                    marginTop: 10
                  }}
                >
                  <Text
                    style={{
                      color: 'white',
                      fontFamily: 'Avenir',
                      fontSize: 18
                    }}
                  >
                    Name:
                  </Text>

                  <Text
                    style={{
                      color: '#DAA520',
                      fontFamily: 'Avenir',
                      fontSize: 18,
                      marginLeft: 5
                    }}
                  >
                    {this.state.name}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    marginLeft: 10,
                    marginTop: 10
                  }}
                >
                  <Text
                    style={{
                      color: 'white',
                      fontFamily: 'Avenir',
                      fontSize: 18
                    }}
                  >
                    Password:
                  </Text>
                  <Text
                    style={{
                      color: '#DAA520',
                      fontFamily: 'Avenir',
                      fontSize: 18,
                      marginLeft: 5
                    }}
                  >
                    {this.state.password}
                  </Text>
                </View>

                <View
                  style={{
                    display: 'flex',
                    // marginLeft: 30,
                    // marginBottom: 0,
                    // padding: 0,
                    flexDirection: 'row'
                    // marginTop: 0,
                    // height: 40
                  }}
                >
                  <Text
                    style={{
                      color: 'white',
                      fontFamily: 'Avenir',
                      marginLeft: 10,
                      fontSize: 18,
                      marginBottom: 5,
                      marginTop: 10
                    }}
                  >
                    Start date: {this.state.selectedStartDate}
                  </Text>
                  <Text
                    style={{
                      color: '#DAA520',
                      fontFamily: 'Avenir',
                      marginLeft: 5,
                      fontSize: 14,
                      marginBottom: 5,
                      marginTop: 10,
                      alignSelf: 'center'
                    }}
                  >
                    {moment(this.state.selectedStartDate, 'MMMM Do YYYY')
                      .startOf('day')
                      .fromNow()}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    borderBottomWidth: 1,
                    borderTopWidth: 1,
                    borderColor: 'white',
                    alignContent: 'center',
                    justifyContent: 'center',
                    height: 50,
                    marginTop: 10
                  }}
                >
                  <Text
                    style={{
                      color: 'white',
                      fontFamily: 'Avenir',
                      fontWeight: 'bold',
                      alignSelf: 'center',
                      fontSize: 18
                    }}
                  >
                    Let's Invite Some Friends!
                  </Text>
                </View>
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'Avenir',
                    fontSize: 15,
                    marginBottom: 5,
                    marginTop: 5,
                    alignSelf: 'center'
                  }}
                >
                  Max # of players: 15
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'Avenir',
                    fontSize: 18,
                    marginLeft: 15,
                    marginBottom: 5,
                    alignSelf: 'center',
                    marginTop: 15
                  }}
                >
                  Send Invites via e-mail:
                </Text>
                <View
                  style={{
                    display: 'flex',
                    flex: 1,
                    marginLeft: 10,
                    marginRight: 10,
                    marginBottom: 10,
                    flexDirection: 'row',
                    height: 35,
                    justifyContent: 'center'
                  }}
                >
                  <TextInput
                    style={styles.emailInput}
                    autoCapitalize="none"
                    placeholder="  enter friend's email"
                    onChangeText={email =>
                      this.setState({ sendEmailTo: email })
                    }
                    value={this.state.sendEmailTo}
                  />

                  <TouchableOpacity
                    style={{
                      height: 35,
                      width: '10%',
                      flex: 1
                    }}
                    title="support@example.com"
                    onPress={() => this.sendEmailInvite()}
                  >
                    <LinearGradient
                      colors={['#902227', '#761b1f', '#5d1419']}
                      style={{
                        borderTopRightRadius: 5,
                        borderBottomRightRadius: 5,
                        height: 35
                      }}
                    >
                      <Text
                        style={{
                          color: 'white',
                          fontFamily: 'Avenir',
                          paddingLeft: 5,
                          fontSize: 18,
                          alignSelf: 'center',
                          fontWeight: '500',
                          letterSpacing: 1,
                          marginTop: 5
                        }}
                      >
                        Invite
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'Avenir',
                    fontSize: 18,
                    marginLeft: 15,
                    marginBottom: 5,
                    alignSelf: 'center'
                  }}
                >
                  Send Invites via Text Message:
                </Text>

                <View
                  style={{
                    display: 'flex',
                    flex: 1,
                    marginLeft: 10,
                    marginRight: 10,
                    flexDirection: 'row',
                    height: 35,
                    justifyContent: 'center'
                  }}
                >
                  <TextInput
                    style={styles.emailInput}
                    autoCapitalize="none"
                    placeholder="  enter friend's phone #"
                    onChangeText={text => this.setState({ sendTextTo: text })}
                    value={this.state.sendTextTo}
                  />

                  <TouchableOpacity
                    style={{
                      height: 35,
                      width: '10%',
                      flex: 1
                    }}
                    onPress={() => this.sendTextInvite()}
                  >
                    <LinearGradient
                      colors={['#902227', '#761b1f', '#5d1419']}
                      style={{
                        borderTopRightRadius: 5,
                        borderBottomRightRadius: 5,
                        height: 35
                      }}
                    >
                      <Text
                        style={{
                          color: 'white',
                          fontFamily: 'Avenir',
                          paddingLeft: 5,
                          fontSize: 18,
                          alignSelf: 'center',
                          fontWeight: '500',
                          letterSpacing: 1,
                          marginTop: 5
                        }}
                      >
                        Invite
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
            </LinearGradient>
          </View>
          <View
            style={{
              flex: 1,
              alignContent: 'center',
              justifyContent: 'space-around'
            }}
          >
            <TouchableOpacity
              style={{
                height: '15%',
                width: '60%',
                alignContent: 'center',
                alignSelf: 'center'
                // marginTop: '5%'
              }}
              onPress={() => this.props.navigation.navigate('Home')}
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
                    fontFamily: 'Avenir',
                    paddingLeft: 5,
                    fontSize: 20,
                    alignSelf: 'center'
                  }}
                >
                  Finish
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
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
    height: 35,
    width: '90%',
    borderColor: 'gray',
    borderRadius: 5,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    marginTop: 8
  },
  emailInput: {
    height: 35,
    width: '60%',
    display: 'flex',
    backgroundColor: 'white',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    flex: 1
  }
});
