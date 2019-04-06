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
  {
    name: 'Greg',
    rank: 1,
    total: 14,
    wk1: 1,
    wk2: 3,
    wk3: 5,
    wk4: 8,
    wk5: 0,
    wk6: 0
  },
  {
    name: 'Annika',
    rank: 2,
    total: 24,
    wk1: 7,
    wk2: 1,
    wk3: 2,
    wk4: 4,
    wk5: 0,
    wk6: 0
  },
  {
    name: 'Jill',
    rank: 3,
    total: 30,
    wk1: 1,
    wk2: 3,
    wk3: 7,
    wk4: 1,
    wk5: 0,
    wk6: 0
  },
  {
    name: 'Vikas',
    rank: 4,
    total: 30,
    wk1: 1,
    wk2: 3,
    wk3: 7,
    wk4: 1,
    wk5: 0,
    wk6: 0
  },
  {
    name: 'Keith',
    rank: 5,
    total: 30,
    wk1: 1,
    wk2: 3,
    wk3: 7,
    wk4: 1,
    wk5: 0,
    wk6: 0
  },
  {
    name: 'Noah',
    rank: 6,
    total: 30,
    wk1: 1,
    wk2: 3,
    wk3: 7,
    wk4: 1,
    wk5: 0,
    wk6: 0
  },
  {
    name: 'Molly',
    rank: 7,
    total: 30,
    wk1: 1,
    wk2: 3,
    wk3: 7,
    wk4: 1,
    wk5: 0,
    wk6: 0
  }
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
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          borderColor: 'black',
          borderBottomWidth: 0.5,
          borderRightWidth: 0.5
        }}
        key={player.name}
      >
        <View
          style={{
            width: 60,
            height: 20,
            backgroundColor: 'white'
          }}
        >
          <Text style={{ fontFamily: 'NotoSans' }}>
            {player.rank} {player.name}{' '}
          </Text>
        </View>
        <View
          style={{
            width: 40,
            height: 20,
            backgroundColor: 'white',
            borderColor: 'black',
            borderLeftWidth: 0.5
          }}
        >
          <Text> {player.total} </Text>
        </View>
        <View
          style={{
            width: 40,
            height: 20,
            backgroundColor: colorsKey[player.wk1],
            borderColor: 'black',
            borderLeftWidth: 0.5
          }}
        />
        <View
          style={{
            width: 40,
            height: 20,
            backgroundColor: colorsKey[player.wk2],
            borderColor: 'black',
            borderLeftWidth: 0.5
          }}
        />
        <View
          style={{
            width: 40,
            height: 20,
            backgroundColor: colorsKey[player.wk3],
            borderColor: 'black',
            borderLeftWidth: 0.5
          }}
        />
        <View
          style={{
            width: 40,
            height: 20,
            backgroundColor: colorsKey[player.wk4],
            borderColor: 'black',
            borderLeftWidth: 0.5
          }}
        />
        <View
          style={{
            width: 40,
            height: 20,
            backgroundColor: colorsKey[player.wk5],
            borderColor: 'black',
            borderLeftWidth: 0.5
          }}
        />
        <View
          style={{
            width: 40,
            height: 20,
            backgroundColor: colorsKey[player.wk6],
            borderColor: 'black',
            borderLeftWidth: 0.5
          }}
        />
      </View>
    );
  }
  paintCell() {}

  render() {
    return (
      <ScrollView horozontal={true} style={styles.container}>
        <View style={{ justifyContent: 'center' }}>
          <Text style={{ color: '#A89C9C', fontSize: 28, alignSelf: 'center' }}>
            Standings
          </Text>
          <Text style={{ color: 'white', fontSize: 14, alignSelf: 'center' }}>
            Progress Circle
          </Text>

          <View
            style={{
              flex: 1,
              justifyContent: 'space-around',
              paddingLeft: 5,
              paddingTop: 5,
              flexDirection: 'row'
            }}
          >
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: '#f9b631',
                borderColor: 'black',
                borderWidth: 0.5
              }}
            />
            <Text style={{ alignSelf: 'center', fontSize: 14 }}> = 8 pts</Text>
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: '#a11123',
                borderColor: 'black',
                borderWidth: 0.5
              }}
            />
            <Text style={{ alignSelf: 'center', fontSize: 14 }}> = 6 pts</Text>
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: '#b94d5a',
                borderColor: 'black',
                borderWidth: 0.5
              }}
            />
            <Text style={{ alignSelf: 'center', fontSize: 14 }}> = 4 pts</Text>
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: '#d08891',
                borderColor: 'black',
                borderWidth: 0.5
              }}
            />
            <Text style={{ alignSelf: 'center', fontSize: 14 }}> = 2 pts</Text>
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: '#e7c3c8',
                borderColor: 'black',
                borderWidth: 0.5
              }}
            />
            <Text style={{ alignSelf: 'center', fontSize: 14 }}> = 1 pts</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    fontFamily: 'NotoSans'
  },
  cellStyle: {},
  cellHeader: {}
});
