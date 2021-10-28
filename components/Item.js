import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

const Item = ({ item, handleValueChange }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    handleValueChange(!isEnabled, item);
    setIsEnabled((previousState) => !previousState);
  };
  return (
    <View>
      <Text style={styles.text}>{item.name}</Text>
      <Switch
        trackColor={{ false: '#767676', true: '#c02' }}
        thumbColor={isEnabled ? '#000' : 'fff'}
        ios_backgroundColor="767676"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#c02',
  },
});

export default Item;
