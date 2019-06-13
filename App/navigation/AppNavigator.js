import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from '../screens/Login/LoginScreen';
import SignUpScreen from '../screens/Login/SignUpScreen';
import LandingScreen from '../screens/Login/LandingScreen';
import MainTabNavigator from './MainTabNavigator';
import Loading from '../screens/Login/Loading';

// export default createAppContainer(
//   createSwitchNavigator({
//     Main: MainTabNavigator
//   })
// );

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: Loading,
      LandingScreen: LandingScreen,
      Login: LoginScreen,
      SignUp: SignUpScreen,
      Main: MainTabNavigator
    },
    {
      initialRouteName: 'LandingScreen'
    }
  )
);
