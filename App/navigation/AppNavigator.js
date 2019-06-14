import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from '../screens/Login/LoginScreen';
import SignUpScreen from '../screens/Login/SignUpScreen';
import LandingScreen from '../screens/Login/LandingScreen';
import ChooseIcon from '../screens/Login/ChooseIcon';
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
      ChooseIcon: ChooseIcon,
      Main: MainTabNavigator
    },
    {
      initialRouteName: 'LandingScreen'
    }
  )
);
