import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class MathematicalTerms extends Component{
  render(){
    return(
<View style={{ flex:1,overflowY:"scroll",backgroundColor:"#6C5B7B",}}>

      <TouchableOpacity
      style={styles.mathTermButtons}>
      <Text style={styles.buttonText}> Addition - जोड़ (Jodna)	</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.mathTermButtons}>
      <Text style={styles.buttonText}> Subtraction - घटाना (Ghataana)  	 </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.mathTermButtons}>
      <Text style={styles.buttonText}> Multiplication - गुणन (Gunan)   </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.mathTermButtons}>
      <Text style={styles.buttonText}>Division - विभाजन (Vibhajan) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.mathTermButtons}>
      <Text style={styles.buttonText}>Fraction -	भिन्‍न (Bhinna) 	</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.mathTermButtons}>
      <Text style={styles.buttonText}>Decimal - दशमलव (Dashmalav) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.mathTermButtons}>
      <Text style={styles.buttonText}>Algebra - बीजगणित	(Beejganit) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.mathTermButtons}>
      <Text style={styles.buttonText}> Circle   -वृत्त (Vritt)	</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.mathTermButtons}>
      <Text style={styles.buttonText}> Rectangle - आयत (Aayat ) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.mathTermButtons}>
      <Text style={styles.buttonText}> Square  - वर्ग  (Varg  ) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.mathTermButtons}>
      <Text style={styles.buttonText}> Triangle  - त्रिकोण (Trikon) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.mathTermButtons}>
      <Text style={styles.buttonText}>	Hexagon - ष‌ट्भुज (Shatbhuj ) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.mathTermButtons}>
      <Text style={styles.buttonText}>Pentagon - पंचभुज (Panchbhuj) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.mathTermButtons}>
      <Text style={styles.buttonText}> Tetragon - चतुर्भुज (Bhalu) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.mathTermButtons}>
      <Text style={styles.buttonText}> Heptagon - सप्तभुज(Saptbhuj ) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.mathTermButtons}>
      <Text style={styles.buttonText}>Polygon - बहुभुज (Bahubhuj) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.mathTermButtons}>
      <Text style={styles.buttonText}> Quadrilateral - चतुर्भुज	(Chaturbhuj) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.mathTermButtons}>
      <Text style={styles.buttonText}> Sphere - गोला (Gola) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.mathTermButtons}>
      <Text style={styles.buttonText}> Cube - घन (Ghan) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.mathTermButtons}>
      <Text style={styles.buttonText}> Cuboid  - घनाभ	(Ghanaabh) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.mathTermButtons}>
      <Text style={styles.buttonText}> Cone  - शंकु	(Shanku) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.mathTermButtons}>
      <Text style={styles.buttonText}> Factor  - गुणनखंड (Gunankhand) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.mathTermButtons}>
      <Text style={styles.buttonText}> Area  - क्षेत्र (Kshetr) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.mathTermButtons}>
      <Text style={styles.buttonText}> Perimeter -परिमाप (Parimaap) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.mathTermButtons}>
      <Text style={styles.buttonText}>Length - लंबाई	(Lambaee) </Text>
      </TouchableOpacity>

      
      <TouchableOpacity
      style={styles.mathTermButtons}>
      <Text style={styles.buttonText}>Width - चौड़ाई (Chaudaee) </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
      style={styles.mathTermButtons}>
      <Text style={styles.buttonText}>Breadth - चौड़ाई 	(Chaudaee) </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.mathTermButtons}>
      <Text style={styles.buttonText}>Height - ऊंचाई (Oonchaee) </Text>
      </TouchableOpacity>
      

      </View>

    );
  }
}

const styles=StyleSheet.create({
  mathTermButtons:{
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