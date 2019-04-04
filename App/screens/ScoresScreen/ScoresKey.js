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
import {
  LineChart
  // BarChart,
  // PieChart,
  // StackedBarChart
} from 'react-native-chart-kit';
// const data = [0.4, 0.6, 0.8];
const data = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43]
    }
  ]
};

// const chartConfig = {
//   backgroundGradientFrom: 'pink',
//   backgroundGradientTo: 'purple',
//   color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
//   strokeWidth: 2 // optional, default 3
// };
const chartConfig = {
  backgroundGradientFrom: '#6e3737',
  backgroundGradientTo: '#c62828',
  //   backgroundGradientTo: '#b71c1c',
  //   color: (opacity = 1) => `rgba(183, 28, 28,${opacity})`,
  //white
  color: (opacity = 1) => `rgba(255,255,255,${opacity})`,
  //   color: (opacity = 1) => `rgba(118, 255, 3,${opacity})`,
  strokeWidth: 2 // optional, default 3
};
export default class ScoresKey extends React.Component {
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
          <LineChart
            data={data}
            style={{ alignSelf: 'center', backgroundColor: 'pink' }}
            width={width - 20}
            height={height / 4}
            chartConfig={chartConfig}
            bezier
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
