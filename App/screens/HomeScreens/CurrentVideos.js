import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Linking,
  WebView
} from 'react-native';
import YouTube from 'react-native-youtube';
import Modal from 'react-native-modal';
import {
  Icon,
  Button,
  Avatar,
  ListItem,
  Divider,
  Input
} from 'react-native-elements';
import { Card, Text, CardItem, Left, Right, Body } from 'native-base';
import config from 'HowRipeMobile/youTubeConfig';
import LeaderBoard from './LeaderBoard';
import LinearGradient from 'react-native-linear-gradient';

export default class CurrentVideos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isModalVisible: false, isModalVisible2: false };
  }

  openInfo(uri) {
    // const uri = 'https://www.imdb.com/title/tt4575576/';
    return Linking.openURL(uri);
  }
  handleStateChange(e) {
    console.log('e status is =====', e.status);
    this.setState({ status: e.state });
  }
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  toggleModal2 = () => {
    this.setState({ isModalVisible2: !this.state.isModalVisible2 });
  };

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
                  fontFamily: 'avenir',
                  paddingLeft: 5,
                  fontSize: 20
                }}
              >
                Week 3
              </Text>
            </LinearGradient>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#A89C9C',
              flex: 1,
              width: '100%',
              paddingBottom: 15
            }}
          >
            <Card fullWidth transparent style={{ backgroundColor: '#441515' }}>
              <CardItem
                style={{ backgroundColor: '#441515', flexDirection: 'row' }}
              >
                <Text
                  style={{
                    color: '#A89C9C',
                    fontFamily: 'avenir',
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
                    fontFamily: 'avenir',
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
              onChangeState={e => this.handleStateChange(e)}
              onChangeQuality={e => this.setState({ quality: e.quality })}
              onError={e => this.setState({ error: e.error })}
              style={{ alignSelf: 'stretch', height: 300 }}
            />

            <Button
              icon={
                <Icon
                  name="thermometer"
                  type="font-awesome"
                  size={25}
                  color="white"
                  iconStyle={{ marginRight: 10 }}
                />
              }
              buttonStyle={{
                backgroundColor: 'green'
              }}
              title="score this trailer"
              onPress={this.toggleModal}
            />
            <Modal isVisible={this.state.isModalVisible}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'avenir',
                  alignSelf: 'flex-end',
                  fontSize: 20,
                  fontWeight: 'bold'
                }}
              >
                week 2
              </Text>

              <Text
                style={{
                  paddingLeft: 30,
                  color: 'white',
                  alignSelf: 'flex-end',
                  fontFamily: 'avenir',
                  fontSize: 16
                }}
              >
                1/3
              </Text>
              <Text style={{ color: 'white' }}>
                Hello do you see any of this ? !
              </Text>
              <Input
                inputStyle={{ backgroundColor: 'white', width: 80 }}
                inputContainerStyle={{ width: 90, alignSelf: 'center' }}
                rightIcon={
                  <Icon
                    name="percent"
                    type="font-awesome"
                    size={25}
                    color="white"
                  />
                }
              />
              <Button
                buttonStyle={{
                  backgroundColor: '#3e8e41',
                  alignSelf: 'center',
                  marginTop: 10,
                  borderRadius: 5,
                  width: 100
                }}
                title="Score"
                onPress={this.toggleModal}
              />
            </Modal>

            <TouchableOpacity
              onPress={() =>
                this.openInfo('https://www.imdb.com/title/tt4575576/')
              }
            >
              <Text
                style={{
                  color: '#A89C9C',
                  fontFamily: 'avenir',
                  fontSize: 16,
                  textDecorationLine: 'underline',
                  alignSelf: 'center'
                }}
              >
                Learn more about the cast
              </Text>
            </TouchableOpacity>
            <Button
              icon={
                <Icon
                  name="chat"
                  type="entypo"
                  size={25}
                  color="white"
                  iconStyle={{ marginRight: 10 }}
                />
              }
              buttonStyle={{
                backgroundColor: 'orange'
              }}
              title="splatter chatter"
              onPress={this.toggleModal2}
            />
            <Modal isVisible={this.state.isModalVisible2}>
              <Text
                style={{
                  color: '#A89C9C',
                  fontFamily: 'avenir',
                  alignSelf: 'flex-end',
                  fontSize: 20,
                  fontWeight: 'bold'
                }}
              >
                week 2
              </Text>

              <Text
                style={{
                  paddingLeft: 30,
                  color: '#A89C9C',
                  alignSelf: 'flex-end',
                  fontFamily: 'avenir',
                  fontSize: 16
                }}
              >
                1/3
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 35,
                  fontFamily: 'avenir',
                  fontWeight: 'bold',
                  alignSelf: 'center'
                }}
              >
                Score Submitted!
              </Text>
              <Image
                source={require('HowRipeMobile/imageAssets/splatterGreen.png')}
                style={{ width: 50, height: 50 }}
              />
              <Input
                placeholder="enter your splatter chatter here"
                inputContainerStyle={{
                  alignSelf: 'center',
                  height: 100,
                  borderWidth: 3,
                  borderColor: '#3e8e41',
                  backgroundColor: 'white'
                }}
                rightIcon={
                  <Icon
                    name="percent"
                    type="font-awesome"
                    size={25}
                    color="white"
                  />
                }
              />
              <Image
                source={require('HowRipeMobile/imageAssets/splatterGreen.png')}
                style={{ width: 50, height: 50, alignSelf: 'flex-end' }}
              />
              <Button
                buttonStyle={{
                  backgroundColor: '#3e8e41',
                  alignSelf: 'center',
                  marginTop: 10,
                  width: 100,
                  borderRadius: 5
                }}
                title="POST!"
                titleStyle={{ fontFamily: 'avenir', fontWeight: 'bold' }}
                onPress={this.toggleModal2}
              />

              <Button
                buttonStyle={{
                  backgroundColor: '#910f1f',
                  alignSelf: 'center',
                  marginTop: 10,
                  width: 120,
                  borderRadius: 5
                }}
                title="next trailer"
                titleStyle={{ fontFamily: 'avenir', fontWeight: 'bold' }}
                onPress={this.toggleModal2}
              />
            </Modal>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#A89C9C',
              flex: 1,
              width: '100%',
              paddingBottom: 15
            }}
          >
            <Card fullWidth transparent style={{ backgroundColor: '#441515' }}>
              <CardItem
                style={{ backgroundColor: '#441515', flexDirection: 'row' }}
              >
                <Text
                  style={{
                    color: '#A89C9C',
                    fontFamily: 'avenir',
                    alignSelf: 'center',
                    fontSize: 20,
                    fontWeight: 'bold'
                  }}
                >
                  Avengers End Game
                </Text>

                <Text
                  style={{
                    paddingLeft: 30,
                    color: '#A89C9C',
                    alignSelf: 'flex-end',
                    fontFamily: 'avenir',
                    fontSize: 16
                  }}
                >
                  2/3
                </Text>
              </CardItem>
            </Card>
            <YouTube
              videoId={'hA6hldpSTF8'}
              play={false}
              loop={false}
              apiKey={config.API_KEY}
              controls={1}
              onReady={e => this.setState({ isReady: true })}
              onChangeState={e => this.setState({ status: e.state })}
              onChangeQuality={e => this.setState({ quality: e.quality })}
              onError={e => this.setState({ error: e.error })}
              style={{ alignSelf: 'stretch', height: 300 }}
            />
            <TouchableOpacity
              onPress={() =>
                this.openInfo(
                  'https://www.imdb.com/title/tt4154796/?ref_=nv_sr_1?ref_=nv_sr_1'
                )
              }
            >
              <Text
                style={{
                  color: '#A89C9C',
                  fontFamily: 'avenir',
                  fontSize: 20,
                  textDecorationLine: 'underline',
                  alignSelf: 'center'
                }}
              >
                more about the cast
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#A89C9C',
              flex: 1,
              width: '100%',
              paddingBottom: 15
            }}
          >
            <Card fullWidth transparent style={{ backgroundColor: '#441515' }}>
              <CardItem
                style={{ backgroundColor: '#441515', flexDirection: 'row' }}
              >
                <Text
                  style={{
                    color: '#A89C9C',
                    fontFamily: 'avenir',
                    alignSelf: 'center',
                    fontSize: 20,
                    fontWeight: 'bold'
                  }}
                >
                  Shazam
                </Text>

                <Text
                  style={{
                    paddingLeft: 30,
                    color: '#A89C9C',
                    alignSelf: 'flex-end',
                    fontFamily: 'avenir',
                    fontSize: 16
                  }}
                >
                  3/3
                </Text>
              </CardItem>
            </Card>
            <YouTube
              videoId={'-oD7B7oiBtw'}
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
            <TouchableOpacity
              onPress={() =>
                this.openInfo('https://www.imdb.com/title/tt0448115/')
              }
            >
              <Text
                style={{
                  color: '#A89C9C',
                  fontFamily: 'avenir',
                  fontSize: 20,
                  textDecorationLine: 'underline',
                  alignSelf: 'center'
                }}
              >
                more about the cast
              </Text>
            </TouchableOpacity>
          </View>
          <Card fullWidth transparent style={{ backgroundColor: '#441515' }}>
            <CardItem style={{ backgroundColor: '#441515' }}>
              <Text
                style={{
                  color: '#A89C9C',
                  fontFamily: 'avenir',
                  fontSize: 20
                }}
              >
                Film title
              </Text>
              <Text
                style={{
                  color: '#A89C9C',
                  justifyContent: 'flex-end',
                  fontFamily: 'avenir',
                  fontSize: 20
                }}
              >
                3/3
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
            style={{
              color: '#A89C9C',
              fontFamily: 'avenir',
              fontSize: 20,
              alignSelf: 'center'
            }}
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
    backgroundColor: '#441515',
    fontFamily: 'Avenir'
  },
  videoBackground: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink'
  }
});
