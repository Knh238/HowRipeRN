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
      // selected2: undefined
    };
    this.setEndDate = this.setEndDate.bind(this);
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
    this.setEndDate();
  }

  setEndDate() {
    const startDay = this.state.selectedStartDate;
    // const startDayVal = moment(startDay).format('MM Do YY');
    // const endDateCalc = moment(startDayVal)
    //   .add(8, 'weeks')
    //   .calender();
    console.log(startDay);
    const endDate = moment(startDay)
      .add(8, 'weeks')
      .calendar();
    // // const endDate = endDateCalc.format('MMMM Do YYYY');
    // //   .format('MMMM Do YYYY');
    console.log('end date is', endDate);
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
          {this.state.errorMessage ? (
            <Text style={{ color: 'red' }}>{this.state.errorMessage}</Text>
          ) : null}
          <View
            style={{
              flex: 1,
              marginTop: 100,
              maxHeight: 600,
              minHeight: 300
            }}
          >
            <LinearGradient
              colors={['#633836', '#5b2d2d', '#402423']}
              style={{
                // maxHeight: 600,
                // minHeight: 300,
                flex: 1,
                // marginTop: '10%',
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
                    // flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    marginLeft: 10
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
                    // flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    marginLeft: 10
                  }}
                >
                  <Text
                    style={{
                      color: 'white',
                      fontFamily: 'Avenir',
                      fontSize: 18
                    }}
                  >
                    Pass Phrase:
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

                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'Avenir',
                    marginLeft: 15,
                    fontSize: 18,
                    marginBottom: 5,
                    marginTop: 10,
                    marginBottom: 5
                  }}
                >
                  Selected start date: {this.state.selectedStartDate}
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'Avenir',
                    marginLeft: 20,
                    fontSize: 15,
                    marginBottom: 10,
                    marginTop: 0
                  }}
                >
                  end date:
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'Avenir',
                    marginLeft: 15,
                    fontSize: 15,
                    marginBottom: 5
                  }}
                >
                  Max # of players: 15
                </Text>

                <View
                  style={{
                    display: 'flex',
                    flex: 1,
                    marginLeft: 10,
                    marginRight: 10,
                    flexDirection: 'row',
                    height: '15%',
                    justifyContent: 'center'
                  }}
                >
                  <TextInput
                    style={styles.emailInput}
                    autoCapitalize="none"
                    placeholder="  enter your friend's email"
                    onChangeText={email =>
                      this.setState({ sendEmailTo: email })
                    }
                    value={this.state.sendEmailTo}
                  />

                  <TouchableOpacity
                    style={{
                      height: '20%',
                      width: '10%',
                      flex: 1
                    }}
                    onPress={
                      () =>
                        Linking.openURL(
                          'mailto:kristinnharper@gmail.com?cc=&subject=yourSubject&body=yourMessage'
                        )
                      // Linking.openURL(
                      //   'mailto:kristinnharper@gmail.com?subject=SendMail&body=join the party'
                      // )
                    }
                    title="support@example.com"
                    // onPress={this.handleLogin}
                  >
                    <LinearGradient
                      colors={['#902227', '#761b1f', '#5d1419']}
                      style={{
                        borderTopRightRadius: 5,
                        borderBottomRightRadius: 5,
                        flex: 1
                        // height: '15%'
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
                          letterSpacing: 1
                        }}
                      >
                        Invite
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    display: 'flex',
                    flex: 1,
                    marginLeft: 10,
                    marginRight: 10,
                    flexDirection: 'row',
                    height: '15%',
                    justifyContent: 'center'
                  }}
                >
                  <TextInput
                    style={styles.emailInput}
                    autoCapitalize="none"
                    placeholder="  enter your friend's email"
                    onChangeText={text => this.setState({ sendTextTo: text })}
                    value={this.state.sendTextTo}
                  />

                  <TouchableOpacity
                    style={{
                      height: '20%',
                      width: '10%',
                      flex: 1
                    }}
                    onPress={() =>
                      Linking.openURL(
                        'sms:1-225-315-8623&body=join the league! league name: , password:'
                      )
                    }
                    // onPress={this.handleLogin}
                  >
                    <LinearGradient
                      colors={['#902227', '#761b1f', '#5d1419']}
                      style={{
                        borderTopRightRadius: 5,
                        borderBottomRightRadius: 5,
                        flex: 1
                        // height: '15%'
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
                          letterSpacing: 1
                        }}
                      >
                        Invite
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>

                {/* </View> */}
                {/* <View style={{ height: '10%' }}>
                  <Text
                    style={{
                      color: 'white',
                      fontFamily: 'Avenir',
                      marginLeft: 15,
                      fontSize: 18,
                      marginTop: 0
                    }}
                  >
                    Already Invited:
                  </Text>
                </View> */}
              </View>
            </LinearGradient>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{
                height: '15%',
                width: '60%',
                alignContent: 'center',
                alignSelf: 'center',
                marginTop: '5%'
              }}
              // onPress={this.handleLogin}
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
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderRadius: 5,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    marginTop: 8
  },
  emailInput: {
    height: '20%',
    width: '60%',
    display: 'flex',
    backgroundColor: 'white',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    flex: 1
  }
});
