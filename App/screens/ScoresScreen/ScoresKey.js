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
// import {
//   LineChart
//   // BarChart,
//   // PieChart,
//   // StackedBarChart
// } from 'react-native-chart-kit';
import { StackedBarChart } from 'react-native-svg-charts';

const data = [
  {
    month: new Date(2015, 0, 1),
    apples: 3840,
    bananas: 1920,
    cherries: 960,
    dates: 400,
    oranges: 400
  },
  {
    month: new Date(2015, 1, 1),
    apples: 1600,
    bananas: 1440,
    cherries: 960,
    dates: 400
  },
  {
    month: new Date(2015, 2, 1),
    apples: 640,
    bananas: 960,
    cherries: 3640,
    dates: 400
  },
  {
    month: new Date(2015, 3, 1),
    apples: 3320,
    bananas: 480,
    cherries: 640,
    dates: 400
  }
];
const colors = ['#ff8a80', '#ff5252', '#ff1744', '#d50000'];
const keys = ['apples', 'bananas', 'cherries', 'dates'];
// const data = {
//   labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
//   datasets: [
//     {
//       data: [20, 45, 28, 80, 99, 43]
//     }
//   ]
// };

// const chartConfig = {
//   backgroundGradientFrom: 'pink',
//   backgroundGradientTo: 'purple',
//   color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
//   strokeWidth: 2 // optional, default 3
// };
// const chartConfig = {
//   backgroundGradientFrom: '#6e3737',
//   backgroundGradientTo: '#c62828',
//   //   backgroundGradientTo: '#b71c1c',
//   //   color: (opacity = 1) => `rgba(183, 28, 28,${opacity})`,
//   //white
//   color: (opacity = 1) => `rgba(255,255,255,${opacity})`,
//   //   color: (opacity = 1) => `rgba(118, 255, 3,${opacity})`,
//   strokeWidth: 2 // optional, default 3
// };
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
            TEST Graph
          </Text>
          <Text style={{ color: '#A89C9C', fontSize: 14, alignSelf: 'center' }}>
            stack bar chart
          </Text>
          {/* <LineChart
            data={data}
            style={{ alignSelf: 'center', backgroundColor: 'pink' }}
            width={width - 20}
            height={height / 4}
            chartConfig={chartConfig}
            bezier
          /> */}
          <StackedBarChart
            style={{ height: 200 }}
            keys={keys}
            colors={colors}
            data={data}
            showGrid={false}
            contentInset={{ top: 30, bottom: 30 }}
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
