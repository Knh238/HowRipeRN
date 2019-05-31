import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import {
  ListItem,
  Left,
  Right,
  Body,
  Card,
  CardItem,
  Thumbnail,
  List,
  Text
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { Icon, Button, Avatar } from 'react-native-elements';

export default class Chatter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View
          style={{
            backgroundColor: '#441515',
            marginLeft: 10,
            marginRight: 10
          }}
        >
          <LinearGradient
            colors={['#6b3535', '#5b2d2d', '#492424']}
            style={styles.linearGradient}
          >
            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: '20%', flex: 1, marginTop: 5 }}>
                <Thumbnail
                  style={{ marginTop: 5 }}
                  source={{ uri: 'https://loremflickr.com/320/240' }}
                />
              </View>
              <View style={{ width: '80%', marginTop: 5 }}>
                <Text
                  style={{
                    color: '#A89C9C',
                    fontSize: 18,
                    fontFamily: 'Avenir'
                  }}
                >
                  Bailey
                </Text>
                <Text
                  style={{
                    color: '#A89C9C',
                    fontSize: 18,
                    fontFamily: 'Avenir'
                  }}
                >
                  I want more Eeyore!
                </Text>
                <Button
                  type="clear"
                  style={{ alignSelf: 'flex-end' }}
                  icon={
                    <Icon
                      type="font-awesome"
                      name="thumbs-up"
                      size={24}
                      color="white"
                    />
                  }
                  title=" 6"
                  titleStyle={{ color: 'white' }}
                />
              </View>
            </View>
          </LinearGradient>

          <Text style={{ color: '#A89C9C', alignSelf: 'center', fontSize: 14 }}>
            <Image
              source={require('HowRipeMobile/imageAssets/crown.png')}
              style={{ width: 30, height: 30 }}
            />
            SPLATTER MASTER: Molly
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
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    borderWidth: 0.5
  }
});
