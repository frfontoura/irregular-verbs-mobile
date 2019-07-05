import React from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';

const Main = () => (
  <View style={styles.container}>
    <Text>Main</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#ddd',
  },
});

export default Main;
