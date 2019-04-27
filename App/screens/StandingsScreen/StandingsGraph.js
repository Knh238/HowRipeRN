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
  0: 'white',
  1: '#e7c3c8',
  2: '#d08891',
  4: '#b94d5a',
  6: '#a11123',
  8: '#f9b631'
};

const leagueScores = [
  {
    name: 'Greg',
    rank: 1,
    total: 31,
    wk1: { film1: 2, film2: 6, film3: 4 },
    wk2: { film1: 6, film2: 2, film3: 4 },
    wk3: { film1: 4, film2: 4, film3: 8 },
    wk4: { film1: 6, film2: 8, film3: 4 },
    wk5: { film1: 0, film2: 0, film3: 0 },
    wk6: { film1: 0, film2: 0, film3: 0 }
  },
  {
    name: 'Annika',
    rank: 2,
    total: 28,
    wk1: { film1: 8, film2: 2, film3: 6 },
    wk2: { film1: 4, film2: 6, film3: 6 },
    wk3: { film1: 2, film2: 2, film3: 4 },
    wk4: { film1: 4, film2: 4, film3: 4 },
    wk5: { film1: 0, film2: 0, film3: 0 },
    wk6: { film1: 0, film2: 0, film3: 0 }
  },
  {
    name: 'Jill',
    rank: 3,
    total: 27,
    wk1: { film1: 4, film2: 2, film3: 2 },
    wk2: { film1: 2, film2: 2, film3: 4 },
    wk3: { film1: 5, film2: 4, film3: 8 },
    wk4: { film1: 2, film2: 2, film3: 2 },
    wk5: { film1: 0, film2: 0, film3: 0 },
    wk6: { film1: 0, film2: 0, film3: 0 }
  },
  {
    name: 'Kristin',
    rank: 4,
    total: 24,
    wk1: { film1: 2, film2: 6, film3: 4 },
    wk2: { film1: 6, film2: 2, film3: 4 },
    wk3: { film1: 4, film2: 4, film3: 8 },
    wk4: { film1: 6, film2: 8, film3: 4 },
    wk5: { film1: 0, film2: 0, film3: 0 },
    wk6: { film1: 0, film2: 0, film3: 0 }
  },
  {
    name: 'Keith',
    rank: 5,
    total: 22,
    wk1: { film1: 4, film2: 2, film3: 2 },
    wk2: { film1: 2, film2: 2, film3: 4 },
    wk3: { film1: 5, film2: 4, film3: 8 },
    wk4: { film1: 2, film2: 2, film3: 2 },
    wk5: { film1: 0, film2: 0, film3: 0 },
    wk6: { film1: 0, film2: 0, film3: 0 }
  },
  {
    name: 'Noah',
    rank: 6,
    total: 21,
    wk1: { film1: 8, film2: 2, film3: 6 },
    wk2: { film1: 4, film2: 6, film3: 6 },
    wk3: { film1: 2, film2: 2, film3: 4 },
    wk4: { film1: 4, film2: 4, film3: 4 },
    wk5: { film1: 0, film2: 0, film3: 0 },
    wk6: { film1: 0, film2: 0, film3: 0 }
  },
  {
    name: 'Molly',
    rank: 7,
    total: 20,
    wk1: { film1: 2, film2: 6, film3: 4 },
    wk2: { film1: 6, film2: 2, film3: 4 },
    wk3: { film1: 4, film2: 4, film3: 8 },
    wk4: { film1: 6, film2: 8, film3: 4 },
    wk5: { film1: 0, film2: 0, film3: 0 },
    wk6: { film1: 0, film2: 0, film3: 0 }
  },
  {
    name: 'Cayla',
    rank: 8,
    total: 17,
    wk1: { film1: 8, film2: 2, film3: 6 },
    wk2: { film1: 4, film2: 6, film3: 6 },
    wk3: { film1: 2, film2: 2, film3: 4 },
    wk4: { film1: 4, film2: 4, film3: 4 },
    wk5: { film1: 0, film2: 0, film3: 0 },
    wk6: { film1: 0, film2: 0, film3: 0 }
  },
  {
    name: 'Brandon',
    rank: 9,
    total: 14,
    wk1: { film1: 2, film2: 6, film3: 4 },
    wk2: { film1: 6, film2: 2, film3: 4 },
    wk3: { film1: 4, film2: 4, film3: 8 },
    wk4: { film1: 6, film2: 8, film3: 4 },
    wk5: { film1: 0, film2: 0, film3: 0 },
    wk6: { film1: 0, film2: 0, film3: 0 }
  },
  {
    name: 'Siobhan',
    rank: 10,
    total: 12,
    wk1: { film1: 2, film2: 6, film3: 4 },
    wk2: { film1: 6, film2: 2, film3: 4 },
    wk3: { film1: 4, film2: 4, film3: 8 },
    wk4: { film1: 6, film2: 8, film3: 4 },
    wk5: { film1: 0, film2: 0, film3: 0 },
    wk6: { film1: 0, film2: 0, film3: 0 }
  },
  {
    name: 'Chris',
    rank: 11,
    total: 11,
    wk1: { film1: 8, film2: 2, film3: 6 },
    wk2: { film1: 4, film2: 6, film3: 6 },
    wk3: { film1: 2, film2: 2, film3: 4 },
    wk4: { film1: 4, film2: 4, film3: 4 },
    wk5: { film1: 0, film2: 0, film3: 0 },
    wk6: { film1: 0, film2: 0, film3: 0 }
  },
  {
    name: 'John',
    rank: 12,
    total: 8,
    wk1: { film1: 8, film2: 2, film3: 6 },
    wk2: { film1: 4, film2: 6, film3: 6 },
    wk3: { film1: 2, film2: 2, film3: 4 },
    wk4: { film1: 4, film2: 4, film3: 4 },
    wk5: { film1: 0, film2: 0, film3: 0 },
    wk6: { film1: 0, film2: 0, film3: 0 }
  }
];
export default class StandingsGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderPlayerWeek(week) {
    return (
      <View style={{ backgroundColor: '#4b1818' }}>
        <View
          style={{
            width: 15,
            height: 30,
            backgroundColor: colorsKey[week.film1],
            borderColor: 'white',
            borderRightWidth: 0.5
          }}
        />
        <View
          style={{
            width: 15,
            height: 30,
            backgroundColor: colorsKey[week.film2],
            borderColor: 'white',
            borderRightWidth: 0.5
          }}
        />
        <View
          style={{
            width: 15,
            height: 35,
            backgroundColor: colorsKey[week.film3],
            borderColor: 'black',
            borderRightWidth: 0.5
          }}
        />
      </View>
    );
  }
  renderPlayerRow(player) {
    return (
      <View
        style={{
          // flex: 1,
          flexDirection: 'row',
          height: 35,
          borderColor: '#6e3737',
          borderBottomWidth: 0.5,
          borderRightWidth: 0.5
        }}
        key={player.name}
      >
        <View
          style={{
            width: 40,
            height: 35,
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
            height: 35,
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
            height: 35,
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
            width: 20,
            height: 35,
            backgroundColor: colorsKey[player.wk1.film1],
            borderColor: '#6e3737',
            borderRightWidth: 0.5
          }}
        />
        <View
          style={{
            width: 20,
            height: 35,
            backgroundColor: colorsKey[player.wk1.film2],
            borderColor: '#6e3737',
            borderRightWidth: 0.5
          }}
        />
        <View
          style={{
            width: 20,
            height: 35,
            flex: 1,
            backgroundColor: colorsKey[player.wk1.film3],
            borderColor: 'black',
            borderRightWidth: 0.5
          }}
        />
        <View
          style={{
            width: 20,
            height: 35,
            backgroundColor: colorsKey[player.wk2.film1],
            borderColor: '#6e3737',
            borderRightWidth: 0.5
          }}
        />
        <View
          style={{
            width: 20,
            height: 35,
            backgroundColor: colorsKey[player.wk2.film2],
            borderColor: '#6e3737',
            borderRightWidth: 0.5
          }}
        />
        <View
          style={{
            width: 20,
            height: 35,
            backgroundColor: colorsKey[player.wk2.film3],
            borderColor: 'black',
            borderRightWidth: 0.5
          }}
        />
        <View
          style={{
            width: 20,
            height: 35,
            backgroundColor: colorsKey[player.wk3.film1],
            borderColor: '#6e3737',
            borderRightWidth: 0.5
          }}
        />
        <View
          style={{
            width: 20,
            height: 35,
            backgroundColor: colorsKey[player.wk3.film2],
            borderColor: '#6e3737',
            borderRightWidth: 0.5
          }}
        />
        <View
          style={{
            width: 20,
            height: 35,
            backgroundColor: colorsKey[player.wk3.film3],
            borderColor: 'black',
            borderRightWidth: 0.5
          }}
        />
        {/* <View
          style={{
            width: 15,
            height: 35,
            backgroundColor: colorsKey[player.wk4.film1],
            borderColor: 'white',
            borderRightWidth: 0.5
          }}
        />
        <View
          style={{
            width: 15,
            height: 35,
            backgroundColor: colorsKey[player.wk4.film2],
            borderColor: 'white',
            borderRightWidth: 0.5
          }}
        />
        <View
          style={{
            width: 15,
            height: 35,
            backgroundColor: colorsKey[player.wk4.film3],
            borderColor: 'black',
            borderRightWidth: 0.5
          }}
        />
        <View
          style={{
            width: 15,
            height: 35,
            backgroundColor: colorsKey[player.wk5.film1],
            borderColor: 'white',
            borderRightWidth: 0.5
          }}
        />
        <View
          style={{
            width: 15,
            height: 35,
            backgroundColor: colorsKey[player.wk5.film2],
            borderColor: 'white',
            borderRightWidth: 0.5
          }}
        />
        <View
          style={{
            width: 15,
            height: 35,
            backgroundColor: colorsKey[player.wk5.film3],
            borderColor: 'black',
            borderRightWidth: 0.5
          }}
        />
        <View
          style={{
            width: 15,
            height: 35,
            backgroundColor: colorsKey[player.wk6.film1],
            borderColor: 'white',
            borderRightWidth: 0.5
          }}
        />
        <View
          style={{
            width: 15,
            height: 35,
            backgroundColor: colorsKey[player.wk6.film2],
            borderColor: 'white',
            borderRightWidth: 0.5
          }}
        />
        <View
          style={{
            width: 15,
            height: 35,
            backgroundColor: colorsKey[player.wk6.film3],
            borderColor: 'black',
            borderRightWidth: 0.5
          }}
        /> */}
      </View>
    );
  }

  render() {
    return (
      <ScrollView horizontal={true} style={styles.container}>
        <View style={{ justifyContent: 'space-around' }}>
          <Text style={{ color: '#A89C9C', fontSize: 14, alignSelf: 'center' }}>
            League of Champs / Global
          </Text>
          <View
            style={{
              flexDirection: 'row',
              height: 25,
              backgroundColor: '#4b1818'
            }}
          >
            <View
              style={{
                width: 40,
                height: 25,
                borderColor: '#6e3737',
                borderTopWidth: 1,
                borderBottomWidth: 1,
                justifyContent: 'center'
              }}
            >
              <Text
                style={{ fontSize: 15, color: '#bfadad', alignSelf: 'center' }}
              >
                Rank
              </Text>
            </View>
            <View
              style={{
                width: 100,
                height: 25,
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
                height: 25,
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
                height: 25,
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
                Wk 5{' '}
              </Text>
            </View>
            <View
              style={{
                width: 60,
                height: 25,
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
                height: 25,
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
            {/* <View
              style={{
                width: 45,
                height: 25,
                borderColor: 'black',
                borderLeftWidth: 0.5
              }}
            >
              <Text style={{ fontSize: 20, color: '#a39595' }}> wk 4 </Text>
            </View>
            <View
              style={{
                width: 45,
                height: 25,
                borderColor: 'black',
                borderLeftWidth: 0.5
              }}
            >
              <Text style={{ fontSize: 20, color: '#a39595' }}> wk 5 </Text>
            </View>
            <View
              style={{
                width: 45,
                height: 25,
                borderColor: 'black',
                borderLeftWidth: 0.5
              }}
            >
              <Text style={{ fontSize: 20, color: '#a39595' }}> wk 6 </Text>
            </View> */}
          </View>
          {leagueScores.map(player => this.renderPlayerRow(player))}
        </View>
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
