import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
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

const Domains = () => {
  return (
    <View style={styles.container}>
      <Text>Domains to include</Text>
      <FlatList
        data={DOMAINS}
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

export default Domains;
