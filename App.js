/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import HomeScreen from './src/screens/Home';
import Post from './src/screens/Post';
import Router from './src/navigations/Router';
import DestinationSearch from './src/screens/DestinationSearch';

import feed from './src/assets/data/feed';
import {NavigationContainer} from '@react-navigation/native';
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
