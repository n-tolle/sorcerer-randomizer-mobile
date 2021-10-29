import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, Button, Alert } from 'react-native';
import Item from '../components/Item';

const PLAYERCOUNT = [
  { name: '2', key: 'two' },
  { name: '3', key: 'three' },
  { name: '4', key: 'four' },
];

const PlayerCount = ({ navigation, route }) => {
  const [selectedCount, setSelectedCount] = useState([]);

  const handleValueChange = useCallback((value, count) => {
    if (value) {
      setSelectedCount((counts) => [...counts, count]);
    } else {
      setSelectedCount((counts) => {
        counts = counts.filter((selected) => selected.name !== count.name);
        return counts;
      });
    }
  }, []);

  const handleSubmit = useCallback(() => {
    if (selectedCount.length === 1) {
      let updated = route.params.current;
      if (updated === undefined) {
        navigation.navigate('Home', {
          current: { count: selectedCount },
        });
      } else {
        updated.count = selectedCount;
        navigation.navigate('Home', { current: updated });
      }
    } else {
      Alert.alert('Invalid Player Count', 'Please select only one option.', [
        { text: 'OK', onPress: () => console.log('OK') },
      ]);
    }
  }, [selectedCount]);

  return (
    <View style={styles.container}>
      <Text>How many players?</Text>
      <FlatList
        data={PLAYERCOUNT}
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

export default PlayerCount;
