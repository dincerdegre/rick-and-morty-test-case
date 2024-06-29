import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {IButtonProps} from '../../interface';

const Button: React.FC<IButtonProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title && title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#043c6e',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#a6cccc',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;
