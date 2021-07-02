import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Item from '../components/Item';

const LINEAGES = [
  { name: 'Animist', key: 'animist' },
  { name: 'Demonologist', key: 'demonologist' },
  { name: 'Bloodlord', key: 'bloodlord' },
  { name: 'Necromancer', key: 'necromancer' },
  { name: 'Druid', key: 'druid' },
  { name: 'House of Petro', key: 'petro' },
  { name: 'Children of Alyisia', key: 'alyisia' },
  { name: 'Sword of Gabriel', key: 'gabriel' },
];

const Lineages = () => {
  return (
    <View style={styles.container}>
      <Text>Lineages to include</Text>
      <FlatList
        data={LINEAGES}
        keyExtractor={(item) => item.key}
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

export default Lineages;
