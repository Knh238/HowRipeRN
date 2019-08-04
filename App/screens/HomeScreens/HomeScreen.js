import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  ImageBackground,
  Alert
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Icon, Button, Avatar } from 'react-native-elements';
import LeaderBoardScreen from './LeaderBoard';
import CurrentVideos from './CurrentVideos';
import firebase from '../../.././firebase';
import db from '../../.././db';

export default class HomeScreen extends React.Component {
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
          // onPress={() => navigation.navigate('Profile')}
          onPress={() => navigation.navigate('ChooseIcon')}
          activeOpacity={0.7}
        />
      )
    };
  };

  constructor(props) {
    super(props);
    this.state = { currentUser: null, userName: '' };
  }
  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });
    console.log('this is state in home screen', this.currentUser);
  }

  render() {
    console.log('state here------------------------------', this.state);
    StatusBar.setBarStyle('light-content', true);
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <ImageBackground
            source={require('HowRipeMobile/imageAssets/SplatterBackground.png')}
            style={{
              width: '100%',
              height: '100%'
            }}
            overflow="hidden"
            resizeMode="contain"
          >
            <CurrentVideos />
          </ImageBackground>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6e3737'
  },
  subscreen: {
    height: '40%',
    backgroundColor: '#6e3737'
  }
});
