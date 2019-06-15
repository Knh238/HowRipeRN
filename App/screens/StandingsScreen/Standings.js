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
import { SafeAreaView } from 'react-navigation';
import { Icon, Button, Avatar } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import StandingsGraph from './StandingsGraph';
import StandingsKey from './StandingsKey';
import StandingsSnapShot from './StandingsSnapShot';

export default class Standings extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'STANDINGS',
      headerStyle: {
        backgroundColor: '#6e3737',
        borderBottomWidth: 0
      },
      headerTitleStyle: {
        color: 'white',
        fontFamily: 'Avenir',
        fontWeight: 'bold',
        fontSize: 25
      },
      headerLeft: (
        <Button
          type="clear"
          onPress={() => navigation.goBack()}
          icon={<Icon name="menu" type="material" color="white" size={30} />}
        />
      ),
      headerRight: (
        <Avatar
          size="medium"
          source={{ uri: 'https://loremflickr.com/320/240' }}
          rounded
          title="MT"
          containerStyle={{ flex: 2, marginRight: 5, marginTop: 12 }}
          onPress={() => console.log('Works!')}
          activeOpacity={0.7}
        />
      )
    };
  };

  constructor(props) {
    super(props);
    this.state = { selected: 'detailed' };
  }

  handleSelect(view) {
    this.setState({ selected: view });
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          {this.state.selected === 'detailed' ? (
            <View style={styles.subscreen}>
              <StandingsGraph />
            </View>
          ) : (
            <View style={{ height: '85%', backgroundColor: '#4b1818' }}>
              <StandingsSnapShot />
            </View>
          )}

          {this.state.selected === 'snapshot' ? (
            // <View style={{ flex: 1, justifyContent: 'center' }}>
            <View
              style={{
                display: 'flex',
                marginTop: 30,
                flexDirection: 'row',
                height: '25%',
                justifyContent: 'center',
                backgroundColor: '#4b1818'
              }}
            >
              <TouchableOpacity
                style={{
                  width: '32%',
                  height: '22%',
                  borderRightWidth: 1.5,
                  borderColor: 'grey'
                }}
                onPress={() => this.handleSelect('snapshot')}
              >
                <LinearGradient
                  colors={['#9a1021', '#6b0b17']}
                  style={{
                    flex: 1,
                    borderTopLeftRadius: 5,
                    borderBottomLeftRadius: 5
                  }}
                >
                  <Text
                    style={{
                      fontFamily: 'Avenir',
                      fontSize: 20,
                      color: 'white',
                      alignSelf: 'center'
                    }}
                  >
                    Snapshot
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: '32%',
                  height: '22%',
                  borderLeftWidth: 1,
                  borderColor: 'grey'
                }}
                onPress={() => this.handleSelect('detailed')}
              >
                <LinearGradient
                  colors={['#5a3231', '#3a1615']}
                  style={{
                    flex: 1,
                    borderTopRightRadius: 5,
                    borderBottomRightRadius: 5
                  }}
                >
                  <Text
                    style={{
                      alignSelf: 'center',
                      fontFamily: 'Avenir',
                      fontSize: 20,
                      color: '#a39595'
                    }}
                  >
                    Detailed{' '}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          ) : (
            <View
              style={{
                display: 'flex',
                marginTop: 30,
                flexDirection: 'row',
                height: '25%',
                justifyContent: 'center',
                backgroundColor: '#4b1818'
              }}
            >
              <TouchableOpacity
                style={{
                  width: '32%',
                  height: '22%',
                  borderRightWidth: 1.5,
                  borderColor: 'grey'
                }}
                onPress={() => this.handleSelect('snapshot')}
              >
                <LinearGradient
                  colors={['#5a3231', '#3a1615']}
                  style={{
                    flex: 1,
                    borderTopLeftRadius: 5,
                    borderBottomLeftRadius: 5
                  }}
                >
                  <Text
                    style={{
                      fontFamily: 'Avenir',
                      fontSize: 20,
                      color: '#a39595',
                      alignSelf: 'center'
                    }}
                  >
                    Snapshot
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: '32%',
                  height: '22%',
                  borderLeftWidth: 1,
                  borderColor: 'grey'
                }}
                onPress={() => this.handleSelect('detailed')}
              >
                <LinearGradient
                  colors={['#9a1021', '#6b0b17']}
                  style={{
                    flex: 1,
                    borderTopRightRadius: 5,
                    borderBottomRightRadius: 5
                  }}
                >
                  <Text
                    style={{
                      alignSelf: 'center',
                      fontFamily: 'Avenir',
                      fontSize: 20,
                      color: 'white'
                    }}
                  >
                    Detailed{' '}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4b1818'
  },
  subscreen: {
    height: '85%',
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
