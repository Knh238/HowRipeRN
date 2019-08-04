import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Linking,
  WebView,
  ImageBackground
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
import config from '../../../youTubeConfig';
import LeaderBoardScreen from './LeaderBoard';
import LinearGradient from 'react-native-linear-gradient';

export default class CurrentVideos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      isModalVisible2: false,
      scored: true,
      chatted: false
    };
    this.renderScoreModal = this.renderScoreModal.bind(this);
    this.renderSplatterModal = this.renderSplatterModal.bind(this);
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

  renderScoreModal() {
    return (
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
          WEEK 2
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
          1/2
        </Text>

        <Image
          source={require('HowRipeMobile/imageAssets/ThermometerScoreSubmission.png')}
          style={{ width: 330, height: 40 }}
          resizeMode="contain"
        />
        <Input
          inputStyle={{
            width: 80,
            fontSize: 20,
            fontWeight: 'bold',
            color: '#910f1f'
          }}
          inputContainerStyle={{
            width: 90,
            marginTop: 20,
            alignSelf: 'center',
            borderColor: '#910f1f',
            borderWidth: 1,
            backgroundColor: 'white'
          }}
          rightIcon={
            <Icon
              name="percent"
              type="font-awesome"
              size={25}
              color="#910f1f"
            />
          }
        />
        <Button
          buttonStyle={{
            backgroundColor: '#3e8e41',
            alignSelf: 'center',
            marginTop: 20,
            borderRadius: 5,
            width: 100
          }}
          title="Submit!"
          titleStyle={{ fontWeight: 'bold', fontFamily: 'avenir' }}
          onPress={this.toggleModal}
        />
      </Modal>
    );
  }
  renderSplatterModal() {
    return (
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
          1/2
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
            <Icon name="percent" type="font-awesome" size={25} color="white" />
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
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <ImageBackground
          source={require('HowRipeMobile/imageAssets/SplatterBackground.png')}
          style={{
            width: '100%',
            height: '100%'
          }}
          overflow="hidden"
          resizeMode="contain"
        >
          <LeaderBoardScreen />
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
                // flexWrap: 'wrap',
                height: '2%',
                justifyContent: 'space-around',
                backgroundColor: '#4b1818'
              }}
            >
              <LinearGradient
                colors={['#6b3535', '#5b2d2d', '#492424']}
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  justifyContent: 'space-between'
                }}
              >
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'Avenir',
                    paddingLeft: 8,
                    fontSize: 22,
                    fontWeight: '800'
                  }}
                >
                  WEEK 3
                </Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row'
                  }}
                >
                  <Icon name="check-circle" type="material" color="green" />
                  <Icon name="cancel" type="material" color="red" />
                </View>
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
              <Card
                fullWidth
                transparent
                style={{ backgroundColor: '#3c1715' }}
              >
                <CardItem
                  style={{
                    backgroundColor: '#3c1715',
                    flexDirection: 'row',
                    justifyContent: 'center'
                  }}
                >
                  <Text
                    style={{
                      color: '#A39595',
                      fontFamily: 'Avenir',
                      alignSelf: 'center',
                      fontSize: 22,
                      fontWeight: 'bold'
                    }}
                  >
                    Avengers End Game
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
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignContent: 'center'
                }}
              >
                <Input
                  inputStyle={{
                    width: 80,
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'white'
                  }}
                  inputContainerStyle={{
                    width: 90,
                    marginTop: 20,
                    alignSelf: 'center',
                    backgroundColor: '#6E3737'
                  }}
                  // rightIcon={
                  //   <Icon
                  //     name="percent"
                  //     type="font-awesome"
                  //     size={25}
                  //     color="white"
                  //   />
                  // }
                />
              </View>
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
              <Card
                fullWidth
                transparent
                style={{ backgroundColor: '#3c1715' }}
              >
                <CardItem
                  style={{
                    backgroundColor: '#3c1715',
                    flexDirection: 'row',
                    justifyContent: 'center'
                  }}
                >
                  <Text
                    style={{
                      color: '#A39595',
                      fontFamily: 'Avenir',
                      alignSelf: 'center',
                      fontSize: 22,
                      fontWeight: 'bold'
                    }}
                  >
                    Aladdin(2019)
                  </Text>
                </CardItem>
              </Card>
              <YouTube
                videoId={'foyufD52aog'}
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
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontFamily: 'avenir',
                    color: 'white',
                    fontSize: 16,
                    fontWeight: 'bold'
                  }}
                >
                  Scored:{' '}
                </Text>
                {this.state.scored ? (
                  <Icon name="check-circle" type="material" color="green" />
                ) : (
                  <Icon name="cancel" type="material" color="red" />
                )}
              </View>
              <Button
                type="outline"
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
                  borderColor: 'white'
                }}
                title="score this trailer"
                titleStyle={{ color: 'white' }}
                onPress={this.toggleModal}
              />
              {this.renderScoreModal()}

              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontFamily: 'avenir',
                    color: 'white',
                    fontSize: 16,
                    fontWeight: 'bold'
                  }}
                >
                  {' '}
                  Chatter:{' '}
                </Text>
                {this.state.chatted ? (
                  <Icon name="check-circle" type="material" color="green" />
                ) : (
                  <Icon name="cancel" type="material" color="red" />
                )}
              </View>
              <Button
                type="outline"
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
                  borderColor: 'white'
                }}
                title="splatter chatter"
                titleStyle={{ color: 'white' }}
                onPress={this.toggleModal2}
              />
              {this.renderSplatterModal()}
              <TouchableOpacity
                onPress={() =>
                  this.openInfo('https://www.imdb.com/title/tt6139732/')
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
            <Card fullWidth transparent style={{ backgroundColor: '#3c1715' }}>
              <CardItem style={{ backgroundColor: '#3c1715' }}>
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
        </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3c1715',
    fontFamily: 'Avenir'
  },
  videoBackground: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink'
  }
});
