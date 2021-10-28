import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, Button, Alert } from 'react-native';
import Item from '../components/Item';

const CHARACTERS = [
  { name: 'Ariapses', key: 'ariapses' },
  { name: 'Tegu', key: 'tegu' },
  { name: 'Miselda', key: 'miselda' },
  { name: 'Zevrane', key: 'zevrane' },
  { name: 'Virgiliu', key: 'virgiliu' },
  { name: 'Seth', key: 'seth' },
  { name: 'Jaleesa', key: 'jaleesa' },
  { name: 'Raganhar', key: 'raganhar' },
  { name: 'Thenoch', key: 'thenoch' },
  { name: 'Wachiwi', key: 'wachiwi' },
  { name: 'Sigismund', key: 'sigismund' },
  { name: 'Tatsu', key: 'tatsu' },
  { name: 'Merlin', key: 'merlin' },
  { name: 'Nicodemus', key: 'nicodemus' },
];

const Characters = ({ navigation }) => {
  const [selectedCharacters, setSelectedCharacters] = useState([]);

  const handleValueChange = useCallback((value, character) => {
    if (value) {
      setSelectedCharacters((characters) => [...characters, character]);
    } else {
      setSelectedCharacters((characters) => {
        characters = characters.filter(
          (selected) => selected.name !== character.name
        );
        return characters;
      });
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
        keyExtractor={(item) => item.key}
        renderItem={({ item, index }) => {
          return <Item item={item} handleValueChange={handleValueChange} />;
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
