import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  // Text,
  TouchableOpacity,
  View
} from 'react-native';
import YouTube from 'react-native-youtube';
import { Icon, Button, Avatar, ListItem } from 'react-native-elements';
import { Card, Text, CardItem, Left, Right, Body } from 'native-base';
import config from 'HowRipeMobile/youTubeConfig';
import LeaderBoard from './LeaderBoard';
import LinearGradient from 'react-native-linear-gradient';

export default class CurrentVideos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <LeaderBoard />
        <View
          style={{
            flex: 1,
            paddingTop: 10,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              height: '2%',
              justifyContent: 'center',
              backgroundColor: '#4b1818'
            }}
          >
            <LinearGradient
              colors={['#6b3535', '#5b2d2d', '#492424']}
              style={{
                flex: 1,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'NotoSans',
                  paddingLeft: 5,
                  fontSize: 20
                }}
              >
                Week 3
              </Text>
            </LinearGradient>
          </View>
          <Card fullWidth transparent style={{ backgroundColor: '#441515' }}>
            <CardItem
              style={{ backgroundColor: '#441515', flexDirection: 'row' }}
            >
              <Text
                style={{
                  color: '#A89C9C',
                  fontFamily: 'NotoSans',
                  alignSelf: 'center',
                  fontSize: 20,
                  fontWeight: 'bold'
                }}
              >
                Christopher Robin
              </Text>

              <Text
                style={{
                  paddingLeft: 30,
                  color: '#A89C9C',
                  alignSelf: 'flex-end',
                  fontFamily: 'NotoSans',
                  fontSize: 16
                }}
              >
                1/3
              </Text>
            </CardItem>
          </Card>

          <YouTube
            videoId={'0URpDxIjZrQ'}
            play={false}
            // fullscreen={true}
            loop={false}
            apiKey={config.API_KEY}
            controls={1}
            onReady={e => this.setState({ isReady: true })}
            onChangeState={e => this.setState({ status: e.state })}
            onChangeQuality={e => this.setState({ quality: e.quality })}
            onError={e => this.setState({ error: e.error })}
            style={{ alignSelf: 'stretch', height: 300 }}
          />
          <Text
            style={{
              color: '#A89C9C',
              fontFamily: 'NotoSans',
              fontSize: 20,
              textDecorationLine: 'underline'
            }}
          >
            more about the cast
          </Text>
          <Card fullWidth transparent style={{ backgroundColor: '#441515' }}>
            <CardItem style={{ backgroundColor: '#441515' }}>
              <Text
                style={{
                  color: '#A89C9C',
                  fontFamily: 'NotoSans',
                  fontSize: 20
                }}
              >
                Film title
              </Text>
              <Text
                style={{
                  color: '#A89C9C',
                  justifyContent: 'flex-end',
                  fontFamily: 'NotoSans',
                  fontSize: 20
                }}
              >
                1/3
              </Text>
            </CardItem>
          </Card>

          <YouTube
            videoId={'CtWoJ-YhTeg'}
            play={false}
            // fullscreen={true}
            loop={false}
            apiKey={config.API_KEY}
            controls={1}
            onReady={e => this.setState({ isReady: true })}
            onChangeState={e => this.setState({ status: e.state })}
            onChangeQuality={e => this.setState({ quality: e.quality })}
            onError={e => this.setState({ error: e.error })}
            style={{ alignSelf: 'stretch', height: 300 }}
          />
          <Text
            style={{ color: '#A89C9C', fontFamily: 'NotoSans', fontSize: 20 }}
          >
            more about the cast
          </Text>
          <Card fullWidth transparent style={{ backgroundColor: '#441515' }}>
            <CardItem style={{ backgroundColor: '#441515' }}>
              <Text
                style={{
                  color: '#A89C9C',
                  fontFamily: 'NotoSans',
                  fontSize: 20
                }}
              >
                Film title
              </Text>
              <Text
                style={{
                  color: '#A89C9C',
                  alignSelf: 'flex-end',
                  fontFamily: 'NotoSans',
                  fontSize: 20
                }}
              >
                2/3
              </Text>
            </CardItem>
          </Card>
          <YouTube
            videoId={'BunklIatIK4'}
            play={false}
            // fullscreen={true}
            loop={false}
            apiKey={config.API_KEY}
            controls={1}
            onReady={e => this.setState({ isReady: true })}
            onChangeState={e => this.setState({ status: e.state })}
            onChangeQuality={e => this.setState({ quality: e.quality })}
            onError={e => this.setState({ error: e.error })}
            style={{ alignSelf: 'stretch', height: 300 }}
          />
          <Text
            style={{ color: '#A89C9C', fontFamily: 'NotoSans', fontSize: 20 }}
          >
            more about the cast
          </Text>
          <Card fullWidth transparent style={{ backgroundColor: '#441515' }}>
            <CardItem style={{ backgroundColor: '#441515' }}>
              <Text
                style={{
                  color: '#A89C9C',
                  fontFamily: 'NotoSans',
                  fontSize: 20
                }}
              >
                Film title
              </Text>
              <Text
                style={{
                  color: '#A89C9C',
                  justifyContent: 'flex-end',
                  fontFamily: 'NotoSans',
                  fontSize: 20
                }}
              >
                3/3
              </Text>
            </CardItem>
          </Card>

          <YouTube
            videoId={'YAU6omaYU6U'}
            play={false}
            // fullscreen={true}
            loop={false}
            apiKey={config.API_KEY}
            controls={1}
            onReady={e => this.setState({ isReady: true })}
            onChangeState={e => this.setState({ status: e.state })}
            onChangeQuality={e => this.setState({ quality: e.quality })}
            onError={e => this.setState({ error: e.error })}
            style={{ alignSelf: 'stretch', height: 300 }}
          />
          <Text
            style={{ color: '#A89C9C', fontFamily: 'NotoSans', fontSize: 20 }}
          >
            more about the cast
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
  },
  videoBackground: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink'
  }
});
