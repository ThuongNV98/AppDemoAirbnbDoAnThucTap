import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarActiveBackgroundColor: '#f15454'}}>
      <Tab.Screen
        name="Explore"
        component={Home}
        options={{
          tabBarIcon: ({color}) => {
            <Fontisto name="search" size={25} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Saved"
        component={Home}
        options={{
          tabBarIcon: ({color}) => {
            <FontAwesome name="heart-o" size={25} color={color} />;
          },
        }}
      />

      <Tab.Screen
        name="Airbnb"
        component={Home}
        options={{
          tabBarIcon: ({color}) => {
            <FontAwesome name="airbnb" size={25} color={color} />;
          },
        }}
      />

      <Tab.Screen
        name="Messages"
        component={Home}
        options={{
          tabBarIcon: ({color}) => {
            <FontAwesome name="message-square" size={25} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="profile"
        component={Home}
        options={{
          tabBarIcon: ({color}) => {
            <FontAwesome name="user" size={25} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
