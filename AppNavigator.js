import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import HomePage from './Screen/HomePage';
import WelcomePage from './Screen/WelcomePage';
import HomeScreen from './Screen/HomeScreen';

import ProductDetails from './Screen/ProductDetailPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Icon from "react-native-feather";

const Stack = createNativeStackNavigator(); 
const Tab = createBottomTabNavigator(); 


const AppNavigation= () =>{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomePage} />
        <Stack.Screen name="HomeScreen" component={TabNavigator} /> 
        <Stack.Screen name="ProductDetail" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const TabNavigator = () => {
  return  <Tab.Navigator>

        <Tab.Screen name="Home" component={HomeScreen} options={{title:"Home", tabBarShowLabel:false ,tabBarIcon: ({focused}) =>(
          <Icon.Home color={focused? 'black' : 'gray'}/>
        ),
        }}/>
        <Tab.Screen name="product_DetailsBtn" component={HomeScreen} options={{title: 'Details', tabBarIcon: ({focused}) =>(
          <Icon.Layers color={focused? 'black' : 'gray'}/>
        ),
        }}/>
        <Tab.Screen name="MessageBtn" component={HomeScreen} options={{title: 'Message', tabBarIcon: ({focused}) =>(
          <Icon.MessageSquare color={focused? 'black' : 'gray'}/>
        ),
        }}/>
        <Tab.Screen name="SettingBtn" component={HomeScreen} options={{title: 'Setting', tabBarIcon: ({focused}) =>(
          <Icon.Settings color={focused? 'black' : 'gray'}/>
        ),
        }}/>
      </Tab.Navigator>

}

export default AppNavigation;