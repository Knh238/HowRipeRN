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
          <List>
            <ListItem>
              <LinearGradient
                colors={['#6b3535', '#5b2d2d', '#492424']}
                style={styles.linearGradient}
              >
                <Body>
                  <Thumbnail
                    style={{ marginTop: 5, alignSelf: 'flex-start' }}
                    source={{ uri: 'https://loremflickr.com/320/240' }}
                  />
                  <Text
                    style={{
                      color: '#A89C9C',
                      fontSize: 20,
                      alignSelf: 'center'
                    }}
                  >
                    author
                  </Text>
                  <Text
                    style={{
                      color: '#A89C9C',
                      fontSize: 18,
                      alignSelf: 'center'
                    }}
                  >
                    Chatter
                  </Text>
                  <Button
                    type="clear"
                    style={{ alignSelf: 'flex-end' }}
                    icon={
                      <Icon
                        type="font-awesome"
                        name="thumbs-up"
                        size={20}
                        color="white"
                      />
                    }
                    title=" 6"
                    titleStyle={{ color: 'white' }}
                  />
                </Body>
              </LinearGradient>
            </ListItem>

            <ListItem>
              <LinearGradient
                colors={['#6b3535', '#5b2d2d', '#492424']}
                style={styles.linearGradient}
              >
                <Body>
                  <Thumbnail
                    style={{ marginTop: 5, alignSelf: 'flex-start' }}
                    source={{ uri: 'https://loremflickr.com/320/240' }}
                  />
                  <Text
                    style={{
                      color: '#A89C9C',
                      fontSize: 20,
                      alignSelf: 'center'
                    }}
                  >
                    author
                  </Text>
                  <Text
                    style={{
                      color: '#A89C9C',
                      fontSize: 18,
                      alignSelf: 'center'
                    }}
                  >
                    Chatter
                  </Text>
                  <Button
                    type="clear"
                    style={{ alignSelf: 'flex-end' }}
                    icon={
                      <Icon
                        type="font-awesome"
                        name="thumbs-up"
                        size={20}
                        color="white"
                      />
                    }
                    title=" 6"
                    titleStyle={{ color: 'white' }}
                  />
                </Body>
              </LinearGradient>
            </ListItem>
          </List>
          {/* </View> */}
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
    borderRadius: 5
  }
});
