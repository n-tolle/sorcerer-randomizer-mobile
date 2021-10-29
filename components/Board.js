import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Board = ({ board }) => {
  return (
    <View>
      <Text style={styles.text}>{board}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#c02',
  },
});

export default Board;
