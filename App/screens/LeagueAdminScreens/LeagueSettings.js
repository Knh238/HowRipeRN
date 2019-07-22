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
import firebase from '../../../firebase';
import db from '../../.././db';

export default class LeagueSettings extends React.Component {
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
    this.setUpcomingDates = this.setUpcomingDates.bind(this);
    this.setStartDateInDB = this.setStartDateInDB.bind(this);
    this.selectStartDate = this.selectStartDate.bind(this);
  }

  componentWillMount() {
    const paramsPassed = this.props.navigation.state.params;
    const { name, password, leagueID } = this.props.navigation.state.params;
    console.log('params passed', paramsPassed);
    this.setState({
      name,
      password,
      leagueID
    });
    this.setUpcomingDates();
  }

  selectStartDate(val) {
    this.setState({
      selectedStartDate: val
    });
    this.setStartDateInDB();
  }

  setStartDateInDB() {
    const leagueID = this.state.leagueID;
    const startDate = this.state.selectedStartDate;
    const currLeagues = db.collection('leagues').doc(leagueID);

    currLeagues
      .update({ startDate })
      .then(() => {
        console.log('new date added!');
      })
      .then(() =>
        this.props.navigation.navigate('LeagueInvites', {
          name: this.state.name,
          password: this.state.password,
          leagueID: this.state.leagueID,
          selectedStartDate: this.state.selectedStartDate
        })
      );
  }

  setUpcomingDates() {
    const todaysDate = Date.now();

    var closestMonday = function(inputDate) {
      var curr_date = new Date(inputDate); // current date
      var day_info = 8.64e7; // milliseconds per day
      var days_to_monday = 8 - curr_date.getDay(); // days left to closest Monday
      var monday_in_sec = curr_date.getTime() + days_to_monday * day_info; // aleary Monday in seconds from 1970
      var next_monday = new Date(monday_in_sec); // Monday in date object
      next_monday.setHours(0, 0, 0);
      return next_monday;
    };
    const mondayOne = closestMonday(todaysDate);
    const mondayTwo = closestMonday(mondayOne);
    const mondayThree = closestMonday(mondayTwo);

    const nextDates = [];
    nextDates.push(moment(mondayOne).format('MMMM Do YYYY'));
    nextDates.push(moment(mondayTwo).format('MMMM Do YYYY'));
    nextDates.push(moment(mondayThree).format('MMMM Do YYYY'));

    this.setState({ upcomingRounds: nextDates });
  }

  upcomingRounds() {
    const nextDates = this.state.upcomingRounds;

    return nextDates.map(date => (
      <TouchableOpacity
        key={date}
        onPress={() => this.setState({ selectedStartDate: `${date}` })}
        // onPress={date => this.selectStartDate(`${date}`)}
      >
        <View
          style={{
            display: 'flex',
            marginLeft: 30,
            marginBottom: 0,
            padding: 0,
            flexDirection: 'row',
            marginTop: 0,
            height: 40
          }}
          key={date}
        >
          {this.state.selectedStartDate === date ? (
            <Icon
              name="dot-circle-o"
              type="font-awesome"
              color="white"
              size={20}
            />
          ) : (
            <Icon name="circle-o" type="font-awesome" color="white" size={20} />
          )}
          <Text
            style={{
              color: 'white',
              fontFamily: 'Avenir',
              fontWeight: 'bold',
              marginTop: 0,
              marginLeft: 10,
              fontSize: 18,
              padding: 0,
              marginBottom: 0
            }}
          >
            {date}
          </Text>
          <Text
            style={{
              color: '#DAA520',
              fontFamily: 'Avenir',
              marginLeft: 20,
              fontSize: 16,
              marginTop: 0,
              marginBottom: 0,
              padding: 0
            }}
          >
            {moment(date, 'MMMM Do YYYY')
              .startOf('day')
              .fromNow()}
          </Text>
        </View>
      </TouchableOpacity>
    ));
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
              maxHeight: 400,
              minHeight: 200
            }}
          >
            <LinearGradient
              colors={['#633836', '#5b2d2d', '#402423']}
              style={{
                maxHeight: 400,
                minHeight: 200,
                flex: 1,
                marginTop: '10%',
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

                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'Avenir',
                    marginLeft: 10,
                    fontSize: 18,
                    marginBottom: 5,
                    textDecorationLine: 'underline',
                    marginTop: 20,
                    marginBottom: 5
                  }}
                >
                  Select a start date:
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
                  **Leagues are 8 weeks long.
                </Text>

                <View style={{ flex: 1 }}>{this.upcomingRounds()}</View>
              </View>
            </LinearGradient>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-around',
              alignContent: 'center'
            }}
          >
            <TouchableOpacity
              style={{
                height: '15%',
                width: '60%',
                alignContent: 'center',
                alignSelf: 'center',
                marginTop: '5%'
              }}
              onPress={() => this.setStartDateInDB()}
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
                  Invite Players
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
