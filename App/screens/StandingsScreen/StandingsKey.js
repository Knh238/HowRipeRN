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
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-around',
            paddingLeft: 5,
            paddingTop: 5,
            flexDirection: 'row'
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: '#f9b631',
                borderColor: 'black',
                borderWidth: 0.5
              }}
            />
            <Text style={{ fontSize: 12, color: '#a39595' }}> = 8pts</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: '#a11123',
                borderColor: 'black',
                borderWidth: 0.5
              }}
            />
            <Text style={{ fontSize: 12, color: '#a39595' }}> = 6pts</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: '#b94d5a',
                borderColor: 'black',
                borderWidth: 0.5
              }}
            />
            <Text style={{ fontSize: 12, color: '#a39595' }}> = 4pts</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: '#d08891',
                borderColor: 'black',
                borderWidth: 0.5
              }}
            />
            <Text style={{ fontSize: 12, color: '#a39595' }}> = 2pts</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: '#e7c3c8',
                borderColor: 'black',
                borderWidth: 0.5
              }}
            />
            <Text style={{ fontSize: 12, color: '#a39595' }}> = 1pts</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4b1818',
    fontFamily: 'Avenir',
    justifyContent: 'center',
    paddingTop: 10
  },
  cellStyle: {},
  cellHeader: {}
});
