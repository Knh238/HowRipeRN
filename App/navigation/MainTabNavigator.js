import React from 'react';
import { Platform, Image } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import { Icon } from 'react-native-elements';
import HomeScreen from '../screens/HomeScreens/HomeScreen';
import Standings from '../screens/StandingsScreen/Standings';
import ScoresScreen from '../screens/ScoresScreen/ScoresScreen';
import SplatterScreen from '../screens/SplatterScreen/SplatterScreen';
import fakeSignUp from '../screens/fakeSignup';
import fakeLogin from '../screens/fakeLogin';
import SettingsScreen from '../screens/SettingsScreen';
import LoginScreen from '../screens/Login/LoginScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Login: LoginScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: (
    <Icon
      type="foundation"
      name="home"
      color="#a39595"
      underlayColor="white"
      size={30}
    />
  )
};

const StandingsStack = createStackNavigator({
  Standings: Standings
});

StandingsStack.navigationOptions = {
  tabBarLabel: 'Standings',
  tabBarIcon: (
    <Icon
      type="foundation"
      name="graph-bar"
      color="#a39595"
      underlayColor="white"
      size={30}
    />
  )
};

const ScoresStack = createStackNavigator({
  Scores: ScoresScreen
});

ScoresStack.navigationOptions = {
  tabBarLabel: 'Scores',
  tabBarIcon: (
    <Icon
      type="font-awesome"
      name="percent"
      color="#a39595"
      underlayColor="white"
      size={30}
    />
  )
};
const SplatterStack = createStackNavigator({
  Spallter: SplatterScreen
});

SplatterStack.navigationOptions = {
  tabBarLabel: 'Splatter',
  tabBarIcon: (
    <Image
      source={require('HowRipeMobile/imageAssets/splatterGrey.png')}
      style={{ width: 32, height: 30 }}
    />
  )
};
const TheRipeStack = createStackNavigator({
  Settings: SettingsScreen,
  fakeSignUp: fakeSignUp,
  fakeLogin: fakeLogin
});

TheRipeStack.navigationOptions = {
  tabBarLabel: 'TheRipe',
  tabBarIcon: (
    <Icon
      type="material-community"
      name="movie-roll"
      color="#a39595"
      underlayColor="white"
      size={30}
    />
  )
};

export default createBottomTabNavigator(
  {
    HomeStack,
    StandingsStack,
    ScoresStack,
    SplatterStack,
    TheRipeStack
  },
  {
    tabBarOptions: {
      activeBackgroundColor: '#6e3737',
      inactiveBackgroundColor: '#6e3737',
      activeTintColor: 'white',
      safeAreaInset: { forceInset: { top: 'never', bottom: 'always' } },
      labelStyle: { fontFamily: 'Avenir' },
      style: { borderTopWidth: 0.5, borderColor: '#a39595' }
    }
  }
);
