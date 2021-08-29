import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './Guest.style';

const Guest = props => {
  const [adults, setAdults] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View>
          <Text style={styles.name}>Adults</Text>
          <Text style={styles.age}>Age 24 or above</Text>
        </View>
        <View style={styles.containerButton}>
          <Pressable
            style={styles.button}
            onPress={() => setAdults(adults - 1)}>
            <Text style={styles.textBtn}>-</Text>
          </Pressable>
          <Text style={styles.number}>{adults}</Text>

          <Pressable
            style={styles.button}
            onPress={() => setAdults(adults + 1)}>
            <Text style={styles.textBtn}>+</Text>
          </Pressable>
        </View>
      </View>
      <Pressable
        style={styles.btnSearch}
        onPress={() => console.warn('Cai lon')}>
        <Text style={styles.txtSearch}>Search</Text>
      </Pressable>
    </View>
  );
};

export default Guest;
