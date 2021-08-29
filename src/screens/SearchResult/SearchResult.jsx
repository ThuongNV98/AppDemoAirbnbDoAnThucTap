import React from 'react';
import {View, Text, FlatList} from 'react-native';
import feed from '../../assets/data/feed';
import Post from '../Post/Post';

const SearchResult = props => {
  return (
    <View>
      <FlatList data={feed} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
};

export default SearchResult;
