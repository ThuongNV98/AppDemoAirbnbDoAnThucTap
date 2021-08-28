import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import Constants from '../../common/Constants';
import styles from './Home.style';
import Button from '../../components/Button';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Home = props => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.searchBtn}
        onPress={() => console.log('OK ne baby')}>
        <Text style={styles.searchTextBtn}>
          {Constants.TEXT_WHERE_ARE_YOU_GOING}
        </Text>
      </Pressable>
      <ImageBackground
        style={styles.imgContainer}
        source={Constants.IMG_BACKGROUND}>
        <Text style={styles.textWellCome}>{Constants.TEXT_WELLCOME}</Text>
        <View style={styles.btnHome}>
          <Button.ButtonLarge
            title="BTN"
            onPress={() => console.log('OK em yeu')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;
