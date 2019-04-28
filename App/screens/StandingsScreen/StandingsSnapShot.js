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
const list = [
  {
    name: 'Greg',
    currentRank: 1,
    score: 12,
    scoreChange: '+8'
  },
  {
    name: 'Annika',
    currentRank: 2,
    score: 9,
    scoreChange: '+4'
  },
  {
    name: 'Noah',
    currentRank: 3,
    score: 8,
    scoreChange: '+4'
  },
  { name: 'Jill', currentRank: 4, score: 5, scoreChange: '+4' },
  {
    name: 'Kristin',
    currentRank: 5,
    score: 5,
    scoreChange: '+2'
  },
  {
    name: 'Cayla',
    currentRank: 6,
    score: 4,
    scoreChange: '+0'
  },
  {
    name: 'Keith',
    currentRank: 7,
    score: 3,
    scoreChange: '+1'
  },
  {
    name: 'Brandon',
    currentRank: 7,
    score: 3,
    scoreChange: '+1'
  },
  {
    name: 'Siobhan',
    currentRank: 9,
    score: 3,
    scoreChange: '+2'
  },
  {
    name: 'Molly',
    currentRank: 10,
    score: 1,
    scoreChange: '+1'
  },
  {
    name: 'John',
    currentRank: 10,
    score: 1,
    scoreChange: '+1'
  },
  {
    name: 'Chris',
    currentRank: 12,
    score: 0,
    scoreChange: '+0'
  }
];

export default class StandingsSnapShot extends React.Component {
  renderPlayerRow(player) {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 45,
          borderColor: '#6e3737',
          borderBottomWidth: 0.5,
          borderRightWidth: 0.5
        }}
        key={player.name}
      >
        <View
          style={{
            width: 50,
            backgroundColor: '#4b1818',
            justifyContent: 'center'
          }}
        >
          <Text style={{ color: 'white', alignSelf: 'center', fontSize: 16 }}>
            {player.currentRank + '. '}
          </Text>
        </View>
        <View
          style={{
            width: 60,
            backgroundColor: '#4b1818',
            justifyContent: 'center'
          }}
        >
          <Avatar
            size="small"
            source={{ uri: 'https://loremflickr.com/320/240' }}
            rounded
            title="MT"
            containerStyle={{ marginRight: 1, marginTop: 1 }}
            onPress={() => console.log('Works!')}
            activeOpacity={0.7}
          />
        </View>
        <View
          style={{
            width: 100,
            backgroundColor: '#4b1818',
            justifyContent: 'center'
          }}
        >
          <Text style={{ color: 'white', alignSelf: 'center', fontSize: 16 }}>
            {player.name + '. '}
          </Text>
        </View>
        <View
          style={{
            width: 50,
            backgroundColor: '#4b1818',
            justifyContent: 'center'
          }}
        >
          <Text style={{ color: 'white', alignSelf: 'center', fontSize: 16 }}>
            {' '}
            {player.score.toString()}{' '}
          </Text>
        </View>
        <View
          style={{
            width: 60,
            backgroundColor: '#4b1818',
            justifyContent: 'center'
          }}
        >
          <Text style={{ color: 'white', alignSelf: 'center', fontSize: 16 }}>
            {player.scoreChange}
          </Text>
        </View>
      </View>
    );
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{ justifyContent: 'center' }}>
          <Text style={{ color: '#A89C9C', fontSize: 28, alignSelf: 'center' }}>
            LEADERBOARD
          </Text>
          <Text style={{ color: '#A89C9C', fontSize: 14, alignSelf: 'center' }}>
            League of Champs / Global
          </Text>
          <View
            style={{
              flexDirection: 'row',
              height: 25,
              borderColor: '#6e3737',
              borderBottomWidth: 0.5,
              borderTopWidth: 1,
              backgroundColor: '#4b1818'
            }}
          >
            <View
              style={{
                width: 50,
                height: 25,
                borderColor: '#6e3737',
                justifyContent: 'center'
              }}
            >
              <Text
                style={{ fontSize: 16, color: '#bfadad', alignSelf: 'center' }}
              >
                Rank
              </Text>
            </View>
            <View
              style={{
                width: 60,
                height: 25,
                borderColor: '#6e3737',
                justifyContent: 'center'
              }}
            />
            <View
              style={{
                width: 100,
                height: 25,
                borderColor: '#6e3737',
                justifyContent: 'center'
              }}
            >
              <Text
                style={{
                  fontSize: 16,
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
                width: 50,
                height: 25,
                justifyContent: 'center'
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: '#bfadad',
                  alignSelf: 'center',
                  textShadowColor: 'black'
                }}
              >
                Wk 3
              </Text>
            </View>
            <View
              style={{
                width: 60,
                height: 25,
                justifyContent: 'center'
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: '#bfadad',
                  alignSelf: 'center'
                }}
              >
                Badges
              </Text>
            </View>
          </View>
          {list.map(player => this.renderPlayerRow(player))}
        </View>

        <Text style={{ color: '#A89C9C', alignSelf: 'center', fontSize: 14 }}>
          <Image
            source={require('HowRipeMobile/imageAssets/crown.png')}
            style={{ width: 30, height: 30 }}
          />
          SPLATTER MASTER: Molly
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4b1818',
    fontFamily: 'Avenir'
  },
  subscreen: {
    height: '80%',
    backgroundColor: '#4b1818'
  },
  subscreenKey: {
    display: 'flex',
    flexDirection: 'row',
    height: '25%',
    justifyContent: 'center',
    backgroundColor: '#4b1818'
  }
});
