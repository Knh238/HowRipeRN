import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View
} from 'react-native';
import { ListItem, Left, Right, Body } from 'native-base';
import { Icon, Button, Avatar } from 'react-native-elements';
import { ContributionGraph } from 'react-native-chart-kit';
import StandingsKey from './StandingsKey';

const colorsKey = {
  0: '#3a1615',
  1: '#6c4d4c',
  2: '#6c4d4c',
  3: '#5a3231',
  4: '#5a3231',
  5: '#5a3231',
  6: '#5a2523',
  7: '#5a2523',
  8: '#5a2523',
  9: '#711d21',
  10: '#711d21',
  11: '#711d21',
  12: '#711d21'
};

const leagueScores = [
  {
    name: 'Greg',
    rank: 1,
    total: 31,
    wk1: 9,
    wk2: 4,
    wk3: 8,
    wk4: 9,
    wk5: 6,
    wk6: 0
  },
  {
    name: 'Annika',
    rank: 2,
    total: 28,
    wk1: 6,
    wk2: 12,
    wk3: 4,
    wk4: 2,
    wk5: 2,
    wk6: 3
  },
  {
    name: 'Jill',
    rank: 3,
    total: 27,
    wk1: 8,
    wk2: 3,
    wk3: 4,
    wk4: 8,
    wk5: 11,
    wk6: 2
  },
  {
    name: 'Kristin',
    rank: 4,
    total: 24,
    wk1: 4,
    wk2: 8,
    wk3: 2,
    wk4: 4,
    wk5: 6,
    wk6: 0
  },
  {
    name: 'Keith',
    rank: 5,
    total: 22,
    wk1: 7,
    wk2: 5,
    wk3: 1,
    wk4: 4,
    wk5: 6,
    wk6: 0
  },
  {
    name: 'Noah',
    rank: 6,
    total: 21,
    wk1: 6,
    wk2: 3,
    wk3: 4,
    wk4: 6,
    wk5: 6,
    wk6: 0
  },
  {
    name: 'Molly',
    rank: 7,
    total: 20,
    wk1: 4,
    wk2: 5,
    wk3: 1,
    wk4: 6,
    wk5: 6,
    wk6: 0
  },
  {
    name: 'Abby',
    rank: 8,
    total: 17,
    wk1: 2,
    wk2: 8,
    wk3: 0,
    wk4: 6,
    wk5: 6,
    wk6: 0
  },
  {
    name: 'Brandon',
    rank: 9,
    total: 14,
    wk1: 4,
    wk2: 2,
    wk3: 1,
    wk4: 4,
    wk5: 6,
    wk6: 0
  },
  {
    name: 'Siobhan',
    rank: 10,
    total: 12,
    wk1: 3,
    wk2: 4,
    wk3: 2,
    wk4: 0,
    wk5: 6,
    wk6: 0
  },
  {
    name: 'Chris',
    rank: 11,
    total: 11,
    wk1: 0,
    wk2: 5,
    wk3: 0,
    wk4: 4,
    wk5: 6,
    wk6: 0
  },
  {
    name: 'John',
    rank: 12,
    total: 8,
    wk1: 2,
    wk2: 4,
    wk3: 0,
    wk4: 1,
    wk5: 6,
    wk6: 0
  }
];
export default class StandingsGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderPlayerRow(player) {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 40,
          borderRightWidth: 0.5,
          borderColor: '#6e3737',
          borderTopWidth: 1,
          borderBottomWidth: 1
        }}
        key={player.name}
      >
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: '#4b1818',
            justifyContent: 'center'
          }}
        >
          {player.name === 'Keith' ? (
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                alignSelf: 'center',
                fontWeight: 'bold'
              }}
            >
              {player.rank}
            </Text>
          ) : (
            <Text
              style={{ fontSize: 18, color: '#a39595', alignSelf: 'center' }}
            >
              {player.rank}
            </Text>
          )}
        </View>
        <View
          style={{
            width: 100,
            height: 40,
            backgroundColor: '#4b1818',
            justifyContent: 'center'
          }}
        >
          {player.name === 'Keith' ? (
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                alignSelf: 'center',
                fontWeight: 'bold'
              }}
            >
              {player.name}
            </Text>
          ) : (
            <Text
              style={{ fontSize: 20, color: '#a39595', alignSelf: 'center' }}
            >
              {player.name}{' '}
            </Text>
          )}
        </View>
        <View
          style={{
            width: 45,
            height: 40,
            backgroundColor: '#4b1818',
            borderColor: '#6e3737',
            borderLeftWidth: 0.5,
            justifyContent: 'center'
          }}
        >
          {player.name === 'Keith' ? (
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                alignSelf: 'center',
                fontWeight: 'bold'
              }}
            >
              {player.total}
            </Text>
          ) : (
            <Text
              style={{ fontSize: 20, color: '#a39595', alignSelf: 'center' }}
            >
              {player.total}{' '}
            </Text>
          )}
        </View>
        <View
          style={{
            width: 60,
            height: 40,
            backgroundColor: colorsKey[player.wk1],
            borderColor: '#6e3737',
            borderRightWidth: 0.5
          }}
        >
          <Text style={{ fontSize: 20, color: '#a39595', alignSelf: 'center' }}>
            +{player.wk1}
          </Text>
        </View>

        <View
          style={{
            width: 60,
            height: 40,
            backgroundColor: colorsKey[player.wk2],
            borderColor: 'black',
            borderRightWidth: 0.5
          }}
        >
          <Text style={{ fontSize: 20, color: '#a39595', alignSelf: 'center' }}>
            +{player.wk2}
          </Text>
        </View>
        <View
          style={{
            width: 60,
            height: 40,
            backgroundColor: colorsKey[player.wk3],
            borderColor: '#6e3737',
            borderRightWidth: 0.5
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: '#a39595',
              alignSelf: 'center',
              marginBottom: 5
            }}
          >
            +{player.wk3}
          </Text>
        </View>
        <View
          style={{
            width: 60,
            height: 40,
            backgroundColor: colorsKey[player.wk3],
            borderColor: '#6e3737',
            borderRightWidth: 0.5
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: '#a39595',
              alignSelf: 'center',
              marginBottom: 5
            }}
          >
            +{player.wk4}
          </Text>
        </View>
        <View
          style={{
            width: 60,
            height: 40,
            backgroundColor: colorsKey[player.wk3],
            borderColor: '#6e3737',
            borderRightWidth: 0.5
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: '#a39595',
              alignSelf: 'center',
              marginBottom: 5
            }}
          >
            +{player.wk5}
          </Text>
        </View>
        <View
          style={{
            width: 60,
            height: 40,
            backgroundColor: colorsKey[player.wk3],
            borderColor: '#6e3737',
            borderRightWidth: 0.5
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: '#a39595',
              alignSelf: 'center',
              marginBottom: 5
            }}
          >
            +{player.wk6}
          </Text>
        </View>
        <View
          style={{
            width: 60,
            height: 40,
            backgroundColor: colorsKey[player.wk3],
            borderColor: '#6e3737',
            borderRightWidth: 0.5
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: '#a39595',
              alignSelf: 'center',
              marginBottom: 5
            }}
          >
            +{player.wk7}
          </Text>
        </View>
        <View
          style={{
            width: 60,
            height: 40,
            backgroundColor: colorsKey[player.wk3],
            borderColor: '#6e3737',
            borderRightWidth: 0.5
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: '#a39595',
              alignSelf: 'center',
              marginBottom: 5
            }}
          >
            +{player.wk8}
          </Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              color: '#A89C9C',
              fontSize: 14,
              alignSelf: 'center',
              marginTop: 20,
              marginBottom: 20
            }}
          >
            League of Champs / Global
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            height: 40,
            backgroundColor: '#4b1818'
          }}
        >
          <View
            style={{
              width: 40,
              height: 40,
              borderColor: '#6e3737',
              borderTopWidth: 1,
              borderBottomWidth: 1,
              justifyContent: 'center'
            }}
          >
            <Text
              style={{
                fontSize: 15,
                color: '#bfadad',
                alignSelf: 'center'
              }}
            >
              Rank
            </Text>
          </View>
          <View
            style={{
              width: 100,
              height: 40,
              borderColor: '#6e3737',
              borderTopWidth: 1,
              borderBottomWidth: 1,
              justifyContent: 'center'
            }}
          >
            <Text
              style={{
                fontSize: 15,
                color: '#bfadad',
                alignSelf: 'center',
                textShadowColor: 'black'
              }}
            >
              Player{' '}
            </Text>
          </View>
          <View
            style={{
              width: 45,
              height: 40,
              borderColor: '#6e3737',
              borderWidth: 0.5,
              justifyContent: 'center'
            }}
          >
            <Text
              style={{
                fontSize: 15,
                color: '#bfadad',
                alignSelf: 'center',
                textShadowColor: 'black'
              }}
            >
              Points
            </Text>
          </View>
          <View
            style={{
              width: 60,
              height: 40,
              borderColor: '#6e3737',
              borderWidth: 0.5,
              justifyContent: 'center'
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: '#bfadad',
                textDecorationLine: 'underline',
                alignSelf: 'center',
                textShadowColor: 'black'
              }}
            >
              Wk 1{' '}
            </Text>
          </View>
          <View
            style={{
              width: 60,
              height: 40,
              borderColor: '#6e3737',
              borderWidth: 0.5,
              justifyContent: 'center'
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: '#bfadad',
                textDecorationLine: 'underline',
                alignSelf: 'center'
              }}
            >
              Wk 2{' '}
            </Text>
          </View>
          <View
            style={{
              width: 60,
              height: 40,
              borderColor: '#6e3737',
              borderWidth: 0.5,
              justifyContent: 'center'
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: '#bfadad',
                textDecorationLine: 'underline',
                alignSelf: 'center'
              }}
            >
              Wk 3{' '}
            </Text>
          </View>
          <View
            style={{
              width: 60,
              height: 40,
              borderColor: '#6e3737',
              borderWidth: 0.5,
              justifyContent: 'center'
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: '#bfadad',
                textDecorationLine: 'underline',
                alignSelf: 'center'
              }}
            >
              Wk 4{' '}
            </Text>
          </View>
          <View
            style={{
              width: 60,
              height: 40,
              borderColor: '#6e3737',
              borderWidth: 0.5,
              justifyContent: 'center'
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: '#bfadad',
                textDecorationLine: 'underline',
                alignSelf: 'center'
              }}
            >
              Wk 5{' '}
            </Text>
          </View>
          <View
            style={{
              width: 60,
              height: 40,
              borderColor: '#6e3737',
              borderWidth: 0.5,
              justifyContent: 'center'
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: '#bfadad',
                textDecorationLine: 'underline',
                alignSelf: 'center'
              }}
            >
              Wk 6{' '}
            </Text>
          </View>
          <View
            style={{
              width: 60,
              height: 40,
              borderColor: '#6e3737',
              borderWidth: 0.5,
              justifyContent: 'center'
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: '#bfadad',
                textDecorationLine: 'underline',
                alignSelf: 'center'
              }}
            >
              Wk 7{' '}
            </Text>
          </View>
          <View
            style={{
              width: 60,
              height: 40,
              borderColor: '#6e3737',
              borderWidth: 0.5,
              justifyContent: 'center'
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: '#bfadad',
                textDecorationLine: 'underline',
                alignSelf: 'center'
              }}
            >
              Wk 8{' '}
            </Text>
          </View>
        </View>
        {leagueScores.map(player => this.renderPlayerRow(player))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4b1818',
    fontFamily: 'Avenir'
  }
});
