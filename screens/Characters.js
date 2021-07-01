import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
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

const Characters = () => {
  return (
    <View style={styles.container}>
      <Text>Characters to include</Text>
      <FlatList
        data={CHARACTERS}
        keyExtractor={(item) => item.name}
        renderItem={({ item, index }) => {
          return <Item name={item.name} />;
        }}
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
