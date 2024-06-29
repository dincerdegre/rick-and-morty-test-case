import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {ICharacter} from '../../interface';

const Card: React.FC<ICharacter> = ({name, image, status, locationName}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageThumbnail}>
        <Image
          style={styles.image}
          source={{uri: image}}
          resizeMode="contain"
        />
      </View>
      <View style={styles.info}>
        <View style={styles.textWrapper}>
          <Text style={styles.textLabel}>Name:</Text>
          <Text style={styles.textTitle}>{name}</Text>
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.textLabel}>Status:</Text>
          <Text
            style={[
              styles.textTitle,
              status === 'Dead'
                ? {color: 'red'}
                : status === 'Alive'
                ? {color: 'green'}
                : {},
            ]}>
            {status}
          </Text>
        </View>
        <View style={styles.locationWrapper}>
          <Text style={styles.textLabel}>Location:</Text>
          <Text style={styles.textTitle}>{locationName}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    minHeight: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D3E6DF',
    borderRadius: 5,
    marginVertical: 10,
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    margin: 5,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#88e23b',
    zIndex: 10,
    overflow: 'hidden',
  },
  image: {
    height: 100,
    width: 100,
    zIndex: 5,
  },
  info: {
    flex: 1,
  },
  textWrapper: {
    width: '100%',
    flexDirection: 'row',
  },
  locationWrapper: {
    width: '100%',
    flexDirection: 'column',
  },
  textLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#043c6e',
  },
  textTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#043c6e',
  },
});

export default Card;
