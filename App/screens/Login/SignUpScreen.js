// import React, { Component } from 'react';
// import { Card, Button, FormLabel, FormInput } from 'react-native-elements';
// import { View, Keyboard } from 'react-native';

// export default class SignUpScreen extends Component {
//   constructor() {
//     super();
//     this.state = {};
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(nav) {
//     const email = this.state.email.toLowerCase();
//     const pass = this.state.pass;
//     const displayName = this.state.name;
//     if (email && pass) {
//       firebase
//         .auth()
//         .createUserWithEmailAndPassword(email, pass)
//         .catch(function(error) {
//           console.error(error);
//         });
//       firebase.auth().onAuthStateChanged(function(user) {
//         if (user) {
//           const uid = user.uid;
//           firebase
//             .database()
//             .ref('users/' + uid)
//             .set({
//               displayName,
//               email
//             });
//         }
//       });
//     }
//     this.setState = { email: '', pass: '' };
//     Keyboard.dismiss();
//     nav.navigate('Login');
//   }

//   render() {
//     const nav = this.props.navigation;
//     return (
//       <View
//         style={{
//           flexDirection: 'column',
//           flex: 1,
//           justifyContent: 'center',
//           alignContent: 'center'
//         }}
//       >
//         <Card
//           title="Sign up as a new user"
//           style={{ justifyContent: 'center', alignContent: 'center' }}
//         >
//           <FormLabel>Name</FormLabel>
//           <FormInput
//             onChangeText={name => this.setState({ name })}
//             inputStyle={{ width: undefined }}
//           />

//           <FormLabel>E-mail</FormLabel>
//           <FormInput onChangeText={email => this.setState({ email })} />

//           <FormLabel>Password</FormLabel>
//           <FormInput
//             onChangeText={pass => this.setState({ pass })}
//             inputStyle={{ width: undefined }}
//             secureTextEntry
//           />

//           <Button
//             title="SIGN UP"
//             buttonStyle={{
//               width: '100%',
//               height: 45,
//               borderRadius: 5,
//               marginTop: 10
//             }}
//             onPress={() => this.handleSubmit(nav)}
//           />
//           <Button
//             title="BACK TO LOGIN"
//             buttonStyle={{
//               width: '100%',
//               height: 45,
//               borderRadius: 5,
//               marginTop: 10
//             }}
//             onPress={() => nav.navigate('Login')}
//           />
//         </Card>
//       </View>
//     );
//   }
// }

import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import firebase from '../../../firebase';

export default class SignUp extends React.Component {
  state = { email: '', password: '', errorMessage: null }

  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('Home'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

render() {
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Sign Up" onPress={this.handleSignUp} />
        <Button
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})
