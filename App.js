import 'react-native-gesture-handler';
import React, { useCallback } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Characters from './screens/Characters';
import Lineages from './screens/Lineages';
import Domains from './screens/Domains';
import Boards from './screens/Boards';
import PlayerCount from './screens/PlayerCount';
import Finalize from './screens/Finalize';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation, route }) => {
  let current = route.params !== undefined ? route.params.current : undefined;
  const finalize = useCallback(() => {
    let players = Number(current.count[0].name);
    let boardLimit = players === 4 ? 4 : 3;
    let characters = route.params.current.characters.slice();
    let lineages = route.params.current.lineages.slice();
    let domains = route.params.current.domains.slice();
    let boards = route.params.current.boards.slice();
    let playerSetup = [];
    let boardSetup = [];
    if (
      characters.length < players ||
      lineages.length < players ||
      domains.length < players ||
      boards.length < boardLimit
    ) {
      Alert.alert(
        'Missing Data',
        'Please make sure selections are valid for current player count.',
        [{ text: 'OK', onPress: () => console.log('OK') }]
      );
    } else {
      for (let i = 0; i < players; i++) {
        let order = i + 1;
        let characterIndex = Math.floor(Math.random() * characters.length);
        let lineageIndex = Math.floor(Math.random() * lineages.length);
        let domainIndex = Math.floor(Math.random() * domains.length);
        let currentPlayer = {};
        currentPlayer.order = order.toString();
        currentPlayer.character = characters[characterIndex].name;
        currentPlayer.lineage = lineages[lineageIndex].name;
        currentPlayer.domain = domains[domainIndex].name;
        characters.splice(characterIndex, 1);
        lineages.splice(lineageIndex, 1);
        domains.splice(domainIndex, 1);
        playerSetup.push(currentPlayer);
      }
      for (let i = 0; i < boardLimit; i++) {
        let boardIndex = Math.floor(Math.random() * boards.length);
        boardSetup.push(boards[boardIndex]);
        boards.splice(boardIndex, 1);
      }
      navigation.navigate('Finalize', {
        playerSetup: playerSetup,
        boardSetup: boardSetup,
        current: current,
      });
    }
  }, [current]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sorcerer Randomizer</Text>
      <Button
        color="#555"
        title="Choose Characters"
        onPress={() => navigation.navigate('Characters', { current: current })}
      />
      {current === undefined ? null : (
        <FlatList
          data={current.characters}
          keyExtractor={(item) => item.key}
          renderItem={({ item, index }) => {
            return <Text style={styles.text}>{item.name}</Text>;
          }}
        />
      )}
      <Button
        color="#555"
        title="Choose Lineages"
        onPress={() => navigation.navigate('Lineages', { current: current })}
      />
      {current === undefined ? null : (
        <FlatList
          data={current.lineages}
          keyExtractor={(item) => item.key}
          renderItem={({ item, index }) => {
            return <Text style={styles.text}>{item.name}</Text>;
          }}
        />
      )}
      <Button
        color="#555"
        title="Choose Domains"
        onPress={() => navigation.navigate('Domains', { current: current })}
      />
      {current === undefined ? null : (
        <FlatList
          data={current.domains}
          keyExtractor={(item) => item.key}
          renderItem={({ item, index }) => {
            return <Text style={styles.text}>{item.name}</Text>;
          }}
        />
      )}
      <Button
        color="#555"
        title="Choose Boards"
        onPress={() => navigation.navigate('Boards', { current: current })}
      />
      {current === undefined ? null : (
        <FlatList
          data={current.boards}
          keyExtractor={(item) => item.key}
          renderItem={({ item, index }) => {
            return <Text style={styles.text}>{item.name}</Text>;
          }}
        />
      )}
      <Button
        color="#555"
        title="Choose Players"
        onPress={() => navigation.navigate('PlayerCount', { current: current })}
      />
      {current === undefined ? null : (
        <FlatList
          data={current.count}
          keyExtractor={(item) => item.key}
          renderItem={({ item, index }) => {
            return <Text style={styles.text}>{item.name}</Text>;
          }}
        />
      )}
      <Button color="#555" title="Finalize" onPress={() => finalize()} />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Characters"
          component={Characters}
          options={{ title: 'Characters' }}
        />
        <Stack.Screen
          name="Lineages"
          component={Lineages}
          options={{ title: 'Lineages' }}
        />
        <Stack.Screen
          name="Domains"
          component={Domains}
          options={{ title: 'Domains' }}
        />
        <Stack.Screen
          name="Boards"
          component={Boards}
          options={{ title: 'Boards' }}
        />
        <Stack.Screen
          name="PlayerCount"
          component={PlayerCount}
          options={{ title: 'Player Count' }}
        />
        <Stack.Screen
          name="Finalize"
          component={Finalize}
          options={{ title: 'Finalize' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
  button: {
    backgroundColor: '#000',
    color: '#c02',
  },
});

export default App;
