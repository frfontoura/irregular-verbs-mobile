import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Quiz({ navigation }) {
  const questions = navigation.getParam('questions', '10');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{questions}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#000',
  },
  text: {
    color: '#fff',
  },
});
