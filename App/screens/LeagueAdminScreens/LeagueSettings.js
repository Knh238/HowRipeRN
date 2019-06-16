import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import { Icon } from 'react-native-elements';

export default class LeagueSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', errorMessage: '' };
    // this.handleSignUp = this.handleSignUp.bind(this);
  }

  upcomingRounds() {
    const nextDates = ['2019/06/17', '2019/06/24', '2019/07/01'];

    return nextDates.map(date => (
      <View
        style={{ flex: 1, marginLeft: 20, marginTop: 10, marginBottom: 10 }}
        key={date}
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
              fontFamily: 'avenir',
              fontWeight: 'bold',
              marginLeft: 10,
              fontSize: 18
            }}
          >
            {moment(date).format('MMMM Do')}
          </Text>
        </View>
        <Text
          style={{
            color: '#DAA520',
            fontFamily: 'avenir',
            marginLeft: 20,
            fontSize: 16
          }}
        >
          {moment(date)
            .startOf('day')
            .fromNow()}
        </Text>
      </View>
    ));
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.errorMessage ? (
          <Text style={{ color: 'red' }}>{this.state.errorMessage}</Text>
        ) : null}
        <View style={{ flex: 1, marginTop: 60 }}>
          <LinearGradient
            colors={['#633836', '#5b2d2d', '#402423']}
            style={{
              height: '75%',
              marginTop: '15%',
              width: '85%',
              borderRadius: 5,
              justifyContent: 'center',
              alignSelf: 'center',
              alignContent: 'center'
            }}
          >
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'avenir',
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  fontSize: 20
                }}
              >
                League Settings
              </Text>
            </View>
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="  League Name"
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />
            <Text
              style={{
                color: 'white',
                fontFamily: 'avenir',
                fontWeight: 'bold',
                marginTop: 10,
                marginLeft: 15,
                fontSize: 18
              }}
            >
              Require a pass phrase for new members?
            </Text>
            <View style={{ flex: 1, marginLeft: 30, flexDirection: 'row' }}>
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
                    fontFamily: 'avenir',

                    marginLeft: 10,
                    fontSize: 18
                  }}
                >
                  Yes
                </Text>
              </View>
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
                    fontFamily: 'avenir',
                    // fontWeight: 'bold',
                    marginLeft: 10,
                    fontSize: 18
                  }}
                >
                  No
                </Text>
              </View>
            </View>
            {/* <TextInput
              secureTextEntry
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="  Password"
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            /> */}
            <Text
              style={{
                color: 'white',
                fontFamily: 'avenir',
                fontWeight: 'bold',
                marginLeft: 15,
                fontSize: 18,
                textDecorationLine: 'underline'
              }}
            >
              Select a start date:
            </Text>
            {this.upcomingRounds()}

            <Text
              style={{
                color: 'white',
                fontFamily: 'avenir',
                fontWeight: 'bold',
                fontSize: 18,
                marginLeft: 15
              }}
            >
              Require unique invite codes for each member?
            </Text>
            <View style={{ flex: 1, marginLeft: 10, flexDirection: 'row' }}>
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
                    fontFamily: 'avenir',
                    marginLeft: 10,
                    fontSize: 18
                  }}
                >
                  Yes
                </Text>
              </View>
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
                    fontFamily: 'avenir',

                    marginLeft: 10,
                    fontSize: 18
                  }}
                >
                  No
                </Text>
              </View>
            </View>
          </LinearGradient>
        </View>

        <TouchableOpacity
          style={{
            height: '5%',
            width: '60%',
            alignContent: 'center',
            alignSelf: 'center',
            marginTop: 630,
            position: 'absolute'
          }}
          // onPress={this.handleLogin}
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
              Finish
            </Text>
          </LinearGradient>
        </TouchableOpacity>
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
  }
});
