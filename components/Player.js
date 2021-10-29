import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Player = ({ player }) => {
  return (
    <View>
      <Text style={styles.text}>Player {player.order}</Text>
      <Text style={styles.text}>
        {player.character} the {player.lineage} of the {player.domain}
      </Text>
      <Text />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#c02',
  },
});

export default Player;
