import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links'
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{ backgroundColor: 'pink' }}>
          <Text style={{ color: 'white' }}> nothing yet </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
});