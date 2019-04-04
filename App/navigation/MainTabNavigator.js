import React from 'react';
import { Platform, Image } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import { Icon } from 'react-native-elements';
// import splatter from '/imageAssets/';

import HomeScreen from '../screens/HomeScreens/HomeScreen';
import Standings from '../screens/StandingsScreen/Standings';
import ScoresScreen from '../screens/ScoresScreen/ScoresScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: (
    <Icon type="foundation" name="home" color="white" underlayColor="pink" />
  )
};

const StandingsStack = createStackNavigator({
  Standings: Standings
});

StandingsStack.navigationOptions = {
  tabBarLabel: 'Standings',
  tabBarIcon: <Icon type="foundation" name="graph-bar" color="white" />
};

const ScoresStack = createStackNavigator({
  Scores: ScoresScreen
});

ScoresStack.navigationOptions = {
  tabBarLabel: 'Scores',
  tabBarIcon: <Icon type="feather" name="percent" color="white" />
};
const SplatterStack = createStackNavigator({
  Settings: SettingsScreen
});

SplatterStack.navigationOptions = {
  tabBarLabel: 'Splatter',
  tabBarIcon: (
    <Image
      source={require('HowRipeMobile/imageAssets/splatter.png')}
      style={{ width: 30, height: 30 }}
    />
  )
  // tabBarIcon: <Icon type="feather" name="message-circle" color="white" />
};
const TheRipeStack = createStackNavigator({
  Settings: SettingsScreen
});

TheRipeStack.navigationOptions = {
  tabBarLabel: 'TheRipe',
  tabBarIcon: <Icon type="material-community" name="movie-roll" color="white" />
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
      activeTintColor: 'pink',
      safeAreaInset: { forceInset: { top: 'never', bottom: 'always' } }
    }
  }
);
