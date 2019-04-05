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
import { ProgressCircle, StackedAreaChart } from 'react-native-svg-charts';

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

const colors = ['#ff8a80', '#ff5252', '#ff1744', '#d50000'];
const keys = ['Ben', 'Bob', 'Bailey', 'Dog'];
const svgs = [
  { onPress: () => console.log('apples') },
  { onPress: () => console.log('bananas') },
  { onPress: () => console.log('cherries') },
  { onPress: () => console.log('dates') }
];
export default class StandingsKey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{ justifyContent: 'center' }}>
          <Text style={{ color: '#A89C9C', fontSize: 28, alignSelf: 'center' }}>
            TEST Graph
          </Text>
          <Text style={{ color: '#A89C9C', fontSize: 14, alignSelf: 'center' }}>
            Progress Circle
          </Text>
          {/* <ProgressCircle
            style={{ height: 200 }}
            progress={0.7}
            progressColor={'#f44336'}
          /> */}
          <StackedAreaChart
            style={{ height: 200, paddingVertical: 16 }}
            data={data}
            keys={keys}
            colors={colors}
            curve={shape.curveNatural}
            showGrid={true}
            svgs={svgs}
          />
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
