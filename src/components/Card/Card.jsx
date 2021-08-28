import React from 'react';
import {View, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import styles from './Card.style';

const CardImage = props => (
  <View style={styles.container}>
    <Image style={styles.iamge} source={{uri: props.image}} />
    <Text>{props.bedrooms}</Text>
    <Text style={styles.description}>{props.description}</Text>
    <View style={styles.prices}>
      <Text style={styles.oldPrice}>{props.oldPrice}</Text>
      <Text style={styles.newPrice}>{props.newPrice}</Text>
    </View>
    <Text style={styles.totalPrice}>{props.totalPrice}</Text>
  </View>
);

CardImage.prototype = {
  image: PropTypes.string.isRequired,
  bedrooms: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  oldPrice: PropTypes.string.isRequired,
  newPrice: PropTypes.string.isRequired,
};

export default {CardImage};
