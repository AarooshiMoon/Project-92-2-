import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Animals extends Component{
  render(){
    return(
<View style={{ flex:1,overflowY:"scroll",backgroundColor:"#6C5B7B",}}>

      <TouchableOpacity
      style={styles.animalButtons}>
      <Text style={styles.buttonText}> Camel (कैमल) - ऊंट (Uuth) 	</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.animalButtons}>
      <Text style={styles.buttonText}> Turtle (टर्टल)	- कछुआ (Kachua)	 </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.animalButtons}>
      <Text style={styles.buttonText}> Bitch (बिच) - कुतिया (Kuttiya) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.animalButtons}>
      <Text style={styles.buttonText}> Dog (डॉग) - कुत्ता	(Kutta) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.animalButtons}>
      <Text style={styles.buttonText}> Rabbit (रैविट) -	खरगोश(Kharghosh)	</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.animalButtons}>
      <Text style={styles.buttonText}>Donkey (डंकी) - गधा	(Gadha) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.animalButtons}>
      <Text style={styles.buttonText}> Cow (काऊ) - गाय	(Gai) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.animalButtons}>
      <Text style={styles.buttonText}> Horse (हॉर्स) - घोड़ा (Ghoda)	</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.animalButtons}>
      <Text style={styles.buttonText}>Mouse (माउस) - चूहा	(Chuha) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.animalButtons}>
      <Text style={styles.buttonText}> Monkey (मंकी) - बंदर	(Bandar) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.animalButtons}>
      <Text style={styles.buttonText}> Goat (गोट) - बकरी	(Bakri) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.animalButtons}>
      <Text style={styles.buttonText}>	Cat (कैट) - बिल्ली	(Billi) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.animalButtons}>
      <Text style={styles.buttonText}>Ox (आक्स) - बैल	(Bel) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.animalButtons}>
      <Text style={styles.buttonText}> Bear (बिअर) - भालू	(Bhalu) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.animalButtons}>
      <Text style={styles.buttonText}> Buffalo (बफैलो) - भैंस	(Bhains) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.animalButtons}>
      <Text style={styles.buttonText}>Fish (फिस) - मछली	(Machli) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.animalButtons}>
      <Text style={styles.buttonText}> Pig (पिग) - सुअर	(Suer) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.animalButtons}>
      <Text style={styles.buttonText}> Elephant (एलीफेन्ट) - हाथी	(Haathi) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.animalButtons}>
      <Text style={styles.buttonText}> Squirrel (स्क्वरल) - गिलहरी	(Gilhari) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.animalButtons}>
      <Text style={styles.buttonText}> Mole (मोल) - छछूंदर	(Chachundar) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.animalButtons}>
      <Text style={styles.buttonText}> Panther (पैंथर) - तेंदुआ	(Teindua) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.animalButtons}>
      <Text style={styles.buttonText}> Tiger (टाइगर) - बाघ (Baagh) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.animalButtons}>
      <Text style={styles.buttonText}> Wolf (वोल्फ) - भेड़िया	(Bhedia) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.animalButtons}>
      <Text style={styles.buttonText}> Crocodile (क्रोकोडाइल) - मगरमच्छ	(Magarmachch) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.animalButtons}>
      <Text style={styles.buttonText}>Frog (फ्रॉग) - मेढक	(Mendhak) </Text>
      </TouchableOpacity>

      
      <TouchableOpacity
      style={styles.animalButtons}>
      <Text style={styles.buttonText}>Fox (फॉक्स) - लोमड़ी (Lomdi) </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
      style={styles.animalButtons}>
      <Text style={styles.buttonText}>Lion (लायन) - शेर	(Sher) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.animalButtons}>
      <Text style={styles.buttonText}>Deer (डियर) - हिरण (Hiran) </Text>
      </TouchableOpacity>
      

      </View>

    );
  }
}

const styles=StyleSheet.create({
  animalButtons:{
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