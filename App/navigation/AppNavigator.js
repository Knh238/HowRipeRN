import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from 'react-navigation';
import LoginScreen from '../screens/Login/LoginScreen';
import SignUpScreen from '../screens/Login/SignUpScreen';
import MainTabNavigator from './MainTabNavigator';

// export default createAppContainer(
//   createSwitchNavigator({
//     Main: MainTabNavigator
//   })
// );

const LoginStack = createStackNavigator({
  Login: LoginScreen,
  SignUp: SignUpScreen
});
export default createAppContainer(
  createSwitchNavigator(
    {
      Login: LoginStack,
      Main: MainTabNavigator
    },
    {
      initialRouteName: 'Login'
    }
  )
);
