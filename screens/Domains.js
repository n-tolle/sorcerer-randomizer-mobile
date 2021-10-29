import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, Button, Alert } from 'react-native';
import Item from '../components/Item';

const DOMAINS = [
  { name: 'Haunted Forest', key: 'haunted-forest' },
  { name: 'Forgotten Temple', key: 'forgotten-temple' },
  { name: 'Outcast Sanctuary', key: 'outcast-sanctuary' },
  { name: 'Screaming Coast', key: 'screaming-coast' },
  { name: 'Bloodsoaked Fjord', key: 'bloodsoaked-fjord' },
  { name: 'Forsaken Church', key: 'forsaken-church' },
  { name: 'Lunatic Asylum', key: 'lunatic-asylum' },
  { name: 'Royal Palace', key: 'royal-palace' },
  { name: 'Witch Mountain', key: 'witch-mountain' },
  { name: 'Bewitched Woodland', key: 'bewitched-woodland' },
  { name: 'Bloodcursed Ship', key: 'bloodcursed-ship' },
  { name: 'Forlorn Opera House', key: 'forlorn-opera-house' },
];

const Domains = ({ navigation, route }) => {
  const [selectedDomains, setSelectedDomains] = useState([]);

  const handleValueChange = useCallback((value, domain) => {
    if (value) {
      setSelectedDomains((domains) => [...domains, domain]);
    } else {
      setSelectedDomains((domains) => {
        domains = domains.filter((selected) => selected.name !== domain.name);
        return domains;
      });
    }
  }, []);

  const handleSubmit = useCallback(() => {
    if (selectedDomains.length >= 2) {
      let updated = route.params.current;
      if (updated === undefined) {
        navigation.navigate('Home', {
          domains: selectedDomains,
        });
      } else {
        updated.domains = selectedDomains;
        navigation.navigate('Home', { current: updated });
      }
    } else {
      Alert.alert('Missing Data', 'Please select at least 2 domains.', [
        { text: 'OK', onPress: () => console.log('OK') },
      ]);
    }
  }, [selectedDomains]);

  return (
    <View style={styles.container}>
      <Text>Domains to include</Text>
      <FlatList
        data={DOMAINS}
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

export default Domains;
