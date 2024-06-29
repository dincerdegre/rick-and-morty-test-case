import {Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {ICheckboxProps} from '../../interface';
import Checkbox from 'expo-checkbox';

const CheckboxUI: React.FC<ICheckboxProps> = ({
  id,
  text,
  isChecked,
  onHandleCheck,
}) => {
  return (
    <Pressable
      style={styles.checkboxContainer}
      onPress={() => {
        onHandleCheck(id);
      }}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={() => {
          onHandleCheck(id);
        }}
      />
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#D3E6DF',
    padding: 2,
    color: '#687E7E',
    margin: 5,
  },
  checkbox: {
    margin: 8,
    borderColor: '#687E7E',
  },
  text: {
    color: '#5F7373',
    fontWeight: '600',
  },
});

export default CheckboxUI;
