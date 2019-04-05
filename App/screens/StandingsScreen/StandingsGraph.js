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
const commitsData = [
  {
    name: 'person2',
    date: '2017-01-02',
    count: 1
  },
  {
    name: 'person2',
    date: '2017-02-02',
    count: 2
  },
  {
    name: 'person2',
    date: '2017-03-02',
    count: 4
  },

  {
    name: 'person',
    date: '2017-01-02',
    count: 2
  },
  {
    name: 'person',
    date: '2017-02-02',
    count: 3
  },
  {
    name: 'person',
    date: '2017-03-02',
    count: 4
  }
];

const chartConfig = {
  backgroundColor: '#fff',
  backgroundGradientFrom: '#441515',
  backgroundGradientTo: '#6e3737',
  // labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  color: (opacity = 1) => `rgba(244, 255, 255, ${opacity})`,
  strokeWidth: 2, // optional, default 3,
  style: {
    borderRadius: 16
  }
};
export default class StandingsGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var { height, width } = Dimensions.get('window');
    return (
      <ScrollView style={styles.container}>
        <View style={{ justifyContent: 'center' }}>
          <Text style={{ color: '#A89C9C', fontSize: 28, alignSelf: 'center' }}>
            LEADERBOARD
          </Text>
          <Text style={{ color: '#A89C9C', fontSize: 14, alignSelf: 'center' }}>
            League of Champs / Global
          </Text>
          <ContributionGraph
            style={{ alignSelf: 'center', marginVertical: 8 }}
            values={commitsData}
            endDate={new Date('2017-04-01')}
            numDays={105}
            width={300}
            accessor="count"
            height={height / 3}
            yAxisLabel={'names'}
            chartConfig={chartConfig}
          />
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
