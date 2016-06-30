/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
} from 'react-native';

var MOVIES_DATA = [
  {title:'title',year:'2015',posters:{thumbnail:'http://i.imgur.com/UePbdph.jpg'}},
];
var REQUEST_URL = "https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json";


class rnOne extends Component {

  constructor(props){
    super(props);
    this.state = {
      movie:null,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1,row2) => row1 !== row2,
      }),
      loaded: false,  
    };
      
      //this.fetchData = this.fetchData.bind(this);
      
  }

  componentDidMount() {
    this.fetchData();
  }
  
  fetchData() {
    fetch(REQUEST_URL)
	.then((response) => response.json())
	.then((responseData) => {
	  this.setState({
	    dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
	    loaded:true,
	    movies: responseData.movies,
	  });
	})
	.done();
  }

  render() {

	if(!this.state.movies){
    	  return this.renderLoadingView();
	}
	var movie = this.state.movies[0];
	
	//return this.renderMovie(movie);
	return (
	  <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderMovie}
            style={styles.ListView}
	  />
	);
  }
	
	renderLoadingView(){
	  return (
	    <View style={styles.container}>
	      <Text>
              正在加载数据。。。。。
	      </Text>
	    </View>
 	  );
	}

	//var movie = MOVIES_DATA[0];
   renderMovie(movie){
    return (

   	 <View style={styles.container}>
 	   
	   <Image source={{uri: movie.posters.thumbnail}} style={styles.thumbnail}/>

       <View style={styles.rightContainer}>
	     <Text style={styles.title}>{movie.title}</Text>
	     <Text style={styles.year}>{movie.year}</Text>
		
	   </View>

	 </View>	
 
      
    );
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
   title: {
     fontSize: 20,
     marginBottom: 8,
     textAlign: 'center',
   },
  year: {
    textAlign: 'center',
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
  thumbnail: {
    width:53,height: 81,
  },
  rightContainer:{
    flex:1,
  }

});

AppRegistry.registerComponent('rnOne', () => rnOne);
