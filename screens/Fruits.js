import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button, Image, ImageBackground} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; 

export default class Fruits extends Component{
  render(){
    return(
      <View style={{ flex:1,overflowY:"scroll",backgroundColor:"#6C5B7B",}}>

      <TouchableOpacity
      style={styles.fruitButtons}>
      <Text style={styles.buttonText}> Apple [एप्पल]  – सेब [Seb] </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.fruitButtons}>
      <Text style={styles.buttonText}> Apricot [एप्रीकॉट]  –  खूबानी [Khubani] </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.fruitButtons}>
      <Text style={styles.buttonText}>  Banana [बनाना]  –  केला [ Kela] </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.fruitButtons}>
      <Text style={styles.buttonText}> Blackberry [ब्लैकबेरी]  –  जामुन [Jamun] </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.fruitButtons}>
      <Text style={styles.buttonText}> Coconut [कोकोनट]  –  नारियल [Nariyal] </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.fruitButtons}>
      <Text style={styles.buttonText}> Custard apple [कस्टर्ड एप्पल] –  शरीफा, सीताफल [Shareefa, Sitaphal] </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.fruitButtons}>
      <Text style={styles.buttonText}> Grapes [ग्रेप्स]  –  अंगूर् [Angoor] </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.fruitButtons}>
      <Text style={styles.buttonText}> Guava [गुआवा]  – अमरूद् [Amrood] </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.fruitButtons}>
      <Text style={styles.buttonText}>Lemon, Lime [लेमन, लाइम]  –  नींबू [Nimbu] </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.fruitButtons}>
      <Text style={styles.buttonText}> Mango [मेंगो] –  आम [Aam] </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.fruitButtons}>
      <Text style={styles.buttonText}> Orange [ऑरेंज]  –  नारंगी, संतरा [Narangi , Santra]   </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.fruitButtons}>
      <Text style={styles.buttonText}> Papaya [पापाया]  –  पपीता [Papita] </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.fruitButtons}>
      <Text style={styles.buttonText}> Peach [पीच]  –  आडू [Aadoo] </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.fruitButtons}>
      <Text style={styles.buttonText}>  Pear [पियर]  –  नाशपाती [Nashpati] </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.fruitButtons}>
      <Text style={styles.buttonText}> Pineapple [पाइनएप्पल]  –  अनन्नास [Ananas] </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.fruitButtons}>
      <Text style={styles.buttonText}>Pomegranate [पोमिग्रेनेट]  – अनार् [Anar]</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.fruitButtons}>
      <Text style={styles.buttonText}>  Starfruit [स्टारफ्रूट]  –  कमरख [Karmakh] </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.fruitButtons}>
      <Text style={styles.buttonText}> Water-melon [वाटर-मेलन]  – तरबूज [Tarbuj, Tarbooj]</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.fruitButtons}>
      <Text style={styles.buttonText}> Jujube[जूजूब] - बेर [Baer] </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.fruitButtons}>
      <Text style={styles.buttonText}> Sugarcane [शुगरकेन]- गन्ना </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.fruitButtons}>
      <Text style={styles.buttonText}> Mulberry	[मलबैरी]- शहतूत </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.fruitButtons}>
      <Text style={styles.buttonText}> Custardapple [कस्टर्डएप्पल]- सीताफल </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.fruitButtons}>
      <Text style={styles.buttonText}> Raspberry[रैस्पबैरी] - रसभरी </Text>
      </TouchableOpacity>

      </View>

    )
  }
}

const styles=StyleSheet.create({
  fruitButtons:{
    // width:200, height:80, backgroundColor:"#355C7D",borderColor:"#F67280",borderWidth:3,justifyContent:"Center",margin:5,alignSelf:"center",
        margin:10,
    backgroundColor:"#C06C84",
  },
    buttonText:{
    fontFamily:"Cochin",
    color:"white",
    borderWidth:3,
    borderColor:"#F8B195",
  }
})


