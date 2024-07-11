import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import Welcome from '../Screens/Welcome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Perfil from '../Screens/Perfil';

import Historial from '../Screens/Historial';
import Operacione from '../Screens/Operacione';

const stack=createStackNavigator();

function MyStackNavigator(){
return(
    <stack.Navigator  screenOptions={{ headerShown: false }}>
    <stack.Screen name='Welcome' component={Welcome}/>    
    <stack.Screen name='Login' component={LoginScreen}/>
    <stack.Screen name='Registro' component={RegisterScreen}/>
    <stack.Screen name='Tab' component={MyTabNavigator}/>
    </stack.Navigator>
);

}

const Tab=createBottomTabNavigator();

function MyTabNavigator(){
    return(
        <Tab.Navigator>
            <Tab.Screen name='Perfil'  component={Perfil}/> 
            <Tab.Screen name='Operaciones'  component={Operacione}/>
            <Tab.Screen name='Historial'  component={Historial}/>
        </Tab.Navigator>
    )
}

export default function MainNavigator() {
  return (
    <NavigationContainer>
       <MyStackNavigator/>
    </NavigationContainer>
  )
}
