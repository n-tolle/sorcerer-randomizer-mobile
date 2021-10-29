import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, Button, Alert } from 'react-native';
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

const Lineages = ({ navigation, route }) => {
  const [selectedLineages, setSelectedLineages] = useState([]);

  const handleValueChange = useCallback((value, lineage) => {
    if (value) {
      setSelectedLineages((lineages) => [...lineages, lineage]);
    } else {
      setSelectedLineages((lineages) => {
        lineages = lineages.filter(
          (selected) => selected.name !== lineage.name
        );
        return lineages;
      });
    }
  }, []);

  const handleSubmit = useCallback(() => {
    if (selectedLineages.length >= 2) {
      let updated = route.params.current;
      if (updated === undefined) {
        navigation.navigate('Home', {
          current: { lineages: selectedLineages },
        });
      } else {
        updated.lineages = selectedLineages;
        navigation.navigate('Home', { current: updated });
      }
    } else {
      Alert.alert('Missing Data', 'Please select at least 2 characters.', [
        { text: 'OK', onPress: () => console.log('OK') },
      ]);
    }
  }, [selectedLineages]);

  return (
    <View style={styles.container}>
      <Text>Lineages to include</Text>
      <FlatList
        data={LINEAGES}
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

export default Lineages;
