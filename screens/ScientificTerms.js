import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class ScientificTerms extends Component{
  render(){
    return(
<View style={{ flex:1,overflowY:"scroll",backgroundColor:"#6C5B7B",}}>

      <TouchableOpacity
      style={styles.sciTermButtons}>
      <Text style={styles.buttonText}> Absolute - पूर्ण (Purdn)	</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.sciTermButtons}>
      <Text style={styles.buttonText}> Advance - 	उन्नत (Unnat)  	 </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.sciTermButtons}>
      <Text style={styles.buttonText}> Angle - कोण (Kordn)   </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.sciTermButtons}>
      <Text style={styles.buttonText}>Brain - मस्तिष्क (Mastisk) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.sciTermButtons}>
      <Text style={styles.buttonText}>Calculate -	गणना (Garna) 	</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.sciTermButtons}>
      <Text style={styles.buttonText}>Dissolve - भंग (Bhang) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.sciTermButtons}>
      <Text style={styles.buttonText}>Examination - परीक्षा	(Pariksha) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.sciTermButtons}>
      <Text style={styles.buttonText}> Mass - वजन (Vajan)	</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.sciTermButtons}>
      <Text style={styles.buttonText}> Precipitation - वर्षा (Varsha) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.sciTermButtons}>
      <Text style={styles.buttonText}> Rocket  - राकेट  (Rocket) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.sciTermButtons}>
      <Text style={styles.buttonText}> Species  - जाति (Jaati) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.sciTermButtons}>
      <Text style={styles.buttonText}>	Substance - पदार्थ (Padarth) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.sciTermButtons}>
      <Text style={styles.buttonText}>Absorb - अवशोषित (PancAvshoshithbhuj) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.sciTermButtons}>
      <Text style={styles.buttonText}> Atmosphere - वायु-मंडल (Vayu-mandal) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.sciTermButtons}>
      <Text style={styles.buttonText}> Bolt - गाज(Gaaj) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.sciTermButtons}>
      <Text style={styles.buttonText}>Classification - वर्गीकरण (Vargikaradn) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.sciTermButtons}>
      <Text style={styles.buttonText}> Experiment - परीक्षण	(Parikshadn) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.sciTermButtons}>
      <Text style={styles.buttonText}> Explore - खोजना (Khojna) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.sciTermButtons}>
      <Text style={styles.buttonText}> Measurement - माप (Maap) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.sciTermButtons}>
      <Text style={styles.buttonText}> Planet  - ग्रह	(Grah) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.sciTermButtons}>
      <Text style={styles.buttonText}> Quantity  - मात्रा	(Maatra) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.sciTermButtons}>
      <Text style={styles.buttonText}> Matter  - पदार्थ (Padarth) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.sciTermButtons}>
      <Text style={styles.buttonText}> Motion  - गति (Gati) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.sciTermButtons}>
      <Text style={styles.buttonText}> Perimeter -परिमाप (Parimaap) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.sciTermButtons}>
      <Text style={styles.buttonText}>Length - लंबाई	(Lambaee) </Text>
      </TouchableOpacity>

      
      <TouchableOpacity
      style={styles.sciTermButtons}>
      <Text style={styles.buttonText}>Width - चौड़ाई (Chaudaee) </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
      style={styles.sciTermButtons}>
      <Text style={styles.buttonText}>Breadth - चौड़ाई 	(Chaudaee) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.sciTermButtons}>
      <Text style={styles.buttonText}>Height - ऊंचाई (Oonchaee) </Text>
      </TouchableOpacity>
      

      </View>

    );
  }
}

const styles=StyleSheet.create({
  sciTermButtons:{
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