// In App.js in a new project

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Image, Text, View } from 'react-native';
import SplashScreen from '../../pages/splash';
import LoginScreen from '../../pages/login';
import HomeScreen from '../../pages/home';
import FromIbuHamilKEK from '../../pages/surveilan/ibuhamilkek';

const Tab = createBottomTabNavigator();



const Stack = createNativeStackNavigator();

function StackNav() {
  return (
 
      <Stack.Navigator initialRouteName=''>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="FromIbuHamilKEK" component={FromIbuHamilKEK} options={{headerShown:false}}/>
      </Stack.Navigator>
   
  );
}

export default StackNav;