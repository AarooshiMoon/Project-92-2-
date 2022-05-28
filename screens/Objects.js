import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Objects extends Component{
  render(){
    return(
<View style={{ flex:1,overflowY:"scroll",backgroundColor:"#6C5B7B",}}>

      <TouchableOpacity
      style={styles.objectButtons}>
      <Text style={styles.buttonText}>  Bed – बिस्तर, पलंग	</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.objectButtons}>
      <Text style={styles.buttonText}>Bucket – बाल्टी  	 </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.objectButtons}>
      <Text style={styles.buttonText}>  Candle – मोमबत्ती   </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.objectButtons}>
      <Text style={styles.buttonText}>Carpet – दरी, गलीचा </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.objectButtons}>
      <Text style={styles.buttonText}> Chair – कुर्सी 	</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.objectButtons}>
      <Text style={styles.buttonText}>Comb – कंघी</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.objectButtons}>
      <Text style={styles.buttonText}>Couch – सोफ़ा</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.objectButtons}>
      <Text style={styles.buttonText}> Key – चाबी	</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.objectButtons}>
      <Text style={styles.buttonText}> Lock – ताला </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.objectButtons}>
      <Text style={styles.buttonText}> Pillow – तकिया </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.objectButtons}>
      <Text style={styles.buttonText}>  Roof – छत </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.objectButtons}>
      <Text style={styles.buttonText}>	Stairs – सीढियां </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.objectButtons}>
      <Text style={styles.buttonText}>Table – मेज़</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.objectButtons}>
      <Text style={styles.buttonText}> Iron – इस्त्री </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.objectButtons}>
      <Text style={styles.buttonText}>Quilt – रजाई,लिहाफ </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.objectButtons}>
      <Text style={styles.buttonText}>Rope – रस्सा </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.objectButtons}>
      <Text style={styles.buttonText}> Ash – राख</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.objectButtons}>
      <Text style={styles.buttonText}>Table Desk – लेखनाधार</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.objectButtons}>
      <Text style={styles.buttonText}>Pen – कलम/लेखनी </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.objectButtons}>
      <Text style={styles.buttonText}> Bowl – कटोरा, डोंगा </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.objectButtons}>
      <Text style={styles.buttonText}>Phial – शीशी </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.objectButtons}>
      <Text style={styles.buttonText}>Box – सन्दूक </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.objectButtons}>
      <Text style={styles.buttonText}>  Fork – कांटा </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.objectButtons}>
      <Text style={styles.buttonText}> Spoon – चमचा </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.objectButtons}>
      <Text style={styles.buttonText}> Stick – छड़ी	(Lambaee) </Text>
      </TouchableOpacity>

      
      <TouchableOpacity
      style={styles.objectButtons}>
      <Text style={styles.buttonText}>Umbrella – छाता</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
      style={styles.objectButtons}>
      <Text style={styles.buttonText}>Cup – प्याला </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.objectButtons}>
      <Text style={styles.buttonText}> Chandelier – फानूस/झूमर</Text>
      </TouchableOpacity>
         
      <TouchableOpacity
      style={styles.objectButtons}>
      <Text style={styles.buttonText}> Chandelier – फानूस/झूमर</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.objectButtons}>
      <Text style={styles.buttonText}> Soap – साबुन</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.objectButtons}>
      <Text style={styles.buttonText}> Needle – सुई</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
      style={styles.objectButtons}>
      <Text style={styles.buttonText}>  Mortar – ओखली</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.objectButtons}>
      <Text style={styles.buttonText}> Cauldron – कढ़ाई</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.objectButtons}>
      <Text style={styles.buttonText}> Tree - पेड़</Text>
      </TouchableOpacity>
    
      </View>

    );
  }
}

const styles=StyleSheet.create({
  objectButtons:{
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