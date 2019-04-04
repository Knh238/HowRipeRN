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
    name: 'person',
    date: '2017-01-02',
    count: 1,
    legendFontColor: '#ffebee',
    legendFontSize: 15
  },
  {
    name: 'person',
    date: '2017-01-03',
    count: 2,
    legendFontColor: '#ffebee',
    legendFontSize: 15
  },
  {
    name: 'person',
    date: '2017-01-04',
    count: 3,
    legendFontColor: '#ffebee',
    legendFontSize: 15
  },
  {
    name: 'person',
    date: '2017-01-05',
    count: 4,
    legendFontColor: '#ffebee',
    legendFontSize: 15
  },
  {
    name: 'person',
    date: '2017-01-06',
    count: 5,
    legendFontColor: '#ffffff',
    legendFontSize: 15
  },
  {
    name: 'person',
    date: '2017-02-30',
    count: 4,
    legendFontColor: '#ffffff',
    legendFontSize: 15
  }
];

const chartConfig = {
  backgroundColor: '#ffffff',
  backgroundGradientFrom: '#6e3737',
  backgroundGradientTo: '#c62828',
  // labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  color: (opacity = 1) => `rgba(255,255,255,${opacity})`,
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
            height={height}
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
    backgroundColor: '#6e3737'
  }
});
