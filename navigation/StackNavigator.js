import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Categories from "../screens/Categories";
import Fruits from "../screens/Fruits";
import Vegetables from "../screens/Vegetables";
import Animals from "../screens/Animals";
import Objects from "../screens/Objects";
import MathTerms from "../screens/MathTerms";
import ScientificTerms from "../screens/ScientificTerms";
import MoralValues from "../screens/MoralValues";

const Stack=createStackNavigator();

const StackNavigator=()=>{
  return(
    <Stack.Navigator
    initialRouteName="Categories"
    >
    <Stack.Screen name="Moral Values" component={MoralValues}/>
    <Stack.Screen name="Mathematical Terms" component={MathTerms}/>
    <Stack.Screen name="Scientific Terms" component={ScientificTerms}/>
    <Stack.Screen name="Fruits" component={Fruits}/>
    <Stack.Screen name="Animals" component={Animals}/>
    <Stack.Screen name="Objects" component={Objects}/>
    <Stack.Screen name="Vegetables" component={Vegetables}/>
    <Stack.Screen name="Categories" component={Categories}/>
   

    </Stack.Navigator>
  )
}

export default StackNavigator;