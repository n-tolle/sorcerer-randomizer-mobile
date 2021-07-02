import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Item from '../components/Item';

const BOARDS = [
  { name: 'London ~ Whitechapel', key: 'london-whitechapel' },
  { name: 'London ~ Southwark', key: 'london-southwark' },
  { name: 'London ~ Old London', key: 'london-old-london' },
  { name: 'Underground ~ Hive', key: 'underground-hive' },
  { name: 'Luxor ~ Karnak Temple', key: 'luxor-karnak-temple' },
  { name: 'Cairo ~ Old City', key: 'cairo-old-city' },
  { name: 'Giza ~ Necropolis', key: 'giza-necropolis' },
];

const Boards = () => {
  return (
    <View style={styles.container}>
      <Text>Boards to include</Text>
      <FlatList
        data={BOARDS}
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

export default Boards;
