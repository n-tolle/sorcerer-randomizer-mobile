import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import Player from '../components/Player';
import Board from '../components/Board';

const Finalize = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Game Setup</Text>
      <Text />
      <FlatList
        data={route.params.playerSetup}
        keyExtractor={(item) => item.order}
        renderItem={({ item, index }) => {
          return <Player player={item} />;
        }}
      />
      <Text style={styles.text}>Boards</Text>
      <Text />
      <FlatList
        data={route.params.boardSetup}
        keyExtractor={(item) => item.key}
        renderItem={({ item, index }) => {
          return <Board board={item.name} />;
        }}
      />
      <Button
        color="#555"
        title="Home"
        onPress={() =>
          navigation.navigate('Home', { current: route.params.current })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  text: {
    color: '#c02',
    textDecorationLine: 'underline',
  },
});

export default Finalize;
