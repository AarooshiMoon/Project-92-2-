import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class ConvertedWordButton extends React.Component{
  render(){
    return(
      <View>
      <TouchableOpacity style={styles.wordButton}>
      <Text style={styles.buttonText}> {this.props.convertedWord}</Text>
      </TouchableOpacity>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  wordButton:{
    width:140,
    height:40,
    justifyContent:"center",
    alignSelf:"center",
    backgroundColor:"pink",
    margin:40,
    borderWidth:3,
    borderColor:"#F67280"
  },
  buttonText:{
    textAlign:"center",
    fontFamily:"cochin",
    fontWeight:"Bold",
    fontSize:20
  }
})