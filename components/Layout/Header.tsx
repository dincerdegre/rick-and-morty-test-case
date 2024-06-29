import {View, StyleSheet, Image} from 'react-native';
import React from 'react';
const image = require('../../assets/images/Rick_and_Morty.png');

const Header = () => {
  return (
    <View style={styles.sectionContainer}>
      <Image style={styles.logo} source={image} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 5,
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: '#A6CCCC',
  },
  logo: {
    width: '50%',
    height: 50,
    alignSelf: 'center',
  },
});

export default Header;
