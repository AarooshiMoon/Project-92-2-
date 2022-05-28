import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Vegetables extends Component{
  render(){
    return(
      <View style={{ flex:1,overflowY:"scroll",backgroundColor:"#6C5B7B",}}>

      <TouchableOpacity
      style={styles.veggieButtons}>
      <Text style={styles.buttonText}> Tomato (टोमेटो) - टमाटर (Tamatar)</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.veggieButtons}>
      <Text style={styles.buttonText}> Onion (ऑनियन) -	प्याज (Pyaj) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.veggieButtons}>
      <Text style={styles.buttonText}>  Potato (पोटैटो) - आलू (Aaloo) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.veggieButtons}>
      <Text style={styles.buttonText}> Spinach (स्पिनच) - पालक (Palak) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.veggieButtons}>
      <Text style={styles.buttonText}> Pumpkin (पम्पकिन) - घिया, कद्दू (Ghiya, Kaddu) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.veggieButtons}>
      <Text style={styles.buttonText}>Garlic (गार्लिक) - लहशुन (Lahshun) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.veggieButtons}>
      <Text style={styles.buttonText}> Ginger (जिंजर) - अदरक (Adarak) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.veggieButtons}>
      <Text style={styles.buttonText}> Lady Finger (लेडी फिंगर) - भिन्डी (Bhindee) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.veggieButtons}>
      <Text style={styles.buttonText}>Mushroom (मशरूम) - कुम्भी, खुखड़ी (Kumbhi, Khukhdi)</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.veggieButtons}>
      <Text style={styles.buttonText}> Maize/corn (माईज/कौर्न) - मक्का (Makka) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.veggieButtons}>
      <Text style={styles.buttonText}> Cauliflower (कॉलीफ्लॉवर) - फूल गोभी (Phool Gobhi)  </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.veggieButtons}>
      <Text style={styles.buttonText}> Carrot (कैरट) - गाजर (Gajar) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.veggieButtons}>
      <Text style={styles.buttonText}> Capsicum (कैप्सिकम) - शिमला मिर्च (Shimla Mirch)</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.veggieButtons}>
      <Text style={styles.buttonText}> Cabbage (कैबेज) - पत्ता गोभी (Patta Gobhi)</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.veggieButtons}>
      <Text style={styles.buttonText}> Brinjal (ब्रिंजल) - बैगन (Baigan) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.veggieButtons}>
      <Text style={styles.buttonText}>Cluster Beans (क्लस्टर-बीन्स) – गवार फली[Gawar-Falli]</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.veggieButtons}>
      <Text style={styles.buttonText}>  	Peas (पीज) - मटर (Matar) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.veggieButtons}>
      <Text style={styles.buttonText}> 	Sweet Potato (स्वीट पोटैटो)	- शकरकंद (Shakarkand)</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.veggieButtons}>
      <Text style={styles.buttonText}> Bottle Gourd (बोटल गार्ड) - लौकी, कद्दू, घिया (Lauki, Ghiya, Kaddu) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.veggieButtons}>
      <Text style={styles.buttonText}> Bitter Gourd (बिटर गार्ड) - करेला (Karela) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.veggieButtons}>
      <Text style={styles.buttonText}> Beetroot (बीटरूट) - चकुंदर (Chakundar) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.veggieButtons}>
      <Text style={styles.buttonText}> Cucumber (कुकुम्बर) -	ककड़ी (Kakdi) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.veggieButtons}>
      <Text style={styles.buttonText}> Garbanzo Beans [गारबानजो बीन्स] - चना (Chana) </Text>
      </TouchableOpacity>

      </View>

    );
  }
}

const styles=StyleSheet.create({
  veggieButtons:{
    // width:200, height:80, backgroundColor:"#355C7D",borderColor:"#F67280",borderWidth:3,justifyContent:"Center",margin:5,alignSelf:"center",
    margin:10,
    backgroundColor:"#C06C84",
  },
    buttonText:{
    fontFamily:"Cochin",
    color:"white",
    borderWidth:2,
    borderColor:"#F8B195",
  }
})