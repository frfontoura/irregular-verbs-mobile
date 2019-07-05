import React from 'react';
import {
  View, Text, StyleSheet, StatusBar,
} from 'react-native';

const Main = () => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor="#08f" />
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
