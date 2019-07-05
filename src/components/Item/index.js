import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Item({ baseForm, simplePast, pastParticiple }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{baseForm}</Text>
      <Text style={styles.text}>{simplePast}</Text>
      <Text style={styles.text}>{pastParticiple}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 3,
    marginBottom: 10,
  },
  text: {
    flex: 1,
  },
});
