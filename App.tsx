/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Header from './components/Layout/Header';
import {ICharacter} from './interface';
import {Character} from './rick.interface';
import Card from './components/UI/Card';
import Button from './components/UI/Button';
import StatusFilter from './components/StatusFilter';
import LocationFilter from './components/LocationFilter';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [characters, setCharacters] = useState<ICharacter[]>();
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [locationFilter, setLocationFilter] = useState<string[]>([]);
  const [isFilterVisible, setFilterVisible] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    let url = 'https://rickandmortyapi.com/api/character';
    if (statusFilter !== '') {
      url += `?status=${statusFilter}`;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => {
        let characterData: ICharacter[] = data.results.map(
          (item: Character) => {
            return {
              id: item.id,
              name: item.name,
              image: item.image,
              status: item.status,
              locationName: item.location.name,
            };
          },
        );
        if (locationFilter && locationFilter.length > 0) {
          characterData = characterData.filter(character =>
            locationFilter.includes(character.locationName),
          );
        }
        if (characterData.length === 0) {
          setError('No character found');
        } else {
          setError('');
        }
        setCharacters(characterData);
      })
      .catch(err => {
        console.error('Error:', err);
        setError('Something Went Wrong');
      });
  }, [statusFilter, locationFilter]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={'black'}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollContainer}>
        <Header />
        <View style={styles.mainContainer}>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonRight}>
              <Button
                title={'Filters'}
                onPress={() => {
                  setFilterVisible(!isFilterVisible);
                }}
              />
            </View>
          </View>
          {isFilterVisible && (
            <View style={styles.filterContainer}>
              <LocationFilter
                locationFilter={locationFilter}
                onChange={setLocationFilter}
              />
              <StatusFilter
                statusFilter={statusFilter}
                onChange={setStatusFilter}
              />
            </View>
          )}
          <View style={styles.characterList}>
            {error && <Text style={styles.errorText}>{error}</Text>}
            {characters?.map((character: ICharacter, index) => (
              <Card key={index} {...character} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  scrollContainer: {
    backgroundColor: '#A6CCCC',
    width: '100%',
    height: '100%',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonContainer: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  buttonRight: {
    width: '50%',
  },
  filterContainer: {
    flex: 1,
    width: '90%',
  },
  characterList: {
    flex: 1,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  errorText: {
    paddingVertical: 20,
    fontSize: 20,
    fontWeight: '400',
  },
});

export default App;
