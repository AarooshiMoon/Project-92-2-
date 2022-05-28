import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class MoralValues extends Component{
  render(){
    return(
<View style={{ flex:1,overflowY:"scroll",backgroundColor:"#6C5B7B",}}>

      <TouchableOpacity
      style={styles.moralButtons}>
      <Text style={styles.buttonText}> Determination – दृढ़ निश्चय	</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.moralButtons}>
      <Text style={styles.buttonText}> Faith – श्रद्धा  	 </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.moralButtons}>
      <Text style={styles.buttonText}> Happiness – ख़ुशी   </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.moralButtons}>
      <Text style={styles.buttonText}>Honesty – ईमानदारी </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.moralButtons}>
      <Text style={styles.buttonText}> Justice – न्याय 	</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.moralButtons}>
      <Text style={styles.buttonText}>Kindness – दयालुता</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.moralButtons}>
      <Text style={styles.buttonText}>Knowledge – ज्ञान</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.moralButtons}>
      <Text style={styles.buttonText}> Love – प्रेम	</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.moralButtons}>
      <Text style={styles.buttonText}> Loyalty – निष्ठा </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.moralButtons}>
      <Text style={styles.buttonText}> Poise – संतुलन </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.moralButtons}>
      <Text style={styles.buttonText}> Respect – आदर </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.moralButtons}>
      <Text style={styles.buttonText}> Responsibility – ज़िम्मेदारी </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.moralButtons}>
      <Text style={styles.buttonText}> Selfrespect – आत्म सम्मान</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.moralButtons}>
      <Text style={styles.buttonText}> Service – सेवा </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.moralButtons}>
      <Text style={styles.buttonText}> Success – सफलता </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.moralButtons}>
      <Text style={styles.buttonText}> Wisdom – बुद्धिमत्ता</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.moralButtons}>
      <Text style={styles.buttonText}> Compassion – दया</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.moralButtons}>
      <Text style={styles.buttonText}> Autonomy – स्वायत्तता</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.moralButtons}>
      <Text style={styles.buttonText}> Competency – क्षमता </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.moralButtons}>
      <Text style={styles.buttonText}> Growth – वृद्धि </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.moralButtons}>
      <Text style={styles.buttonText}> Security – सुरक्षा </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.moralButtons}>
      <Text style={styles.buttonText}> Discipline – अनुशासन </Text>
      </TouchableOpacity>

      </View>

    );
  }
}

const styles=StyleSheet.create({
  moralButtons:{
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