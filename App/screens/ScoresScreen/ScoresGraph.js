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
  // LineChart,
  // BarChart,
  // PieChart,
  ProgressChart
  // StackedBarChart
} from 'react-native-chart-kit';
const data = [0.4, 0.6, 0.8];
const chartConfig = {
  backgroundGradientFrom: '#6e3737',
  backgroundGradientTo: '#c62828',
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2 // optional, default 3
};
// const chartConfig = {
//   backgroundGradientFrom: '#f44336',
//   backgroundGradientTo: '#c62828',
//   color: (opacity = 1) => `rgba(244, 67, 54,${opacity})`,
//   strokeWidth: 2 // optional, default 3
// };
export default class ScoresGraph extends React.Component {
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

          <ProgressChart
            style={{ alignSelf: 'center' }}
            data={data}
            width={width - 20}
            height={height / 4}
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
