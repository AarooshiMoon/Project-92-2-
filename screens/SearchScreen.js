import React, {Component} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity, ImageBackground, Alert} from 'react-native';

import db from '../localdb';
import ConvertedWordButton from '../ConvertedWordButton';

export default class SearchScreen extends Component{
  constructor(){
    super();
    this.state={
      text:"",
      hindiWord:[]
    }
  }
  render(){
    return(
      <View style={{flex:1}}>
      <ImageBackground style= {{flex: 1}}source={require('../assets/bg.png')}>
      
      <Image
      style={{width:170, height:170, alignSelf:"center", top:10}}
      source={require('../assets/parivartanLogo-2.png')}
      />

      <TextInput
      style={{width:250, height:30, borderWidth:2, alignSelf:"center", justifyContent:"center", margin:45,borderColor:"#F67280", color:"#fff", fontFamily:"cochin"}}
      onChangeText={(text)=>{
        this.setState({text:text})
      }}
      placeholder="Enter Your Word Here"
      placeholderTextColor="#fff"
      />
      
      <TouchableOpacity
      style={{width:100, height:40, alignSelf:"center", justifyContent:"center", backgroundColor:"pink",borderWidth:3,borderColor:"#F67280", borderRadius:20, margin:-25,}}
       onPress={()=>{
        var word=this.state.text.toLowerCase().trim();
        db[word]
        ? this.setState({ hindiWord: db[word].hindiWord})
        : Alert.alert("This word doesn't exist in our database")
        }}> 
      <Text style={{textAlign:"Center", fontWeight:"bold", fontSize:25}}> GO </Text>
      </TouchableOpacity>
      <View>
      {this.state.hindiWord.map((item, index)=>{
        return(
          <ConvertedWordButton
          convertedWord={this.state.hindiWord}
          />
        )
      })}
      </View>
      </ImageBackground>

      </View>
    )
  }
}
  
