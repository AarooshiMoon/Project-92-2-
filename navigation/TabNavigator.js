import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SearchScreen from '../screens/SearchScreen';
import Categories from '../screens/Categories';
import StackNavigator from "./StackNavigator";

const Tab=createBottomTabNavigator();

const BottomTabNavigator=()=>{
  return(
    <Tab.Navigator
    screenOptions={({route})=>({
      tabBarIcon:({focused, color, size})=>{
        let iconName;
        if(route.name === "Search"){
          iconName=focused
          ? 'search'
          : 'search-outline'
        }
        else if(route.name==="Categories"){
          iconName=focused
          ? 'list'
          : 'list-outline'
        }
        return <Ionicons name={iconName} color={color} size={size}/>
      }
    })}
    tabBarOptions={{
      activeTintColor:"#C06C84",
      inactiveTintColor:"#363636",
      activeBackgroundColor: '#f8b195',
      inactiveBackgroundColor: '#f8b195',
      labelStyle: {
        fontSize: 15,
        fontFamily:"Cochin"
      },
    }}
    >
    <Tab.Screen name="Search" component={SearchScreen}/>
    <Tab.Screen options={{headerShown: false}} name="Categories" component={StackNavigator} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator;