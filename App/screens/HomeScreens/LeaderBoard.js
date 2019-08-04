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
import { connect } from 'react-redux';
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

class LeaderBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderRankings = this.renderRankings.bind(this);
  }

  renderRankings() {
    console.log('this props players', this.props.league.currentLeague.players);

    const players = this.props.league.currentLeague.players;
    console.log('individiual player is', players[0]);
    return list.map((l, i) => (
      <ListItem
        style={{
          backgroundColor: '#3c1715',
          marginLeft: 50,
          marginRight: 50
        }}
        key={i}
      >
        <Left>
          <Text style={{ color: 'white', fontSize: 20 }}>
            {l.currentRank + '. ' + l.name}{' '}
          </Text>
        </Left>
        <Body>
          <Text style={{ color: 'white', fontSize: 20 }}>
            {' '}
            {l.score.toString()}{' '}
          </Text>
        </Body>
        <Right>
          <Text style={{ color: 'white', fontSize: 20 }}>{l.scoreChange}</Text>
        </Right>
      </ListItem>
    ));
  }

  render() {
    console.log('this state league in leader board is', this.props.league);
    return (
      <View style={styles.container}>
        <Text style={{ color: '#A89C9C', fontSize: 28, alignSelf: 'center' }}>
          LEADERBOARD
        </Text>
        <Text style={{ color: '#A89C9C', fontSize: 14, alignSelf: 'center' }}>
          {this.props.league.currentLeague.name}/ Global
        </Text>
        <TouchableOpacity
          style={{
            height: '5%',
            width: '60%',
            alignContent: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: 650,
            position: 'absolute',
            borderWidth: 1,
            borderColor: 'white'
          }}
          onPress={() =>
            this.props.navigation.navigate('LeagueSelectionScreen')
          }
        >
          <Text
            style={{
              color: 'white',
              fontFamily: 'Avenir',
              paddingLeft: 5,
              fontSize: 15,
              alignSelf: 'center'
            }}
          >
            sign up for a league
          </Text>
        </TouchableOpacity>
        {this.renderRankings()}
        {/* {list.map((l, i) => (
          <ListItem
            style={{
              backgroundColor: '#3c1715',
              marginLeft: 50,
              marginRight: 50
            }}
            key={i}
          >
            <Left>
              <Text style={{ color: 'white', fontSize: 20 }}>
                {l.currentRank + '. ' + l.name}{' '}
              </Text>
            </Left>
            <Body>
              <Text style={{ color: 'white', fontSize: 20 }}>
                {' '}
                {l.score.toString()}{' '}
              </Text>
            </Body>
            <Right>
              <Text style={{ color: 'white', fontSize: 20 }}>
                {l.scoreChange}
              </Text>
            </Right>
          </ListItem>
        ))} */}

        <Text style={{ color: '#A89C9C', alignSelf: 'center', fontSize: 14 }}>
          <Image
            source={require('HowRipeMobile/imageAssets/crown.png')}
            style={{ width: 30, height: 30 }}
          />
          SPLATTER MASTER: Molly
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3c1715',
    justifyContent: 'center',
    fontFamily: 'Avenir'
  }
});

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logUserIn: () => {
      dispatch(logUserIn());
    }
  };
};

const LeaderBoardScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(LeaderBoard);

export default LeaderBoardScreen;
