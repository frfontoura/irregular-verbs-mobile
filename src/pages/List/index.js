import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function List() {
  return (
    <View style={styles.container}>
      <Text>Lista!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#ddd',
  },
});
