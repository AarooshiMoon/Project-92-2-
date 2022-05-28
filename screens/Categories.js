import React, {Component} from 'react';
import {View, Text,StyleSheet, TouchableOpacity,ImageBackground} from 'react-native';

export default class Categories extends Component{
  render(){
    return(
      <View style={{flex:1}}>
      <ImageBackground style={{flex:1}} source={require('../assets/bg-4.png')}>

      <TouchableOpacity
      style={styles.buttons}
      onPress={()=>this.props.navigation.navigate('Fruits')}>
      <Text style={styles.buttonText}> Fruits </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.buttons}
      onPress={()=>this.props.navigation.navigate('Vegetables')}>
      <Text style={styles.buttonText}> Vegetables </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.buttons}
      onPress={()=>this.props.navigation.navigate('Animals')}>
      <Text style={styles.buttonText}> Animals </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.buttons}
      onPress={()=>this.props.navigation.navigate('Objects')}>
      <Text style={styles.buttonText}> Objects </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.buttons}
      onPress={()=>this.props.navigation.navigate('Mathematical Terms')}>
      <Text style={styles.buttonText}> Mathematical Terms </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.buttons}
      onPress={()=>this.props.navigation.navigate('Scientific Terms')}>
      <Text style={styles.buttonText}> Scientific Terms </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.buttons}
      onPress={()=>this.props.navigation.navigate('Moral Values')}>
      <Text style={styles.buttonText}> Moral Values </Text>
      </TouchableOpacity>
      </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttons:{
    width:300, height:40, backgroundColor:"#6C5B7B", justifyContent:"center",alignSelf:"center",margin:13,
    borderWidth:3, borderColor:"#F67280",
  },
  buttonText:{
    textAlign:"center",
    color:"#fff",
    fontFamily:"Cochin",
  },
})