import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View>
        <Image source={require('./assets/bball.jpeg')} style={{width: 100, height: 100}}/>
        <Text style={styles.container}>Hello, world</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
