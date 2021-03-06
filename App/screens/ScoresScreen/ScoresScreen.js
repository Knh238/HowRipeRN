import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Icon, Button, Avatar } from 'react-native-elements';
import ScoresGraph from './ScoresGraph';
import ScoresKey from './ScoresKey';

export default class ScoresScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      // headerTitle: (
      //   <Image
      //     source={require('HowRipeMobile/imageAssets/Logov1.0.png')}
      //     style={{ width: 30, height: 30, color: 'white' }}
      //   />
      // ),
      title: 'How Ripe',
      headerStyle: {
        backgroundColor: '#6e3737',
        borderBottomWidth: 0
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 18
      },
      headerLeft: (
        <Button
          type="clear"
          onPress={() => navigation.goBack()}
          icon={<Icon name="menu" type="material" color="white" size={30} />}
        />
      ),
      headerRight: (
        <Avatar
          size="medium"
          source={{ uri: 'https://loremflickr.com/320/240' }}
          rounded
          title="MT"
          containerStyle={{ flex: 2, marginRight: 5, marginTop: 12 }}
          onPress={() => console.log('Works!')}
          activeOpacity={0.7}
        />
      )
    };
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.subscreen}>
            <Text> score graph </Text>
            <ScoresGraph />
          </View>
          <View style={styles.subscreen}>
            <Text> key </Text>
            <ScoresKey />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#441515'
  },
  subscreen: {
    flex: 2,
    height: '50%',
    backgroundColor: '#441515'
  }
});
