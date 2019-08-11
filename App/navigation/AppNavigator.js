import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from '../screens/Login/LoginScreen';
import SignUpScreen from '../screens/Login/SignUpScreen';
import LandingScreen from '../screens/Login/LandingScreen';
import UserSettingsScreen from '../screens/Login/UserSettingsScreen';
import MainTabNavigator from './MainTabNavigator';
import Loading from '../screens/Login/Loading';
import JoinLeagueScreen from '../screens/LeagueAdminScreens/JoinLeagueScreen';

import CreateLeague from '../screens/LeagueAdminScreens/CreateLeague';
import LeagueSettings from '../screens/LeagueAdminScreens/LeagueSettings';
import LeagueInvites from '../screens/LeagueAdminScreens/LeagueInvites';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: Loading,
      LandingScreen: LandingScreen,
      Login: LoginScreen,
      SignUp: SignUpScreen,
      UserSettings: UserSettingsScreen,
      Main: MainTabNavigator,
      JoinLeague: JoinLeagueScreen,
      CreateLeague: CreateLeague,
      LeagueSettings: LeagueSettings,
      LeagueInvites: LeagueInvites,
      Profile: ProfileScreen
    },
    {
      initialRouteName: 'LandingScreen'
    }
  )
);
