import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, Button, Alert } from 'react-native';
import Item from '../components/Item';

const CHARACTERS = [
  { name: 'Ariapses' },
  { name: 'Tegu' },
  { name: 'Miselda' },
  { name: 'Zevrane' },
  { name: 'Virgiliu' },
  { name: 'Seth' },
  { name: 'Jaleesa' },
  { name: 'Raganhar' },
  { name: 'Thenoch' },
  { name: 'Wachiwi' },
  { name: 'Sigismund' },
  { name: 'Tatsu' },
  { name: 'Merlin' },
  { name: 'Nicodemus' },
];

const Characters = ({ navigation }) => {
  const [selectedCharacters, setSelectedCharacters] = useState([]);

  const handleValueChange = useCallback((value, character) => {
    if (value) {
      setSelectedCharacters((characters) => [...characters, character]);
    } else {
      setSelectedCharacters((characters) =>
        characters.filter((selected) => selected.name !== character.name)
      );
    }
  }, []);

  const handleSubmit = useCallback(() => {
    if (selectedCharacters.length >= 2) {
      navigation.navigate('Home', {
        characters: selectedCharacters,
      });
    } else {
      Alert.alert('Missing Data', 'Please select at least 2 characters.', [
        { text: 'OK', onPress: () => console.log('OK') },
      ]);
    }
  }, [selectedCharacters]);

  return (
    <View style={styles.container}>
      <Text>Characters to include</Text>
      <FlatList
        data={CHARACTERS}
        keyExtractor={(item) => item.name}
        renderItem={({ item, index }) => {
          return (
            <Item name={item.name} handleValueChange={handleValueChange} />
          );
        }}
        ListFooterComponent={<Button title={'Submit'} onPress={handleSubmit} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default Characters;
