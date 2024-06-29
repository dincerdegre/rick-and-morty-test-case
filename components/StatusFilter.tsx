import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {IStatusFilterProps} from '../interface';
import CheckboxUI from './UI/CheckboxUI';

const StatusFilter: React.FC<IStatusFilterProps> = ({
  statusFilter,
  onChange,
}) => {
  const statusList = ['Alive', 'Dead', 'Unknown'];

  const handleStatusChecked = (index: number) => {
    const status = statusList[index];
    if (status === statusFilter) {
      onChange && onChange('');
      return;
    }
    onChange && onChange(status);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Status</Text>
      {statusList.map((status, index) => {
        return (
          <CheckboxUI
            key={index}
            id={index}
            text={status}
            onHandleCheck={handleStatusChecked}
            isChecked={status === statusFilter}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    marginTop: 15,
  },
  headerText: {
    color: '#043c6e',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
export default StatusFilter;
