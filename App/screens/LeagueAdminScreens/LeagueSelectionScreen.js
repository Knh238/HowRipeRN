import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';
import { Icon, Button, Avatar } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

export default class LeagueSelectionScreen extends React.Component {
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
          onPress={() => navigation.goBack()}
          onPress={() => navigation.navigate('LeagueSelectionScreen')}
          icon={<Icon name="add" type="material" color="white" size={30} />}
        />
      ),
      headerRight: (
        <Avatar
          size="medium"
          source={{ uri: 'https://loremflickr.com/320/240' }}
          rounded
          title="MT"
          containerStyle={{ flex: 2, marginRight: 5, marginTop: 12 }}
          onPress={() => navigation.navigate('Profile')}
          activeOpacity={0.7}
        />
      )
    };
  };

  constructor(props) {
    super(props);
    this.state = { email: '', password: '', errorMessage: '' };
    // this.handleSignUp = this.handleSignUp.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.errorMessage ? (
          <Text style={{ color: 'red' }}>{this.state.errorMessage}</Text>
        ) : null}
        <View style={{ flex: 1, marginTop: 180, marginBottom: 20 }}>
          <LinearGradient
            colors={['#633836', '#5b2d2d', '#402423']}
            style={{
              height: '30%',
              marginTop: '20%',
              width: '89%',
              borderRadius: 5,
              justifyContent: 'center',
              alignSelf: 'center',
              alignContent: 'center'
            }}
          >
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <TouchableOpacity
                style={{ height: 50, width: '50%' }}
                onPress={() => this.props.navigation.navigate('CreateLeague')}
              >
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'avenir',
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
                  width: '50%'
                }}
                onPress={() => this.props.navigation.navigate('CreateLeague')}
              >
                <Text
                  style={{
                    color: '#673a38',
                    fontFamily: 'avenir',
                    marginLeft: 10,
                    fontSize: 20
                  }}
                >
                  Create a League
                </Text>
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="  League Name"
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />
            <TextInput
              secureTextEntry
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
            marginTop: 500,
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
              Join
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
