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
import YouTube from 'react-native-youtube';
import { Icon, Button, Avatar, ListItem } from 'react-native-elements';
import config from 'HowRipeMobile/youTubeConfig';

export default class CurrentVideos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'pink'
          }}
        >
          <Text style={{ color: 'white' }}> trailers go here here</Text>
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
