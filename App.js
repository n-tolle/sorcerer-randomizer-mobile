import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Characters from './screens/Characters';
import Lineages from './screens/Lineages';
import Domains from './screens/Domains';
import Boards from './screens/Boards';

const Stack = createStackNavigator();

// const RootStack = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Characters"
//           component={Characters}
//           options={{ title: 'Characters' }}
//         />
//         <Stack.Screen
//           name="Lineages"
//           component={Lineages}
//           options={{ title: 'Lineages' }}
//         />
//         <Stack.Screen
//           name="Domains"
//           component={Domains}
//           options={{ title: 'Domains' }}
//         />
//         <Stack.Screen
//           name="Boards"
//           component={Boards}
//           options={{ title: 'Boards' }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sorcerer Randomizer</Text>
      {/* {characters === undefined ? null : (
        <FlatList
          data={characters}
          keyExtractor={(item) => item.name}
          renderItem={({ item, index }) => {
            return <Text style={styles.text}>{item.name}</Text>;
          }}
        />
      )} */}
      <Button
        color="#555"
        title="Choose Characters"
        onPress={() => navigation.navigate('Characters')}
      />
      <Button
        color="#555"
        title="Choose Lineages"
        onPress={() => navigation.navigate('Lineages')}
      />
      <Button
        color="#555"
        title="Choose Domains"
        onPress={() => navigation.navigate('Domains')}
      />
      <Button
        color="#555"
        title="Choose Boards"
        onPress={() => navigation.navigate('Boards')}
      />
    </View>
  );
};

const App = () => {
  // const [step, setStep] = useState(0);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <View style={styles.container}>
        <Text style={styles.text}>Sorcerer Randomizer!</Text> */}
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
      </Stack.Navigator>
      {/* <Characters step={step} />
        <Lineages step={step} />
        <Domains step={step} />
        <Boards step={step} />
        <GameInfo step={step} />
        <Setup step={step} />
        <Button onPress={step === 0 ? 0 : setStep(step - 1)} title="Back" />
        <Button onPress={step === 5 ? 5 : setStep(step + 1)} title="Next" /> */}
      {/* </View> */}
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
