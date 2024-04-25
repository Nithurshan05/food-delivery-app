import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import HomePage from './Screen/HomePage';
import WelcomePage from './Screen/WelcomePage';
import HomeScreen from './Screen/HomeScreen';

const Stack = createNativeStackNavigator(); 
export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Welcome" component={WelcomePage} /> */}
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}  