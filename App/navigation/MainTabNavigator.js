import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import { Icon } from 'react-native-elements';

import HomeScreen from '../screens/HomeScreens/HomeScreen';
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
  Links: LinksScreen
});

StandingsStack.navigationOptions = {
  tabBarLabel: 'Standings',
  tabBarIcon: <Icon type="foundation" name="graph-bar" color="white" />
};

const ScoresStack = createStackNavigator({
  Settings: SettingsScreen
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
  tabBarIcon: <Icon type="feather" name="message-circle" color="white" />
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
