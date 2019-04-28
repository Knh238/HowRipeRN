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
import { ListItem, Left, Right, Body } from 'native-base';
import { Icon, Button, Avatar, Divider } from 'react-native-elements';
const list = [
  {
    name: 'Greg',
    currentRank: 1,
    score: 8,
    scoreChange: '+8'
  },
  {
    name: 'Annika',
    currentRank: 2,
    score: 8,
    scoreChange: '+4'
  },
  {
    name: 'Noah',
    currentRank: 3,
    score: 8,
    scoreChange: '+4'
  },
  {
    name: 'Keith',
    currentRank: 7,
    score: 8,
    scoreChange: '+1'
  }
];
export default class ChatterFilm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      // <ScrollView style={styles.container}>
      <View style={styles.container}>
        <View style={{ justifyContent: 'center' }}>
          <Text style={{ color: '#A89C9C', fontSize: 28, alignSelf: 'center' }}>
            WEEK 2
          </Text>
          <Text style={{ color: '#A89C9C', fontSize: 14, alignSelf: 'center' }}>
            League of Champs / Global
          </Text>
          <Divider style={{ marginBottom: 10, marginTop: 10 }} />
          <View
            style={{
              marginTop: 5,
              flexDirection: 'row',
              justifyContent: 'space-around'
            }}
          >
            <Text
              style={{
                color: '#A89C9C',
                fontSize: 22,
                alignSelf: 'center',
                fontWeight: 'bold'
              }}
            >
              Christopher Robin
            </Text>
            <Text
              style={{
                color: '#A89C9C',
                fontSize: 22,
                paddingLeft: 40
              }}
            >
              1/3
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 10,
              marginLeft: 5,
              marginRight: 5,
              marginBottom: 0
            }}
          >
            <Text
              style={{
                color: '#A89C9C',
                fontSize: 22,
                alignSelf: 'center',
                fontWeight: 'bold'
              }}
            >
              No score
            </Text>
            <Image
              source={require('HowRipeMobile/imageAssets/pooh.jpg')}
              style={{ width: 240, height: 136 }}
              resizeMode={'contain'}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#441515',
    fontFamily: 'Avenir',
    paddingBottom: 10
  }
});
