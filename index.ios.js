/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
Image
} from 'react-native';

var MOCKED_MOVIES_DATA = [
	{title: '标题',year: '2015',posters:{thumbnail:'http://i.imgur.com/UePbdph.jpg'}},
];

class rnOne extends Component {
  render() {
	var movie = MOCKED_MOVIES_DATA[0];
    return (
      <View style={styles.container}>
	
	<Image
	 style={styles.thumbnail}
	 source={{uri:movie.posters.thumbnail}}
	/>
	<View style={styles.rightContainer}>
		<Text style={styles.welcome}>{movie.title}</Text>
		<Text style={styles.welcome}>{movie.year}</Text>
	</View>
        
      </View>
	
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  thumbnail:{
	width:53,
	height:81
  },
	rightContainer:{
		flex:1,
	},
});

AppRegistry.registerComponent('rnOne', () => rnOne);
