import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, Button, Alert } from 'react-native';
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

const Boards = ({ navigation, route }) => {
  const [selectedBoards, setSelectedBoards] = useState([]);

  const handleValueChange = useCallback((value, board) => {
    if (value) {
      setSelectedBoards((boards) => [...boards, board]);
    } else {
      setSelectedBoards((boards) => {
        boards = boards.filter((selected) => selected.name !== board.name);
        return boards;
      });
    }
  }, []);

  const handleSubmit = useCallback(() => {
    if (selectedBoards.length >= 3) {
      let updated = route.params.current;
      if (updated === undefined) {
        navigation.navigate('Home', {
          boards: selectedBoards,
        });
      } else {
        updated.boards = selectedBoards;
        navigation.navigate('Home', { current: updated });
      }
    } else {
      Alert.alert('Missing Data', 'Please select at least 3 boards.', [
        { text: 'OK', onPress: () => console.log('OK') },
      ]);
    }
  }, [selectedBoards]);

  return (
    <View style={styles.container}>
      <Text>Boards to include</Text>
      <FlatList
        data={BOARDS}
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

export default Boards;
