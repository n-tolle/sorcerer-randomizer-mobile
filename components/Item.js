import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Item = ({ name }) => {
  return (
    <View>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#c02',
  },
});

export default Item;
