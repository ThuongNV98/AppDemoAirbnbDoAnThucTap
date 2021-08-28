import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Post.style';
import Card from '../../components/Card';
import Body from '../../components/Body';
const Post = props => {
  const post = props.post;
  console.log(post);
  return (
    <View style={{flex: 1}}>
      {post.map(rows => (
        <Card.CardImage
          key={rows.id}
          image={rows.image}
          bedrooms={rows.bedrooms}
          description={rows.description}
          oldPrice={rows.oldPrice}
          newPrice={rows.newPrice}
          totalPrice={rows.totalPrice}
        />
      ))}
    </View>
  );
};

export default Post;
