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
import { Icon, Button, Avatar } from 'react-native-elements';

import * as shape from 'd3-shape';
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

const data = [
  {
    month: new Date(2015, 0, 1),
    Ben: 6,
    Bob: 4,
    Bailey: 2,
    Bob: 1
  },
  {
    month: new Date(2015, 1, 1),
    Ben: 4,
    Bob: 1,
    Bailey: 6,
    Dog: 1
  },
  {
    month: new Date(2015, 2, 1),
    Ben: 7,
    Bob: 2,
    Bailey: 8,
    Dog: 4
  },
  {
    month: new Date(2015, 3, 1),
    Ben: 1,
    Bob: 3,
    Bailey: 5,
    Dog: 3
  }
];
const colorsKey = {
  0: 'white',
  1: '#e7c3c8',
  2: '#d08891',
  4: '#b94d5a',
  6: '#a11123',
  8: '#f9b631'
};
// const colorsKey = {
//   0: 'white',
//   1: '#ff8a80',
//   2: '#ff5252',
//   4: '#ff1744',
//   6: '#d50000',
//   8: '#f9b631'
// };
const leagueScores = [
  { name: 'Bob', total: 14, wk1: 1, wk2: 3, wk3: 5, wk4: 8, wk5: 0, wk6: 0 },
  { name: 'Bill', total: 24, wk1: 7, wk2: 1, wk3: 2, wk4: 4, wk5: 0, wk6: 0 },
  { name: 'Bailey', total: 30, wk1: 1, wk2: 3, wk3: 7, wk4: 1, wk5: 0, wk6: 0 }
];
// const colors = ['#ff8a80', '#ff5252', '#ff1744', '#d50000'];
const keys = ['Ben', 'Bob', 'Bailey', 'Dog'];

export default class StandingsKey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderPlayerRow(player) {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View
          style={{
            width: 50,
            height: 20,
            backgroundColor: 'white'
          }}
        >
          <Text> {player.name} </Text>
        </View>
        <View
          style={{
            width: 50,
            height: 20,
            backgroundColor: 'white'
          }}
        >
          <Text> {player.total} </Text>
        </View>
        <View
          style={{
            width: 40,
            height: 20,
            backgroundColor: colorsKey[player.wk1]
          }}
        />
        <View
          style={{
            width: 40,
            height: 20,
            backgroundColor: colorsKey[player.wk2]
          }}
        />
        <View
          style={{
            width: 40,
            height: 20,
            backgroundColor: colorsKey[player.wk3]
          }}
        />
        <View
          style={{
            width: 40,
            height: 20,
            backgroundColor: colorsKey[player.wk4]
          }}
        />
        <View
          style={{
            width: 40,
            height: 20,
            backgroundColor: colorsKey[player.wk5]
          }}
        />
        <View
          style={{
            width: 40,
            height: 20,
            backgroundColor: colorsKey[player.wk6]
          }}
        />
      </View>
    );
  }
  paintCell() {}

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{ justifyContent: 'center' }}>
          <Text style={{ color: '#A89C9C', fontSize: 28, alignSelf: 'center' }}>
            TEST Graph
          </Text>
          <Text style={{ color: 'white', fontSize: 14, alignSelf: 'center' }}>
            Progress Circle
          </Text>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ width: 50, height: 20, backgroundColor: 'white' }}>
              <Text> player </Text>
            </View>
            <View style={{ width: 50, height: 20, backgroundColor: 'white' }}>
              <Text> total </Text>
            </View>
            <View style={{ width: 40, height: 20, backgroundColor: 'white' }}>
              <Text> wk 1 </Text>
            </View>
            <View style={{ width: 40, height: 20, backgroundColor: 'white' }}>
              <Text> wk 2 </Text>
            </View>
            <View style={{ width: 40, height: 20, backgroundColor: 'white' }}>
              <Text> wk 3 </Text>
            </View>
            <View style={{ width: 40, height: 20, backgroundColor: 'white' }}>
              <Text> wk 4 </Text>
            </View>
            <View style={{ width: 40, height: 20, backgroundColor: 'white' }}>
              <Text> wk 5 </Text>
            </View>
            <View style={{ width: 40, height: 20, backgroundColor: 'white' }}>
              <Text> wk 6 </Text>
            </View>
          </View>
          {leagueScores.map(player => this.renderPlayerRow(player))}
          {/* <View style={{ flex: 1, flexDirection: 'row' }}>
            <View
              style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}
            />
            <View
              style={{ width: 50, height: 50, backgroundColor: 'skyblue' }}
            />
            <View
              style={{ width: 50, height: 50, backgroundColor: 'steelblue' }}
            />
          </View> */}
          <Text style={{ color: '#A89C9C', alignSelf: 'center', fontSize: 14 }}>
            <Image
              source={require('HowRipeMobile/imageAssets/crown.png')}
              style={{ width: 30, height: 30 }}
            />
            SPLATTER MASTER: Molly
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#441515'
  }
});
