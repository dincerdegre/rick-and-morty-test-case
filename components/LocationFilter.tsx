import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ILocation, ILocationFilterProps} from '../interface';
import CheckboxUI from './UI/CheckboxUI';
import {Location} from '../rick.interface';

const LocationFilter: React.FC<ILocationFilterProps> = ({
  locationFilter,
  onChange,
}) => {
  const [locations, setLocations] = useState<ILocation[]>();

  const handleChecked = (id: number) => {
    const updatedLocations = locations?.map(location => {
      if (location.id === id) {
        location.isChecked = !location.isChecked;
      }
      return location;
    });
    setLocations(updatedLocations);
    onChange(
      updatedLocations
        ? updatedLocations
            .filter(location => location.isChecked)
            .map(location => location.name)
        : [],
    );
  };

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/location')
      .then(response => response.json())
      .then(data => {
        const locationData: ILocation[] = data.results.map(
          (location: Location) => {
            return {
              id: location.id,
              name: location.name,
              isChecked: locationFilter?.includes(location.name) || false,
            };
          },
        );
        setLocations(locationData);
      });
  }, [locationFilter]);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Locations</Text>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {locations?.map((location, index) => {
          return (
            <CheckboxUI
              key={index}
              id={location.id}
              text={location.name}
              onHandleCheck={handleChecked}
              isChecked={location.isChecked}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: 180,
    marginTop: 15,
  },
  headerText: {
    color: '#043c6e',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default LocationFilter;
