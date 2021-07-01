// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Characters from './screens/Characters';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sorcerer Randomizer!</Text>
      <Characters />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#c02',
  },
});

export default App;
