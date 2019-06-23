import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from '../screens/Login/LoginScreen';
import SignUpScreen from '../screens/Login/SignUpScreen';
import LandingScreen from '../screens/Login/LandingScreen';
import ChooseIcon from '../screens/Login/ChooseIcon';
import MainTabNavigator from './MainTabNavigator';
import Loading from '../screens/Login/Loading';
import LeagueSelectionScreen from '../screens/LeagueAdminScreens/LeagueSelectionScreen';

import CreateLeague from '../screens/LeagueAdminScreens/CreateLeague';
import LeagueSettings from '../screens/LeagueAdminScreens/LeagueSettings';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: Loading,
      LandingScreen: LandingScreen,
      Login: LoginScreen,
      SignUp: SignUpScreen,
      ChooseIcon: ChooseIcon,
      Main: MainTabNavigator,
      LeagueSelectionScreen: LeagueSelectionScreen,
      CreateLeague: CreateLeague,
      LeagueSettings: LeagueSettings,
      Profile: ProfileScreen
    },
    {
      initialRouteName: 'LandingScreen'
    }
  )
);
