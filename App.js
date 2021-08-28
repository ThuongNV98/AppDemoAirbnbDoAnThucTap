/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {SafeAreaView, Text} from 'react-native';
import HomeScreen from './src/screens/Home'
 import Post from './src/screens/Post'

 import feed from './src/assets/data/feed'
 const App = () => {
   return (
     <SafeAreaView style={{flex: 1}}>
       <Post post={feed} />
     </SafeAreaView>
   );
 };
 
 export default App;
 